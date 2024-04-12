import { connect } from "@/config/DB";
import { User } from "@/models/User";
import { get_user_data_from_session } from "@/utils/session";
import { NextResponse } from "next/server";
import NodeCache from "node-cache";

connect();
const nodeCache = new NodeCache();

export async function GET(request) {
    try {
        let user;
        const userId = await get_user_data_from_session(request);
        if(nodeCache.has(userId)){
            user = JSON.parse(nodeCache.get(userId))
        } else {
            user = await User.findOne({ _id: userId });
            nodeCache.set(userId, JSON.stringify(user), 3600)
        }
        return NextResponse.json({ user }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            message: error.message
        }, { status: 500 })
    }
}


export async function PUT(request) {
    try {
        const data = await request.json();
        const { username, email, phoneNumber, password } = data;

        const userId = await get_user_data_from_session(request);
        const user = await User.findOne({ _id: userId.id })

        const newUserInfo = await User.findOneAndUpdate(user, {
            username, email, phoneNumber, password
        }, {
            new: true,
            runValidators: true,
        })
        nodeCache.del(userId)
        return NextResponse.json({ newUserInfo }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: error.message
        }, { status: 500 })
    }
}


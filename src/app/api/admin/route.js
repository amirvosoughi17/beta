import { connect } from "@/config/DB";
import { User } from "@/models/User";
import { get_user_data_from_session } from "@/utils/session";
import { NextResponse } from "next/server";
import NodeCache from "node-cache";

connect();

const nodeCache = new NodeCache();

export async function GET(request) {
    try {
        const userId = await get_user_data_from_session(request);
        const user = await User.findOne({ _id: userId })

        let users = [];

        if (user.role === "admin") {
            if (nodeCache.has("users")) {
                users = JSON.parse(nodeCache.get("users"));

            } else {
                users = await User.find();

                nodeCache.set("users", JSON.stringify(users))
            }
            return NextResponse.json(users, { status: 200 });

        } else {
            return NextResponse.json({
                success: false,
                message: "You don't have Permission to be here!"
            }, { status: 401 })
        }
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}
import { connect } from "@/config/DB";
import { User } from "@/models/User";
import { get_user_data_from_session } from "@/utils/session";

connect();
export async function GET(request) {
    try {
        const userId = await get_user_data_from_session(request);
        const user = await User.findOne({ _id: userId });
        return Response.json({ user }, { status: 200 })
    } catch (error) {
        return Response.json({
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

        return Response.json({ newUserInfo }, { status: 200 });
    } catch (error) {
        return Response.json({
            message: error.message
        }, { status: 500 })
    }
}


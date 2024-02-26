import { connect } from "@/config/DB";
import { User } from "@/models/User";
import { get_user_data_from_session } from "@/utils/session";
connect();
export async function GET(request) {
    try {
        const user_id = await get_user_data_from_session(request);
        const user = await User.findOne({ _id: user_id })
        return Response.json(user, { status: 200 });
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 });
    }
}
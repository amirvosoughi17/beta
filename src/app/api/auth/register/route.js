import bcrpyt from 'bcryptjs';
import { connect } from "@/config/DB";
import { User } from "@/models/User";
import { generate_token } from "@/utils/session";

connect();

export async function POST(request) {
    const { username, email, phoneNumber, password } = await request.json();

    if (!username || !email || !password || !phoneNumber) {
        return Response.json({
            message: "Please fill in all inputs"
        }, { status: 400 })
    }

    if (username.length < 3) {
        return Response.json({
            message: "Username should be more that 3 characters"
        }, { status: 400 })
    }
    const existUser = await User.findOne({ email: email });
    if (existUser) {
        return Response.json({
            message: "user has already registerd in website"
        }, { status: 400 })
    }


    const hashedPasss = await bcrpyt.hash(password, 10);
    try {
        const newUser = await User.create({
            username,
            email,
            phoneNumber,
            password: hashedPasss
        })

        return generate_token("Registeration was successfull", 201, newUser);
    } catch (error) {
        return Response.json({
            message: error.message
        }, { status: 500 })
    }
}
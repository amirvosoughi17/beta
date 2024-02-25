import { NextResponse } from "next/server";
import connect from '@/config/DB'
import User from '@/models/User';
import bcrpyt from 'bcryptjs';

export async function POST(request)  {
    const { username, email, phoneNumber, password }  = request.json();

    const existUser = await User.findOne({email});
    if(existUser)  {
        return NextResponse.json({message : "user exist"} , {status : 400})
    }

    await connect();

    const hashedPasss = await bcrpyt.hash(password, 10);

    const newUser  = await new User ({
        username,
        email,
        phoneNumber,
        password : hashedPasss
    })
    try {
        await newUser.save();
        return NextResponse.json({message : "register success"} , {status : 200} )
    } catch (error) {
        return NextResponse.json({message : "failed to register"} , {status : 400})
    }
}
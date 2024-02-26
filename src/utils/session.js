import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers';

export function generate_token(message, statusCode, user) {
    const token = jwt.sign({ id: user.id }, process.env.NEXTAUTH_SECRET, {
        expiresIn: '5d'
    });
    const cookie_options = {
        name: "access_token",
        value: token,
        maxAge: 604800,
        httpOnly: true
    }
    return Response.json({
        message: message
    }, {
        status: statusCode
    }, cookies().set(cookie_options));
}


export async function get_user_data_from_session(request) {
    try {
        const data = request.cookies.get("access_token");
        const decode_value = jwt.verify(data.value, process.env.NEXTAUTH_SECRET)
        return decode_value.id;
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 });
    }
}
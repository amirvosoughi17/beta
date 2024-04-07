import { verify } from "@/utils/vandar";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const api = process.env.VANDAR_API_KEY;
        const { token, status } = request.query;

        const result = await verify(api, token);

        if (result.status === 1) {
            return NextResponse.json({ "message": 'SUCCESS' }, { status: 200 });
        } else {
            return NextResponse.json({ "message": "FAILED" }, { status: 400 })
        }
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}
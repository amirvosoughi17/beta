import { NextResponse } from "next/server";

export async function GET() {
    try {

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}
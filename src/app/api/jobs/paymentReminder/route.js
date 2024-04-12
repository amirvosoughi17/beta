import { connect } from "@/config/DB";
import Order from "@/models/Order";
import { User } from "@/models/User";
import { sendNotification } from "@/utils/sendNotification";
import { NextResponse } from "next/server";
import cron from 'node-cron';
connect();
// 0 */1 * * *
export async function GET() {

}


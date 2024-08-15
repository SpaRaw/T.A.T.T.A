import { NextResponse } from 'next/server';
import excuteQuery from "@/app/_lib/db";
import Abrechnung from "@/app/_lib/serverActions/abrechnung/abrechnung";

export async function GET() {
    Abrechnung()
    return NextResponse.json({data: "good"});
}

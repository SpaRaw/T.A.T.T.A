"use server"
import { NextResponse } from "next/server";

async function GET(req){
    return NextResponse.json({test: "Hallo", abba:"WOrld"});
}

export {GET}
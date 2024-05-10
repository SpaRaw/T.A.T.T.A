"use server";
import {NextResponse} from "next/server";
import mysql from 'mysql2';
import excuteQuery from "@/app/_lib/db";


export async function POST(req){
    let respones;
    const body = await req.formData()
    for(let element of body){
        if(element[0] === "type"){
            switch (element[1]){
                case "drive": respones = await handleDrivePost(body); break;
            }
        }
    }
    return respones;
}

async function handleDrivePost(req){
    const [type, dest, payer, date, distance] = req;
    if(dest[1] === '' || date[1]===''|| distance[1]===''){
        console.log("Not all data here")
        return NextResponse.json({error: 'Information is missing'}, {status: 400})
    }
    try{
        console.log("try query")
        let data = await excuteQuery({
            query: "INSERT INTO drive (DriveName, Payer, Date, Distance) VALUES (?, ?, ?, ?)",
            values: [dest[1], payer[1], date[1], distance[1]]
        })
        return NextResponse.json({status:200, msg: "insert succ"})

    }catch (e) {
        console.log("No insertion");
        console.log(e)
    }

}
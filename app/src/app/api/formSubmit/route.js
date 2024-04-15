"use server";
import {NextResponse} from "next/server";
import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
})

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
        connection.query(
            `INSERT INTO drive (DriveName, Payer, Date, Distance) VALUES (?, ?, ?, ?)`,
            [dest[1], payer[1], date[1], distance[1]],
            (err, result) =>{
                console.log("query succ")
            }
        )
        connection.commit();
        return NextResponse.json({status:200, msg: "insert succ"})

    }catch (e) {
        console.log("No insertion");
        console.log(e)
    }

}
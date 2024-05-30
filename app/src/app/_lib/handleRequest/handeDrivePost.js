import {NextResponse} from "next/server";
import excuteQuery from "@/app/_lib/db";

export default async function handleDrivePost(req){
    const [type, dest, payer, date, distance] = req;
    if(dest[1] === '' || date[1]===''|| distance[1]===''){
        console.log("Not all data here")
        return NextResponse.json({error: 'Information is missing'}, {status: 400})
    }
    try{
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
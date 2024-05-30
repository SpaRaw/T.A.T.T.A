import {NextResponse} from "next/server";
import excuteQuery from "@/app/_lib/db";

export default async function handleDriveUpdate(req){
    if(req.get('distance') === '' || req.get('dest') === ''|| req.get('payer') === '' || req.get('ID') === '' || req.get('date') === ''){
        console.log("Not all data here")
        return NextResponse.json({error: 'Information is missing'}, {status: 400})
    }
    try{
        let data = await excuteQuery({
            query: "UPDATE drive SET DriveName=?, Payer=?, DATE=?, DISTANCE=? WHERE ID=?",
            values: [req.get('dest'), req.get('payer'), req.get('date'), req.get('distance'), req.get('ID')]
        })
        return NextResponse.json({status:200, msg: "update succ"})

    }catch (e) {
        console.log("No insertion");
        console.log(e)
    }

}
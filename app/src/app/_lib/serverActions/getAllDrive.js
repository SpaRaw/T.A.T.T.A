import excuteQuery from "@/app/_lib/db";
import {NextResponse} from "next/server";

export default async function getAllDrive(){
    let data = await excuteQuery({
        query: "SELECT * FROM drive ORDER BY DATE DESC LIMIT 50"
    })
    const groupedData = {};
    for(let element of data){
        let formattedDate = new Date(element.Date).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        }).replace(/ /g, '-');

        if (!groupedData[formattedDate]) {
            groupedData[formattedDate] = [];
        }
        groupedData[formattedDate].push(element);
    };
    return groupedData;
}
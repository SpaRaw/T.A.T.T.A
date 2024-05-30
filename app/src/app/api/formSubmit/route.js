"use server";
import handleDrivePost from "@/app/_lib/handleRequest/handeDrivePost";

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

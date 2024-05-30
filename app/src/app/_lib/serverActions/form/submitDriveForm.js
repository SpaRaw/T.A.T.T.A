"use server"

import {redirect} from "next/navigation";
import insertNewDrive from "@/app/_lib/serverActions/data/INSERT/insertNewDrive";
import updateDriveEntry from "@/app/_lib/serverActions/data/UPDATE/updateDriveEntry";
import {revalidatePath} from "next/cache";

export default async function submitDriveForm(formData){
    let response;
    if(formData.get('IsNewEntry') === 'new'){
        response = await insertNewDrive(formData);
    }else{
        response = await updateDriveEntry(formData);
    }
    if(response.success){
        revalidatePath('/fahrten')
        redirect('/fahrten');
    }
}
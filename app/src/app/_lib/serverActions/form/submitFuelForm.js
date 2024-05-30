"use server"
import insertNewFuel from "@/app/_lib/serverActions/data/INSERT/insetNewFuel";
import {redirect} from "next/navigation";
import updateFuelEntry from "@/app/_lib/serverActions/data/UPDATE/updateFuelEntry";

export default async function submitFuelForm(formData){
    let response;
    if(formData.get('IsNewEntry') === 'new'){
        response = await insertNewFuel(formData);
    }else{
        response = await updateFuelEntry(formData);
    }
    if(response.success){
        redirect('/tanken');
    }
}
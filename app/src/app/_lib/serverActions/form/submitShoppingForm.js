"use server"
import insertNewFuel from "@/app/_lib/serverActions/data/INSERT/insetNewFuel";
import {redirect} from "next/navigation";
import insertNewShopping from "@/app/_lib/serverActions/data/INSERT/insertNewShopping";
import updateShoppingEntry from "@/app/_lib/serverActions/data/UPDATE/updateShoppingEntry";
import {revalidatePath} from "next/cache";

export default async function submitShoppingForm(formData){
    let response;
    if(formData.get('IsNewEntry') === 'new'){
        response = await insertNewShopping(formData);
    }else{
        response = await updateShoppingEntry(formData);
    }
    if(response?.success){
        revalidatePath('/einkauf');
        redirect('/einkauf');
    }
}
import excuteQuery from "@/app/_lib/db";

export default async function updateDriveEntry(formData){
    try{
        let data = await excuteQuery({
            query: "UPDATE drive SET DriveName=?, Payer=?, Date=?, Distance=?, isActive=? WHERE ID=?",
            values: [formData.get('dest'), formData.get('payer'), formData.get('date'), formData.get('distance'), formData.get('delete')??1 ,formData.get('ID')]
        })
        return {success: true, msg:"OK"}
    }catch (e) {
        console.log(e);
        return {success: false, msg:"Anlegen neuer Tankus fehlgeschlagen"}
    }
}
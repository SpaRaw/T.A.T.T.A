import excuteQuery from "@/app/_lib/db";

export default async function insertNewDrive(formData){
    try{
        let data = await excuteQuery({
            query: "INSERT INTO drive (DriveName, Payer, Date, Distance) VALUES (?, ?, ?, ?)",
            values: [formData.get('dest'),formData.get('payer'),formData.get('date'),formData.get('distance')]
        })
        return {success: true, msg:"OK"}
    }catch (e) {
        console.log(e);
        return {success: false, msg:"Anlegen neuer shopping entry fehlgeschlagen"}
    }

}
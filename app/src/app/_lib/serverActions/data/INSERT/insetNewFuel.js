import excuteQuery from "@/app/_lib/db";

export default async function insertNewFuel(formData){
    try{
        let data = await excuteQuery({
            query: "INSERT INTO fuel (Date, Type, Payer, Price) VALUES (?, ?, ?, ?)",
            values: [formData.get('date'),formData.get('type'),formData.get('payer'),formData.get('price')]
        })
        return {success: true, msg:"OK"}
    }catch (e) {
        console.log(e);
        return {success: false, msg:"Anlegen neuer Tankus fehlgeschlagen"}
    }

}
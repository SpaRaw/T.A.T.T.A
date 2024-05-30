import excuteQuery from "@/app/_lib/db";

export default async function insertNewShopping(formData){
    try{
        let data = await excuteQuery({
            query: "INSERT INTO shopping (Date, Payer, CorgiAmount, MinlaAmount, Name) VALUES (?, ?, ?, ?, ?)",
            values: [formData.get('date'),formData.get('payer'),formData.get('corgisShare'),formData.get('corgisShare'), formData.get('where')]
        })
        return {success: true, msg:"OK"}
    }catch (e) {
        console.log(e);
        return {success: false, msg:"Anlegen neuer shopping entry fehlgeschlagen"}
    }

}
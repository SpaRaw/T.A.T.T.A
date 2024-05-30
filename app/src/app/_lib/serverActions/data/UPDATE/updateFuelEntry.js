import excuteQuery from "@/app/_lib/db";

export default async function updateFuelEntry(formData){
    try{
        let data = await excuteQuery({
            query: "UPDATE fuel SET Date=?, Type=?, Payer=?, Price=? WHERE ID=?",
            values: [formData.get('date'), formData.get('type'), formData.get('payer'), formData.get('price'), formData.get('ID')]
        })
        return {success: true, msg:"OK"}
    }catch (e) {
        console.log(e);
        return {success: false, msg:"Anlegen neuer Tankus fehlgeschlagen"}
    }
}
import excuteQuery from "@/app/_lib/db";

export default async function updateShoppingEntry(formData){
    try{
        let data = await excuteQuery({
            query: "UPDATE shopping SET Date=?, Payer=?, CorgiAmount=?, MinlaAmount=?, Name=?, isActive=? WHERE ID=?",
            values: [formData.get('date'), formData.get('payer'), formData.get('corgisShare'), formData.get('minlasShare'), formData.get('where'), formData.get('delete')??1,formData.get('ID')]
        })
        return {success: true, msg:"OK"}
    }catch (e) {
        console.log(e);
        return {success: false, msg:"Anlegen neuer Tankus fehlgeschlagen"}
    }
}
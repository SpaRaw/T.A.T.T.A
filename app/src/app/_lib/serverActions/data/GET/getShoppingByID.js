import excuteQuery from "@/app/_lib/db";
export default async function getShoppingByID(ID){
    let data = await excuteQuery({
        query: "SELECT * FROM shopping WHERE ID=?",
        values: ID
    })

    return data[0] !== null? data[0]: null;
}
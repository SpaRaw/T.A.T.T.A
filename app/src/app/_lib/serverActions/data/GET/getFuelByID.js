import excuteQuery from "@/app/_lib/db";
export default async function getFuelByID(ID){
    let data = await excuteQuery({
        query: "SELECT * FROM fuel WHERE ID=?",
        values: ID
    })

    return data[0] !== null? data[0]: null;
}
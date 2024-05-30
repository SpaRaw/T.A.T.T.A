import excuteQuery from "@/app/_lib/db";
export default async function getDriveByID(ID){
    let data = await excuteQuery({
        query: "SELECT * FROM drive WHERE ID=?",
        values: ID
    })

    return data[0] !== null? data[0]: null;
}
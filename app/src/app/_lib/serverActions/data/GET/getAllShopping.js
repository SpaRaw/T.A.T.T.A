import excuteQuery from "@/app/_lib/db";

export default async function getAllShopping(){
    let data = await excuteQuery({
        query: "SELECT * FROM shopping WHERE isActive=1 ORDER BY DATE DESC LIMIT 50"
    })
    const groupedData = {};
    for(let element of data){
        let formattedDate = new Date(element.Date).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        }).replace(/ /g, '-');

        if (!groupedData[formattedDate]) {
            groupedData[formattedDate] = [];
        }
        groupedData[formattedDate].push(element);
    };
    return groupedData;
}
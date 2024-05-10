
import Open from "@/app/_components/UI/Open/Open";
import DriveDay from "@/app/fahrten/DriveDay/DriveDay";

async function getData(){
    const response = await fetch("http://localhost:3000/api/fetch/drive");
    let data =await  response.json();
    return data.response;
}
export default async function DrivePage(){
    const data =  await getData();
    let list = [];
    for(const [key, value] of Object.entries(data)){
        list.push(<DriveDay key={key} day={key} list={value}/>)
    }
    return(
        <div>
            {list}
        </div>
    )
}
import fetchData from "@/app/_scripts/fetchData";

export default async function DrivePage(){
    let data = await fetchData()
    return(
        <p> drive Page</p>
    )
}
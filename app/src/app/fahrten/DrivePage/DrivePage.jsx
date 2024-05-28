
import Open from "@/app/_components/UI/Open/Open";
import DataList from "@/app/_components/DataList/DataList";
import getAllDrive from "@/app/_lib/serverActions/getAllDrive";
import Header from "@/app/_components/UI/Header/Header";

export default async function DrivePage(){

    return(
        <>
            <Header title={"Fahrten"} />

            <DataList fetchFunction={getAllDrive}/>
        </>
    )
}
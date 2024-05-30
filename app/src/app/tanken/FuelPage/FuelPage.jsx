import Header from "@/app/_components/UI/Header/Header";
import DataList from "@/app/_components/DataList/DataList";
import getAllFuel from "@/app/_lib/serverActions/data/GET/getAllFuel";

export default async function FuelPage(){
    return(
        <>
            <Header title={"Tankus"} />
            <DataList fetchFunction={getAllFuel} type={'fuel'}/>
        </>
    )
}
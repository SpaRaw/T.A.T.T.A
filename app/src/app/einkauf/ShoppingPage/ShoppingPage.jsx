import Header from "@/app/_components/UI/Header/Header";
import DataList from "@/app/_components/DataList/DataList";
import getAllShopping from "@/app/_lib/serverActions/data/GET/getAllShopping";

export default async function ShoppingPage(){
    return(
        <>
            <Header title={"Einkäufe"} />
            <DataList fetchFunction={getAllShopping} type={'shopping'}/>
        </>
    )
}
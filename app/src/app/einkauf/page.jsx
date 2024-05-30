import {Suspense} from "react";
import LoadingScreen from "@/app/_components/LoadingScreen/LoadingScreen";
import Open from "@/app/_components/UI/Open/Open";
import Spacer from "@/app/_components/Spacer/Spacer";
import ShoppingPage from "@/app/einkauf/ShoppingPage/ShoppingPage";

export default function einkauf({}){
    return(
        <>
            <Suspense fallback={<LoadingScreen title={"Lade alle Einkäufe"}/>}>
                <ShoppingPage />
            </Suspense>
            <Open path={'/dialog/shopping'}/>
        </>
    )
}
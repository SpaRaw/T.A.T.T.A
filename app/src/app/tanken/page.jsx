import {Suspense} from "react";
import LoadingScreen from "@/app/_components/LoadingScreen/LoadingScreen";
import Open from "@/app/_components/UI/Open/Open";
import Spacer from "@/app/_components/Spacer/Spacer";
import FuelPage from "@/app/tanken/FuelPage/FuelPage";

export default function tanken({}){
    return(
        <>
            <Suspense fallback={<LoadingScreen title={"Suche nach Tankus"}/>}>
                <FuelPage />
            </Suspense>
            <Open path={'/dialog/newFuel'}/>
        </>
    )
}
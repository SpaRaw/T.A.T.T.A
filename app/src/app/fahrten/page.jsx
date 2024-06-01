
import {Suspense} from "react";
import DrivePage from "@/app/fahrten/DrivePage/DrivePage";
import Open from "@/app/_components/UI/Open/Open";
import Spacer from "@/app/_components/Spacer/Spacer";
import LoadingScreen from "@/app/_components/LoadingScreen/LoadingScreen";
import ForceRefresher from "@/app/_components/ForceRefresher/ForceRefresher";

export default function fahrten({}){
    return(
        <>
            <Suspense fallback={<LoadingScreen title={"Sammle alle Fahrten"}/>}>
                <DrivePage />
            </Suspense>
            <Open path={'/dialog/newDrive'}/>
            <ForceRefresher />
        </>
    )
}
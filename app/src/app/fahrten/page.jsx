
import {Suspense} from "react";
import DriveLoading from "@/app/fahrten/DriveLoading/DriveLoading";
import DrivePage from "@/app/fahrten/DrivePage/DrivePage";
import Open from "@/app/_components/UI/Open/Open";
import Spacer from "@/app/_components/Spacer/Spacer";

export default function fahrten({}){
    return(
        <>
            <Suspense fallback={<DriveLoading/>}>
                <DrivePage />
            </Suspense>
            <Open path={'/dialog/newDrive'}/>
            <Spacer />
        </>
    )
}
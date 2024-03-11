import {Suspense} from "react";
import DriveLoading from "@/app/fahrten/DriveLoading/DriveLoading";
import DrivePage from "@/app/fahrten/DrivePage/DrivePage";

export default function fahrten({}){

    return(
        <>
            <h1>Fahrten</h1>
            <Suspense fallback={<DriveLoading/>}>
                <DrivePage />
            </Suspense>
        </>
    )
}
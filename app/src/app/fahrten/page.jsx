"use client";
import {Suspense, useState} from "react";
import DriveLoading from "@/app/fahrten/DriveLoading/DriveLoading";
import DrivePage from "@/app/fahrten/DrivePage/DrivePage";
import Dialog from "@/app/_components/Dialaog/Dialog";
import Open from "@/app/_components/UI/Open/Open";
import DriveForm from "@/app/fahrten/DriveForm/DriveForm";

export default function fahrten({}){
    const [shouldShowModal, updateShowModal] = useState(false);
    return(
        <>
            <Suspense fallback={<DriveLoading/>}>
                <DrivePage />
            </Suspense>
            {shouldShowModal &&<Dialog title={"Fahrt hinzufügen"} callbackOnClose={updateShowModal}>
                <DriveForm callbackClose={updateShowModal}/>
            </Dialog>
            }
            <Open callback={updateShowModal}/>
        </>
    )
}
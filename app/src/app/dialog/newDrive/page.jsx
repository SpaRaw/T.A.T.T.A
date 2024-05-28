import DriveForm from "@/app/fahrten/DriveForm/DriveForm";
import Dialog from "@/app/_components/Dialaog/Dialog";


export default function newDrive() {
    return (
        <>
            <Dialog title={"Neue Fahrt"} path={"/fahrten"}>
                <DriveForm />
            </Dialog>
        </>
    )
}

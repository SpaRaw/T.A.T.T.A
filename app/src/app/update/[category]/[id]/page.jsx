import Dialog from "@/app/_components/Dialaog/Dialog";
import DriveForm from "@/app/fahrten/DriveForm/DriveForm";
import getDriveByID from "@/app/_lib/serverActions/getDriveByID";

export default async function UpdateEntry({ params }){
    if(params.category === 'drive'){
        let data = await getDriveByID(params.id);
        return (
            <Dialog title={"Aktualisiere Fahrt"} path={"/fahrten"}>
                <DriveForm data={data} />
            </Dialog>
        )
    }
}
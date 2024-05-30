import Dialog from "@/app/_components/Dialaog/Dialog";
import DriveForm from "@/app/fahrten/DriveForm/DriveForm";
import getDriveByID from "@/app/_lib/serverActions/data/GET/getDriveByID";
import FuelForm from "@/app/tanken/FuelForm/FuelForm";
import getFuelByID from "@/app/_lib/serverActions/data/GET/getFuelByID";
import getShoppingByID from "@/app/_lib/serverActions/data/GET/getShoppingByID";
import ShoppingForm from "@/app/einkauf/ShoppingForm/ShoppingForm";

export default async function UpdateEntry({ params }){
    if(params.category === 'drive'){
        let data = await getDriveByID(params.id);
        return (
            <Dialog title={"Aktualisiere Fahrt"} path={"/fahrten"}>
                <DriveForm data={data} />
            </Dialog>
        )
    }else if(params.category === 'fuel'){
        let data = await getFuelByID(params.id);
        return (
            <Dialog title={"Aktualisiere Tankus"} path={"/tanken"}>
                <FuelForm data={data} />
            </Dialog>
        )
    }else if(params.category === 'shopping'){
        let data = await getShoppingByID(params.id)
        return(
            <Dialog title={"Aktualisiere Shopping"} path={"/einkauf"}>
                <ShoppingForm data={data} />
            </Dialog>
        )
    }
}
import DriveForm from "@/app/fahrten/DriveForm/DriveForm";
import Dialog from "@/app/_components/Dialaog/Dialog";
import FuelForm from "@/app/tanken/FuelForm/FuelForm";
import ShoppingForm from "@/app/einkauf/ShoppingForm/ShoppingForm";


export default function newDrive({params}) {
    let category = params.category;
    if(category === 'newDrive'){
        return (
            <>
                <Dialog title={"Neue Fahrt"} path={"/fahrten"}>
                    <DriveForm />
                </Dialog>
            </>
        )
    }

    if(category === 'newFuel'){
        return(
            <>
                <Dialog title={"Neuer Tankus"} path={"/tanken"}>
                    <FuelForm />
                </Dialog>
            </>
        )
    }

    if(category === 'shopping'){
        return(
            <>
                <Dialog title={"Neuer Einkauf"} path={"/einkauf"}>
                    <ShoppingForm />
                </Dialog>
            </>
        )
    }

}

import DriveData from "@/app/fahrten/DriveDay/DriveData";

export default function DriveDay({day, data}){
    return(
        <div>
            <h3>{day}</h3>
            <DriveData data={data} />
        </div>
    )
}
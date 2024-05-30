import DriveFragment from "@/app/_components/DataFragment/DriveFragment/DriveFragment";

export default function DataFragment({data, type}){
    if(type === 'drive'){
        return <DriveFragment data={data} />
    }
}
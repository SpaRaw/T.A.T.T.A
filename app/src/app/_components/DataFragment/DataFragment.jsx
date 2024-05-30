import DriveFragment from "@/app/_components/DataFragment/DriveFragment/DriveFragment";
import FuelFragment from "@/app/_components/DataFragment/FuelFragment/FuelFragment";
import ShoppingFragment from "@/app/_components/DataFragment/ShoppingFragment/ShoppingFragment";

export default function DataFragment({data, type}){
    if(type === 'drive'){
        return <DriveFragment data={data} />
    }else if(type === 'fuel'){
        return <FuelFragment data={data} />
    }else if(type === 'shopping'){
        return <ShoppingFragment data={data} />
    }
}
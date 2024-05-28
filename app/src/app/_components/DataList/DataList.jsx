import DataFragment from "@/app/_components/DataFragment/DataFragment";

export default async function DataList({fetchFunction}){
    let data = await fetchFunction();
    let keys = Object.keys(data);

    return(
        <ul>
            {keys.map((key) =>{
                let dataList = data[key];
                let keys = Object.keys(dataList[0]);
                return(
                    <li key={key}>
                        <h3>{key}</h3>
                        <ul>
                        {dataList.map((entry)=>{
                            return(
                            <li key={entry.ID}>
                                <DataFragment data={entry} />
                            </li>
                            )
                        })}
                        </ul>
                    </li>
                )
            })}
        </ul>
    )
}
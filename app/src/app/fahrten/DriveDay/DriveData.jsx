
export default function DriveData({data}){
    console.log(data)
    return(
        <div>
            <input type={"hidden"} value={data.ID} />
            <div>{data.DriveName }</div>
            <div>{data.Payer}</div>
            <div>{data.Distance}</div>

            <h1>hallo</h1>
        </div>
    )
}

export default function LabeldInput({type, name, text}){
    return(
        <div>
            <input type={type} name={name} />
            <label for={name}>{text}</label>
        </div>
    )
}
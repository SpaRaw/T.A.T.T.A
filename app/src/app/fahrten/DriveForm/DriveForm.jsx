"use client";
import styles from "./DriveForm.module.scss"
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function DriveForm({children, data=null}){
    const [existError, updateExistError] = useState({shouldShow:false, text:''})
    let router = useRouter();
    console.log(data);
    async function onSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        let response;
        if(data == null){
            response = await fetch('/api/formSubmit',{
                method: 'POST',
                body: formData
            })
        }else{
            response = await fetch('/api/formSubmit/update',{
                method: 'POST',
                body: formData
            })
        }

        if(response.status === 200){
           router.push("/fahrten");
        }else{

        }
    }
    return(
        <div className={styles.form}>
            <form onSubmit={onSubmit}>
                <input type={"hidden"} value={"drive"} name={'type'}/>
                <input type={"hidden"} value={data?.ID} name={'ID'}/>
                {existError.shouldShow && <h2>{existError.text}</h2>}
                <div>
                    <h3>Wohin?</h3>
                    <input
                        type={"text"}
                        name={"dest"}
                        required={true}
                        defaultValue={data?.DriveName}
                    />
                </div>

                <div>
                    <h3>Wer Zahlt?</h3>
                    <select
                        name={"payer"}
                        id={"pay"}
                        defaultValue={data==null?"both": data?.Payer}
                    >
                        <option value={"both"}>Beide</option>
                        <option value={"corgi"}>Corgi</option>
                        <option value={"minla"}>Minla</option>
                    </select>
                </div>

                <div>
                    <h3>Wann?</h3>
                    <input
                        type={"date"}
                        name={"date"}
                        required={true}
                        defaultValue={data?.Date}
                    />
                </div>

                <div>
                    <h3>Wie weit?</h3>
                    <input
                        type={"float"}
                        name={"distance"}
                        required={true}
                        defaultValue={data?.Distance}
                    />
                </div>
                <button>Speichern</button>
            </form>
        </div>
    )
}
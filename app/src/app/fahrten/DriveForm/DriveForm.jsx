"use client";
import styles from "./DriveForm.module.scss"
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function DriveForm({callbackClose,children}){
    const [existError, updateExistError] = useState({shouldShow:false, text:''})
    let router = useRouter();

    async function onSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const response = await fetch('/api/formSubmit',{
            method: 'POST',
            body: formData
        })
        if(response.status === 200){
           router.push("/fahrten");
        }else{

        }
    }
    return(
        <div className={styles.form}>
            <form onSubmit={onSubmit}>
                <input type={"hidden"} value={"drive"} name={'type'}/>
                {existError.shouldShow && <h2>{existError.text}</h2>}
                <div>
                    <h3>Wohin?</h3>
                    <input type={"text"} name={"dest"} required={true}/>
                </div>

                <div>
                    <h3>Wer Zahlt?</h3>
                    <select name={"payer"} id={"pay"} defaultValue={"both"}>
                        <option value={"both"}>Beide</option>
                        <option value={"corgi"}>Corgi</option>
                        <option value={"minla"}>Minla</option>
                    </select>
                </div>

                <div>
                    <h3>Wann?</h3>
                    <input type={"date"} name={"date"} required={true}/>
                </div>

                <div>
                    <h3>Wie weit?</h3>
                    <input type={"float"} name={"distance"} required={true}/>
                </div>
                <button>Speichern</button>
            </form>
        </div>
    )
}
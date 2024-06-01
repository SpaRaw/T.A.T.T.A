
import styles from "./DriveForm.module.scss"
import submitDriveForm from "@/app/_lib/serverActions/form/submitDriveForm";
import Delete from "@/app/_components/UI/icons/Delete";

export default async function DriveForm({children, data=null}){

    return(
        <div className={styles.form}>
            <form action={submitDriveForm}>
                <input type={"hidden"} value={data?.ID} name={'ID'}/>
                <input type={"hidden"} value={data == null? 'new':'update'} name={'IsNewEntry'} />
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
                {data !== null && <button name={"delete"} className={styles.delete} value={"0"}> <Delete/> </button>}
            </form>
        </div>
    )
}
'use server';
import styles from "./FuelForm.module.scss"
import submitFuelForm from "@/app/_lib/serverActions/form/submitFuelForm";
import Delete from "@/app/_components/UI/icons/Delete";

export default async function FuelForm({children, data=null}){
    return(
        <div className={styles.form}>
            <form action={submitFuelForm}>
                <input type={"hidden"} value={data?.ID} name={'ID'}/>
                <input type={"hidden"} value={data == null? 'new':'update'} name={'IsNewEntry'} />

                <div>
                    <h3>Kraftstofftyp?</h3>
                    <select
                        name={"type"}
                        id={"type"}
                        defaultValue={data==null?"lpg": data?.Type}
                    >
                        <option value={"lpg"}>Gas</option>
                        <option value={"super"}>Super / E10</option>
                    </select>
                </div>

                <div>
                    <h3>Wer Zahlt?</h3>
                    <select
                        name={"payer"}
                        id={"pay"}
                        defaultValue={data==null?"Corgi": data?.Payer}
                    >
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
                    <h3>Preis?</h3>
                    <input
                        type={"float"}
                        name={"price"}
                        required={true}
                        defaultValue={data?.Price}
                    />
                </div>

                <button>Speichern</button>
                {data !== null && <button name={"delete"} className={styles.delete} value={"0"}> <Delete/> </button>}
            </form>
        </div>
    )
}
'use server';
import styles from "./ShoppingForm.module.scss"
import submitShoppingForm from "@/app/_lib/serverActions/form/submitShoppingForm";
import Spacer from "@/app/_components/Spacer/Spacer";
import Delete from "@/app/_components/UI/icons/Delete";

export default async function ShoppingForm({children, data=null}){

    return(
        <div className={styles.form}>
            <form action={submitShoppingForm}>
                <input type={"hidden"} value={data?.ID} name={'ID'}/>
                <input type={"hidden"} value={data == null? 'new':'update'} name={'IsNewEntry'} />

                <div>
                    <h3>Wo?</h3>
                    <input
                        type={"text"}
                        name={"where"}
                        required={true}
                        defaultValue={data?.Name}
                    />
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

                <div className={styles.lastInput}>
                    <h3>Anteil Corgi</h3>
                    <input
                        type={"float"}
                        name={"corgisShare"}
                        required={true}
                        defaultValue={data?.CorgiAmount}
                    />
                    <h3>Anteil Minla</h3>
                    <input
                        type={"float"}
                        name={"minlasShare"}
                        required={true}
                        defaultValue={data?.MinlaAmount}

                    />
                </div>
                <button name={"save"}>Speichern</button>
                {data !== null && <button name={"delete"} className={styles.delete} value={"0"}> <Delete/> </button>}
            </form>
        </div>
    )
}
import styles from "./ShoppingFragment.module.scss"
import Setting from "@/app/_components/UI/icons/Setting";
import Link from "next/link";
import Payer from "@/app/_components/UI/icons/Payer";
export default function ShoppingFragment({data}){
    return(
        <div className={styles.container}>
            <div className={styles.data}>
                <div className={styles.row1}>
                    <div>{`Wo: ${data.Name}`}</div>
                    <div className={styles.payer}><Payer name={data.Payer} /> </div>
                </div>
                <div>
                    <div>
                        {`Corgis Share: ${data.CorgiAmount} €`}
                    </div>
                    <div>
                        {`Minlas Share: ${data.MinlaAmount} €`}
                    </div>
                    <div>
                        {`Gesamt: ${data.CorgiAmount + data.MinlaAmount} €`}
                    </div>
                </div>
            </div>

            <div className={styles.update}>
                <Link href={`/update/shopping/${data.ID}`}>
                    <Setting />
                </Link>
            </div>
        </div>
    )
}
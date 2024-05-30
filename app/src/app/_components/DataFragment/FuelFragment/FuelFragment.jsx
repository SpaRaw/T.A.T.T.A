import styles from "./FuelFragment.module.scss"
import Setting from "@/app/_components/UI/icons/Setting";
import Link from "next/link";
import Payer from "@/app/_components/UI/icons/Payer";
export default function FuelFragment({data}){
    return(
        <div className={styles.container}>
            <div className={styles.data}>
                <div className={styles.row1}>
                    <div>{data.Type}</div>
                    <div className={styles.payer}><Payer name={data.Payer}/></div>
                    <div>{`${data.Price} €`}</div>
                </div>
            </div>
            <div className={styles.update}>
                <Link href={`/update/fuel/${data.ID}`}>
                    <Setting />
                </Link>
            </div>
        </div>
    )
}
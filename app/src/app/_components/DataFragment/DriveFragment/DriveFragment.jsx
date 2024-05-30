import styles from "./DriveFragment.module.scss"
import Setting from "@/app/_components/UI/icons/Setting";
import Link from "next/link";
export default function DriveFragment({data}){
    return(
        <div className={styles.container}>
            <div className={styles.data}>
                <div className={styles.row1}>
                    <div>{data.DriveName}</div>
                    <div>{`${data.Distance} KM`}</div>
                </div>
                <div className={styles.row2}>
                    <div>{data.Payer}</div>
                </div>
            </div>
            <div className={styles.update}>
                <Link href={`/update/drive/${data.ID}`}>
                    <Setting />
                </Link>
            </div>
        </div>
    )
}
import Plus from "@/app/_components/UI/Open/icon/Plus";
import styles from "./Open.module.scss"
import Link from "next/link";

export default function Open({path}) {
    return(
        <div className={styles.Wrapper}>
            <Link href={path} className={styles.button}>
                <Plus />
            </Link>
        </div>
    )
}
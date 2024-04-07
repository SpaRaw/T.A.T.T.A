import Plus from "@/app/_components/UI/Open/icon/Plus";
import styles from "./Open.module.scss"

export default function Open({callback}) {

    return(
        <div className={styles.Wrapper}>
            <button onClick={()=>callback(true)}>
                <Plus />
            </button>
        </div>
    )
}
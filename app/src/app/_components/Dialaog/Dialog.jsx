import styles from "./Dialog.module.scss";
import Cancel from "@/app/_components/Dialaog/icon/Cancel";

export default function Dialog({title, callbackOnClose,children}){
    return (
        <div className={styles.modal}>
            <header>
                <div className={styles.title}>{title}</div>
                <div>
                    <button className={styles.backButton} onClick={()=>{callbackOnClose(false)}}>
                        <Cancel />
                    </button>
                </div>
            </header>
            {children}
            <footer>
                footer
            </footer>
        </div>
    )
}
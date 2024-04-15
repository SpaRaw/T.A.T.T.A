import styles from "./Dialog.module.scss";
import Cancel from "@/app/_components/Dialaog/icon/Cancel";

export default function Dialog({title, callbackOnClose, updateContent,children}){
    return (
        <div className={styles.modal}>
            <header>
                <h1 className={styles.title}>{title}</h1>
                <div>
                    <button className={styles.backButton} onClick={()=>{callbackOnClose(false)}}>
                        <Cancel />
                    </button>
                </div>
            </header>
            {children}
        </div>
    )
}
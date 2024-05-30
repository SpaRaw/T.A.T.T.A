import styles from "./Dialog.module.scss";
import Cancel from "@/app/_components/UI/icons/Cancel";
import Link from "next/link";

export default function Dialog({title, path, updateContent,children}){
    return (
        <div className={styles.modal}>
            <header>
                <h1 className={styles.title}>{title}</h1>
                <div>
                    <Link href={path}>
                        <Cancel />
                    </Link>
                </div>
            </header>
            {children}
        </div>
    )
}
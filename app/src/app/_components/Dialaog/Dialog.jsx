"use client"

import {useState} from "react";
import styles from "./Dialog.module.scss";
import Cancel from "@/app/_components/Dialaog/icon/Cancel";

export default function Dialog({title, children}){
    const [shouldShow, updateShouldShow] = useState(true);
    return shouldShow &&(
        <div className={styles.modal}>
            <header>
                <div className={styles.title}>{title}</div>
                <div>
                    <button className={styles.backButton} onClick={()=>{updateShouldShow(false)}}>
                        <Cancel />
                    </button>
                </div>
            </header>
                content
            <footer>
                footer
            </footer>
        </div>
    )
}
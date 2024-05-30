"use client";
import styles from "./Menue.module.scss";
import {useState} from "react";
import {useRouter} from "next/navigation";
import Home from "@/app/_components/UI/icons/Home";
import Fuel from "@/app/_components/UI/icons/Fuel";
import Shopping from "@/app/_components/UI/icons/Shopping";
import Drive from "@/app/_components/UI/icons/Drive";


export default function Menue({}) {
    const router = useRouter();
    const [currentSelected, updateSelected] = useState(1);
    let URLS = ["/", "/fahrten", "/tanken", "/einkauf"];

    function pageChange(id) {
        updateSelected(id);
        router.push(URLS[id - 1]);
    }

    return (
        <div className={styles.menue}>
            <ul>
                <li>
                    <button className={currentSelected == 1 ? styles.active : ""} onClick={() => pageChange(1)}>
                        <Home/>
                    </button>
                </li>
                <li>
                    <button className={currentSelected == 2 ? styles.active : ""} onClick={() => pageChange(2)}>
                        <Drive/>
                    </button>
                </li>
                <li>
                    <button className={currentSelected == 3 ? styles.active : ""} onClick={() => pageChange(3)}>
                        <Fuel/>
                    </button>
                </li>
                <li>
                    <button className={currentSelected == 4 ? styles.active : ""} onClick={() => pageChange(4)}>
                        <Shopping/>
                    </button>
                </li>
            </ul>
        </div>
    )
}
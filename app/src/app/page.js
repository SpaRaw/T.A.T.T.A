import styles from "./page.module.css";
import ForceRefresher from "@/app/_components/ForceRefresher/ForceRefresher";

export default function Home() {
    return (
        <main>
            <h1>Dashboard</h1>
            <h2>{process.env.NAME}</h2>

            <ForceRefresher />
        </main>
    );
}

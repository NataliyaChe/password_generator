import { PropsWithChildren } from "react";
import Header from "./Header";
import styles from '@/styles/Layout.module.css'

export default function Layout({children}: PropsWithChildren) {
    return (
        <>
            <Header />
            <main className={styles.container}>
                {children}
            </main>
        </>
    )
}
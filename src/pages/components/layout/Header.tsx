import Link from "next/link";
import styles from '@/styles/Header.module.css'
import { useRouter } from "next/router"

export default function Header() {
    const {pathname} = useRouter()


    return (
        <header className={styles.header}>
            <h1>Generate Your Password!</h1>
            <nav className={styles.nav}>
                <Link href="/" 
                    className={pathname === '/' ? styles.active : ''}>
                        Generate
                </Link>
                <Link href="/accounts" 
                    className={pathname === '/accounts' ? styles.active : ''}>
                        Accounts
                </Link>
            </nav>
        </header>
    )
}
import styles from '@/styles/Header.module.css'
import { useRouter } from "next/router"
import { Box, Typography} from '@mui/material';
import Link from "../Link";

export default function Header() {
    const {pathname} = useRouter()
    
    return (
        <Box sx={{
            bgcolor: 'background.paper',
            p: 3,
            pt: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: 'center',
            color: 'secondary.main'
        }}>
            <Typography variant="h1">Generate Your Password!</Typography>
            <div className={styles.nav}>
                <Link href="/" 
                    color={pathname === '/' ? 'action.active' : 'text.primary'}>
                    Generate
                </Link>
                <Link href="/accounts" 
                    color={pathname === '/accounts' ? 'action.active' : 'text.primary'}>
                    Accounts
                </Link>
            </div>
        </Box>
    )
}
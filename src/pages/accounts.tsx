import Layout from "./components/layout/Layout"
import { Box, Typography} from '@mui/material'
import AccountsTable from "./components/AccountsTable"
import { NextPage, GetServerSideProps } from 'next';
import { IAccountData } from "@/interfaces/accounts.interface";
import { AccountService } from "@/services/accounts.service";

// const AccountsPage: NextPage<IAccountData> = ({accounts}) => {
export default function AccountsPage({accounts}: IAccountData) {

    return (
        <Layout>
            <Typography variant="h2" sx={{mb: 2}}>Account list:</Typography>
            <AccountsTable accounts={accounts}/>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps<IAccountData> = async () => {
    const accounts = await AccountService.getAll()

    return {
        props: {accounts}
    }
}

// export default AccountsPage
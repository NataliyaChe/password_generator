import Layout from "./components/layout/Layout"
import { Typography} from '@mui/material'
import AccountsTable from "./components/AccountsTable"
import { GetServerSideProps } from 'next';
import { IAccountData } from "@/interfaces/accounts.interface";
import { AccountService } from "@/services/accounts.service";
import Button from "./components/UI/Button";
import Modal from "./components/UI/Modal";

export default function AccountsPage({accounts}: IAccountData) {
    function addAccount(params:any) {
        console.log('click');
        
    }

    return (
        <Layout>
            <Typography variant="h2" sx={{mb: 2}}>Account list:</Typography>
            <Button onClick={addAccount}>+</Button>
            <AccountsTable accounts={accounts}/>
            <Modal />
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps<IAccountData> = async () => {
    const accounts = await AccountService.getAll()

    return {
        props: {accounts}
    }
}
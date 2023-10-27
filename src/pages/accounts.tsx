import Layout from "./components/layout/Layout"
import { Typography} from '@mui/material'
import AccountsTable from "./components/AccountsTable"
import { GetServerSideProps } from 'next';
import { IAccountData } from "@/interfaces/accounts.interface";
import { AccountService } from "@/services/accounts.service";
import Button from "./components/UI/Button";
import Modal from "./components/UI/Modal";
import {useState} from "react";

export default function AccountsPage({accounts}: IAccountData) {
    const [showModal, setShowModal] = useState(false);

    function openModal() {
        setShowModal(true)
    }

    return (
        <Layout>
            <Typography variant="h2" sx={{mb: 2}}>Account list:</Typography>
            <Button onClick={openModal}>+</Button>
            <AccountsTable accounts={accounts}/>
            <Modal open={showModal} onClose={() => setShowModal(false)}/>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps<IAccountData> = async () => {
    const accounts = await AccountService.getAll()

    return {
        props: {accounts}
    }
}
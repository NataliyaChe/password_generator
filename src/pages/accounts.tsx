import Layout from "./components/layout/Layout"
import { Typography} from '@mui/material'
import AccountsTable from "./components/AccountsTable"
import { GetServerSideProps } from 'next';
import { IAccountData } from "@/interfaces/accounts.interface";
import { AccountService } from "@/services/accounts.service";
import Button from "./components/UI/Button";
import Modal from "./components/UI/Modal";
import {useState, useEffect} from "react"
import { IAccount } from "@/interfaces/accounts.interface";
import { useRouter } from 'next/router'
import axios from 'axios'

export default function AccountsPage({accounts}: IAccountData) {
    const [showModal, setShowModal] = useState(false);
    const [accountsArr, setAccountsArr] = useState<IAccount[]>(accounts);
    const [refresh, setRefresh] = useState(false)
    // const data = accounts
    
    useEffect(() => {
        async function fetchAccounts() {
            const {data} = await axios.get('http://localhost:3004/accounts')
            console.log('data', data);
            setAccountsArr(data)
          }
          fetchAccounts()
          setRefresh(false)
    }, [refresh === true])

    // function toggleModal() {
    //     setShowModal(!showModal)  
    //     refreshData()
    // }

    function closeModal() {
        setShowModal(false)  
        setRefresh(true)
    }

    
    function openModal() {
        setShowModal(true)  
    }
    

    return (
        <Layout>
            <Typography variant="h2" sx={{mb: 2}}>Accounts list:</Typography>
            <Button onClick={openModal}>+</Button>
            <AccountsTable accounts={accountsArr}/>
            <Modal open={showModal} 
            onClose={closeModal} 
            />
        </Layout>
    )
}
const params = '?_sort=resource'
export const getServerSideProps: GetServerSideProps<IAccountData> = async () => {
    const accounts = await AccountService.getAll(params)
    return {
        props: {accounts}
    }
}

// export async function fetchAccounts() {
//     const res = await fetch('http://localhost:3004/accounts', { next: { tags: ['accounts'] } })
//     const data = await res.json()
//     console.log('data', data);
//     return data
//   }


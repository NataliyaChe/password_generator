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
import axios from 'axios'

export default function AccountsPage({accounts}: IAccountData) {
    const [showModal, setShowModal] = useState(false);
    const [accountsArr, setAccountsArr] = useState<IAccount[]>(accounts);
    const [refresh, setRefresh] = useState(false)
    const [sortOrder, setSortOrder] = useState('asc')
    // const [sortOrder, setSortOrder] = useState('?_sort=resource&_order=$asc')
    
    useEffect(() => { 
        async function fetchAccounts() {
            const {data} = await axios.get('http://localhost:3004/accounts', {
                params: {
                    sort: 'resource',
                    order: sortOrder
                }
            })
            console.log('params', sortOrder);
            console.log('params', data);
            setAccountsArr(data)
          }
          fetchAccounts()
          setRefresh(false)
    }, [refresh === true, sortOrder])

    function toggleModal() {
        setShowModal(!showModal) 
        setRefresh(!refresh) 
    }

    function sortByResources() {
        if(sortOrder === 'asc') {
            setSortOrder('desc')
        } else {
            setSortOrder('asc')
        }
    }

    return (
        <Layout>
            <Typography variant="h2" sx={{mb: 2}}>Accounts list:</Typography>
            <Button onClick={toggleModal}>+</Button>
            <AccountsTable accounts={accountsArr} sortByResources={sortByResources}/>
            <Modal open={showModal} 
            onClose={toggleModal} 
            />
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps<IAccountData> = async () => {
    const accounts = await AccountService.getAll()
    return {
        props: {accounts}
    }
}



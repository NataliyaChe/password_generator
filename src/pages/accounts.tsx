import Layout from "../components/layout/Layout"
import { Typography} from '@mui/material'
import AccountsTable from "../components/AccountsTable"
import { GetServerSideProps } from 'next';
import { IAccountData } from "@/interfaces/accounts.interface";
import { useApi } from "@/hooks/useApi";
import Button from "../components/Button";
import Modal from "../components/Modal";
import {useState, useEffect} from "react"
import { IAccount } from "@/interfaces/accounts.interface";
import axios from 'axios'

export default function AccountsPage({accounts}: IAccountData) {
    const [showModal, setShowModal] = useState(false);
    const [accountsArr, setAccountsArr] = useState<IAccount[]>(accounts);
    const [refresh, setRefresh] = useState(false)
    const [sortOrder, setSortOrder] = useState('asc')
    
    useEffect(() => { 
        async function fetchAccounts() {
            const {data} = await axios.get('http://localhost:3004/accounts', {
                params: {
                    _sort: 'resource',
                    _order: sortOrder
                }
            })
            setAccountsArr(data)
          }
          fetchAccounts()
          setRefresh(false)
    }, [refresh === true, sortOrder])

    function toggleModal() {
        setShowModal(!showModal)  
    }

    function makeRefresh() {
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
            makeRefresh={makeRefresh}
            />
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps<IAccountData> = async () => {
    const accounts = await useApi.getAll()
    return {
        props: {accounts}
    }
}



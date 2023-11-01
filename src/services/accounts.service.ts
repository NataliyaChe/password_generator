

import axios from "axios"
import { IAccount } from "@/interfaces/accounts.interface"

const API_URL = 'http://localhost:3004'
axios.defaults.baseURL = API_URL

interface INewAccount {
    resource: string,
    password: string
}

export const AccountService = {
    async getAll(params: string) {
        const {data} = await axios.get<IAccount[]>(`/accounts${params}`)
        return data
    },

    async postNewAccount({resource, password}: INewAccount) {
        const data = await axios.post('/accounts', { resource, password })
        return data
    }
}

// export async function fetchAccounts() {
//     const {data} = await axios.get('http://localhost:3004/accounts')
//     console.log('data', data);
//     return data
//   }

// export async function post({resource, password}: INewAccount) {
//     fetch('http://localhost:3004/accounts', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify( { resource, password })
//     })
//     revalidateTag('/accounts')
// }


import axios from "axios"
import { IAccount } from "@/interfaces/accounts.interface"

const API_URL = 'http://localhost:3004'
axios.defaults.baseURL = API_URL

interface INewAccount {
    resource: string,
    password: string
}
export const AccountService = {
    async getAll() {
        const {data} = await axios.get<IAccount[]>('/accounts')
        return data
    },

    async postNewAccount({resource, password}: INewAccount) {
        const {data} = await axios.post('/accounts', { resource, password })
        return data
    }
}


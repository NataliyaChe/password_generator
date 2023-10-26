import axios from "axios"
import { IAccount } from "@/interfaces/accounts.interface"

const API_URL = 'http://localhost:3004'
axios.defaults.baseURL = API_URL

export const AccountService = {
    async getAll() {
        const {data} = await axios.get<IAccount[]>('/accounts')
        return data
    }
}
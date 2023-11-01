export interface IAccount {
    id: number
    resource: string
    password: string
}

export interface IAccountData {
    accounts: IAccount[]
}

export interface ITable {
    accounts: IAccount[]
    sortByResources: () => void
}
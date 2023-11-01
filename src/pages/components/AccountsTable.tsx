import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import { IAccountData } from '@/interfaces/accounts.interface';

export default function AccountsTable({accounts}: IAccountData) {

    return (
        <TableContainer component={Paper} sx={{ width: 600 }}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Account</TableCell>
                        <TableCell>Password</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {accounts.map((account) => (
                    <TableRow
                    key={account.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, bgcolor: 'secondary.main'}}
                    >
                        <TableCell >{account.id}</TableCell>
                        <TableCell component="th" scope="row">
                            {account.resource}
                        </TableCell>
                        <TableCell >{account.password}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

import MuiButton from '@mui/material/Button'

interface IButton {
    // variant: string,
    children: string,
    // color: string,
    disabled?: boolean,
}

export default function Button({ children, disabled}: IButton) {
    return (
        <MuiButton variant="contained" color='primary' disabled={disabled} sx={{ mb: 2, fontSize: 18}} size='small'>
            {children}
        </MuiButton>
    )
}
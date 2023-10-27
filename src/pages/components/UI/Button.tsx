
import MuiButton from '@mui/material/Button'

interface IButton {
    // variant: string,
    children: string,
    // color: string,
    disabled?: boolean,
    onClick: any
}

export default function Button({ children, disabled, onClick}: IButton) {
    return (
        <MuiButton variant="contained" color='primary' disabled={disabled} sx={{ mb: 2, fontSize: 18}} size='small' onClick={onClick}>
            {children}
        </MuiButton>
    )
}
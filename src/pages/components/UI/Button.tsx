
import MuiButton from '@mui/material/Button'
import { IButton } from '@/interfaces/ui_component.interfaces'

export default function Button({ children, disabled, onClick}: IButton) {
    return (
        <MuiButton variant="contained" color='primary' disabled={disabled} sx={{ mb: 2, fontSize: 18}} size='small' onClick={onClick}>
            {children}
        </MuiButton>
    )
}
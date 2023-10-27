import { Backdrop, Box, Typography, TextField } from "@mui/material";
import MuiModal from "@mui/material/Modal"
import Button from "./Button"
import { useState } from 'react'

interface IModal {
    // children: string
}

export default function Modal() {
    const [open, setOpen] = useState(true);
    const handleClose = () => setOpen(false);
    function addAccount() {
        console.log('add');
    }
    return (
        <div>
            <MuiModal open={open} 
                onClose={handleClose} 
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={{ 
                    position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 500,
                    bgcolor: 'secondary.main',
                    border: '4px solid #3C2D84',
                    borderRadius: 2,
                    boxShadow: 24,
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'

                }}>
                    <Typography variant='h2' sx={{mb: 3}}>Add new account</Typography>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                        noValidate
                        autoComplete="off"
                        >
                           <TextField
                                required
                                id="account-input"
                                label="Account"
                            /> 
                            <TextField
                                required
                                id="password-input"
                                label="Password"
                            /> 
                            <Button onClick={addAccount} >Add</Button>
                        </Box>
                </Box>
            </MuiModal>
        </div>
    );  
  }

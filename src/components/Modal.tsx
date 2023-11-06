
import { Box, Typography, TextField } from "@mui/material";
import MuiModal from "@mui/material/Modal"
import Button from "./Button"
import { useState } from 'react'
import { IModal } from "@/interfaces/ui_component.interfaces"
import { useApi } from "@/hooks/useApi";

export default function Modal({open, onClose, makeRefresh}: IModal) {
    const [account, setAccount] = useState({
        resource: "",
        password: ""
    })

    async function addAccount() {
        const {resource, password} = account
        if(resource && password) {
            useApi.postNewAccount({resource, password})
            setAccount({
                resource: "",
                password: ""
            });
            makeRefresh()
            onClose()
        }
    }

    function handleValue(event: React.ChangeEvent<HTMLInputElement>) {  
        const value = event.target.value;
        setAccount({
            ...account,
            [event.target.name]: value
        });
    }

    return (
        <div>
            <MuiModal open={open} 
            onClose={onClose} 
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
                <Typography variant='h2' sx={{mb: 3}}>
                    Add new account
                </Typography>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                    >
                        <TextField
                            required
                            label="Resource"
                            onChange={handleValue}
                            name="resource"
                            value={account.resource}
                        /> 
                        <TextField
                            required
                            label="Password"
                            onChange={handleValue}
                            name="password"
                            value={account.password}
                        /> 
                        <Button onClick={addAccount} >Add</Button>
                    </Box>
                </Box>
            </MuiModal>
        </div>
    );  
  }

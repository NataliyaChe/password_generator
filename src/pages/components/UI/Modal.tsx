import { Box, Typography, TextField } from "@mui/material";
import MuiModal from "@mui/material/Modal"
import Button from "./Button"
import { useState } from 'react'
import { IModal } from "@/interfaces/ui_component.interfaces"
import { AccountService } from "@/services/accounts.service";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export default function Modal({open, onClose}: IModal) {
    const [resource, setResource] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);

    function addAccount() {
        if(resource && password) {
            AccountService.postNewAccount({resource, password})
            onClose()
        }
    }

    function handleValue(event: React.ChangeEvent<HTMLInputElement>) {
        event.target.id === "resource" ? setResource(event.target.value) : setPassword(event.target.value)   
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
                            id="resource"
                            label="Resource"
                            onChange={handleValue}
                            value={resource}
                        /> 
                        <TextField
                            required
                            id="password"
                            label="Password"
                            onChange={handleValue}
                            value={password}
                        /> 
                        <Button onClick={addAccount} >Add</Button>
                    </Box>
                </Box>
            </MuiModal>
        </div>
    );  
  }

import { Box, Typography, Slider, FormGroup, FormControlLabel, Checkbox, TextField, InputAdornment} from "@mui/material"
import Button from "./Button"
import { useState, useMemo } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function PasswordGeneratorForm() {
    const marks = Array.from({length: 12}, (value, index) => ({value: index + 4, label: index + 4}))
    console.log('newMarks', marks)
    const [passwordLength, setPasswordLength] = useState(6)
    const [disable, setDisable] = useState(true)
    const [password, setPassword] = useState('')

    const [options, setOptions] = useState([
        {
            id: '1',
            name: 'upperCase',
            label: "Allow English upper case letters",
            value: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            checked: false
        },
        {
            id: '2',
            name: 'lowerCase',
            label: "Allow English lower case letters",
            value: "abcdefghijklmnopqrstuvwxyz",
            checked: false
        },
        {
            id: '3',
            name: 'numbers',
            label: "Allow numbers",
            value: "0123456789",
            checked: false
        },
        {
            id: '4',
            name: 'symbols',
            label: "Allow special symbols (* $ # ! ? %)",
            value: "*$#!?%",
            checked: false
        },
    ])

    function handleSlider(event: Event, newValue: number | number[]) {
        setPasswordLength(newValue as number)    
    }

    function generatePassword() {
        let randomString = ''
        const chars = options.reduce((sum, current) => current.checked ? sum + current.value : sum, '')   
        for (let i = 0; i < passwordLength; i++) {
            const randomNumber = Math.floor(Math.random() * chars.length)
            randomString += chars[randomNumber]
        }
        setPassword(randomString)   
    }

    function handleCheckbox(event: React.BaseSyntheticEvent) {
        const newOptions = options.map(item => 
            item.name === event.target.name ? {...item, checked: event.target.checked} : item
        )
        setOptions(newOptions)
        const isChecked = newOptions.find(item => item.checked)
        setDisable(isChecked ? false : true)
    }

    function copyPassword() {
        navigator.clipboard.writeText(password)
    }

    return (
        <Box 
        sx={{width: 500}}
        >
            <Typography variant="h2" sx={{mb: 2}}>
                Generate password:
            </Typography>
            <Box component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left'
            }}
            >
                <Typography variant='body1' id="password-length" gutterBottom>
                    Password length:
                </Typography>
                <Slider
                    aria-label="Password length"
                    value={passwordLength} 
                    onChange={handleSlider}
                    step={1}
                    marks={marks}
                    min={4}
                    max={15}
                    sx={{mb: 5}}
                />
                <FormGroup sx={{mb: 3}}>
                    {options.map(({id, label, name}) => 
                        <FormControlLabel 
                        key={id}
                        control={
                            <Checkbox 
                                id={id}
                                name={name}
                                onChange={handleCheckbox}
                            />} 
                        label={label}
                    />
                        )}
                </FormGroup>
                <Button onClick={generatePassword}
                disabled={disable}>Generate</Button>
            </Box>
            <Typography variant="body1" sx={{mt: 2, mb: 1}}>
                Result:
            </Typography>
            <TextField
                name="password"
                value={password}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <ContentCopyIcon color="primary" onClick={copyPassword}/>
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    )
}
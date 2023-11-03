import { Box, Typography, Slider, FormGroup, FormControlLabel, Checkbox, TextField} from "@mui/material"
import Button from "./UI/Button"
import { useState, useEffect } from 'react'

export default function PasswordGeneratorForm() {
    const marksValue = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    const marks = marksValue.map(markItem => ({value: markItem, label: markItem}))
    const [passwordLength, setPasswordLength] = useState(6)
    const [buttonCondition, setButtonCondition] = useState(true)
    const [checkboxIndex, setCheckboxIndex] = useState(0)
    
    const options = [
        {
            id: '1',
            label: "Allow English upper case letters",
            value: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            checked: false
        },
        {
            id: '2',
            label: "Allow English lower case letters",
            value: "abcdefghijklmnopqrstuvwxyz",
            checked: false
        },
        {
            id: '3',
            label: "Allow numbers",
            value: "0123456789",
            checked: false
        },
        {
            id: '4',
            label: "Allow special symbols (* $ # ! ? %)",
            value: "*$#!?%",
            checked: false
        },
    ]
       
    const [checkedState, setCheckedState] = useState(
        new Array(options.length).fill(false)
    )

    function handleSlider(event: Event, newValue: number | number[]) {
        setPasswordLength(newValue as number)    
    }

    function generatePassword() {
        console.log('click');
        options.forEach(item => {
            if(item.checked) {
                item.value
            }
        })
    }

    function handleCheckbox(event: React.BaseSyntheticEvent) {
        setCheckboxIndex(Number(event.target.id) - 1)
        options.forEach(item => {
            if(item.id === event.target.id) {
                item.checked = event.target.checked
            }
        })
        const updateCheckedState = checkedState.map((item, index) => {
            if(index === (Number(event.target.id) - 1)) {
                console.log('if', !item);
                !item
            } else {
                console.log('else', item);
                item
            }
        })
        console.log('updateCheckedState', updateCheckedState);
        
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
                    {options.map(({id, label}) => 
                        <FormControlLabel 
                        key={id}
                        control={
                            <Checkbox 
                                id={id}
                                onChange={handleCheckbox}
                            />} 
                        label={label}
                    />
                        )}
                </FormGroup>
                <Button onClick={generatePassword}
                disabled={buttonCondition}>Generate</Button>
            </Box>
            <Typography variant="body1" sx={{mt: 2, mb: 1}}>
                Result:
            </Typography>
            <TextField
                name="password"
                // value={}
            /> 
        </Box>
    )
}
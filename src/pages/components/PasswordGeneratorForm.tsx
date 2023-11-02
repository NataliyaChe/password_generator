import { Box, Typography, Slider, FormGroup, FormControlLabel, Checkbox, TextField} from "@mui/material"
import Button from "./UI/Button";

export default function PasswordGeneratorForm() {
    const marks = [
        {
            value: 4,
            label: '4',
        },
        {
            value: 5,
            label: '5',
        },
        {
            value: 6,
            label: '6',
        },
        {
            value: 7,
            label: '7',
        },
        {
            value: 8,
            label: '8',
        },
        {
            value: 9,
            label: '9',
        },
        {
            value: 10,
            label: '10',
        },
        {
            value: 11,
            label: '11',
        },
        {
            value: 12,
            label: '12',
        },
        {
            value: 13,
            label: '13',
        },
        {
            value: 14,
            label: '14',
        },
        {
            value: 15,
            label: '15',
        },
    ]
    function generatePassword() {
        console.log('click');
        
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
                    defaultValue={6}
                    // getAriaValueText={valuetext}
                    step={1}
                    marks={marks}
                    min={4}
                    max={15}
                    sx={{mb: 5}}
                />
                <FormGroup sx={{mb: 3}}>
                    <FormControlLabel 
                        control={<Checkbox />} 
                        label="Allow English upper case letters" 
                    />
                    <FormControlLabel
                        control={<Checkbox />} 
                        label="Allow English lower case letters" 
                    />
                    <FormControlLabel 
                        control={<Checkbox />} 
                        label="Allow numbers" 
                    />
                    <FormControlLabel 
                        control={<Checkbox />} 
                        label="Allow special symbols (* $ # ! ? %)" 
                    />
                </FormGroup>
                <Button onClick={generatePassword}>Generate</Button>
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
import { Paper, Typography, Link, TextField, Button, Box, InputAdornment } from "@mui/material"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod"

import { registerSchema } from "../../utils/schemas/userSchema";
import { apiClient } from "../../utils/clients/apiClient";
import { useNavigate } from "react-router-dom";

const schema = z.object(registerSchema).required()

type RegisterSchemaType = z.infer<typeof schema>

function Register() {
    const [visible, setVisible] = useState(false)
    const navigate = useNavigate()
    const { register, handleSubmit, formState: {errors} } = useForm<RegisterSchemaType>({
        resolver: zodResolver(schema)
    })

    const onFormSubmit:SubmitHandler<RegisterSchemaType> = async (data) => {
        // Send the data if validated to the backed
        const result = await apiClient.post('/users/register', data)
        if (result.status == 200) {
            navigate('/sign')
        }
    }

    return (
        <Paper
        component="form"
        elevation={8}
        sx={{ padding: '1rem', minWidth: '500px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1rem'}}
        noValidate
        autoComplete="off">
        <Typography variant="h3">Sign Up</Typography>
        <Box sx={{display: 'flex', flexDirection: 'row', gap: '1rem', width: '60%'}}>
            <TextField
            {...register("firstName")}
            id="outlined-controlled"
            label="First Name"
            sx={{width: '60%'}}
            />             
            <TextField
            {...register("lastName")}
            id="outlined-uncontrolled"
            label="Last Name"
            sx={{width: '60%', outline: 'black'}}
            />
        </Box>
            {(errors?.firstName || errors?.lastName) && <Typography sx={{color: 'red', width: '60%', textAlign: 'left'}}>Please enter valid names</Typography>}
        <TextField
            {...register("email")}
            id="outlined-uncontrolled"
            label="Email"
            sx={{width: '60%', outline: 'black'}}
            />
        {errors?.email && <Typography sx={{color: 'red', width: '60%', textAlign: 'left'}}>Please enter valid email</Typography>}
        <TextField
            {...register("password")}
            id="outlined-uncontrolled"
            label="Password"
            sx={{width: '60%', outline: 'black'}}
            type={visible ? "text":"password"}
            InputProps={{
                endAdornment: (
                    <Button onClick={() => setVisible(!visible)}>
                        <InputAdornment position="start">
                            <RemoveRedEyeIcon/>
                        </InputAdornment>
                    </Button>
                ),
              }}
            />
            {errors?.password && <Typography sx={{color: 'red', width: '60%', textAlign: 'left'}}>Please enter valid password</Typography>}
        <Box>
            <Link href="/sign" underline="none">Already have an account? Sign In.</Link>
        </Box>
        <Button 
        sx={{backgroundColor: 'black', color: 'white', padding: '0.5rem 1rem', fontSize: '1.5rem'}}
        onClick={handleSubmit(onFormSubmit)}>
            Sign Up
        </Button>
      </Paper>
    )
}

export default Register
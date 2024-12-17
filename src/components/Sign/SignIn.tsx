import { Box, Button, InputAdornment, Link, TextField, Typography } from "@mui/material"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Paper from "@mui/material/Paper"
import { useForm, SubmitHandler} from 'react-hook-form';
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { apiClient } from "../../utils/clients/apiClient";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

const schema = z.object({
  email: z.string(),
  password: z.string()
})

type SignInTypeSchema = z.infer<typeof schema>
function SignIn() {
    const navigate = useNavigate()
    const [visible, setVisible] = useState(false)
    const { register, handleSubmit } = useForm<SignInTypeSchema>({
      resolver: zodResolver(schema)
    })
    const notify = () => toast.error("Incorrect Email or Password");
    const onSignIn:SubmitHandler<SignInTypeSchema> = async (data) => {
      try {
        const result = await apiClient.post('/users/signin', data)
        localStorage.setItem('x-auth-token', result.data)
        navigate('/main')
      } catch {
        notify()
      }

    }

    return (
        <><Paper
        component="form"
        elevation={8}
        sx={{ padding: '1rem', width: '600px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}
        noValidate
        autoComplete="off">
        <Typography variant="h3">Sign In</Typography>
        <TextField
          {...register("email")}
          id="outlined-controlled"
          label="Email"
          sx={{ width: '50%' }} />
        <TextField
          {...register("password")}
          id="outlined-uncontrolled"
          label="Password"
          sx={{ width: '50%', outline: 'black' }}
          type={visible ? "text":"password"}
          InputProps={{
              endAdornment: (
                  <Button onClick={() => setVisible(!visible)}>
                      <InputAdornment position="start">
                          <RemoveRedEyeIcon/>
                      </InputAdornment>
                  </Button>
              ),
            }}/>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
          <Link underline="none">Forgot Password?</Link>
          <Link href="/sign/register" underline="none">Create Account</Link>
        </Box>
        <Button
          sx={{ backgroundColor: 'black', color: 'white', padding: '0.5rem 1rem', fontSize: '1.5rem' }}
          onClick={handleSubmit(onSignIn)}>
          Sign In
        </Button>
      </Paper><ToastContainer position="bottom-center" theme="dark" /></>
    )
}

export default SignIn

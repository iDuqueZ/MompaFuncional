import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Axios from 'axios';
import Swal from 'sweetalert2'


const theme = createTheme();

export default function SignIn() {

    const [user, setUser] = useState('')
    const [contrasena, setContrasena] = useState('')

    const login= async(e)=>{
        e.preventDefault();
        const usuario = {user, contrasena}
        const respuesta= await Axios.post('/admin/login', usuario);
        console.log(respuesta);
        const mensaje= respuesta.data.mensaje;

        if(mensaje !== 'Bienvenido'){
            Swal.fire({
                icon: 'error',
                title: mensaje,
                showConfirmButton: false,
                timer: 1500
            })
        }else {
            const token = respuesta.data.token
            const user= respuesta.data.user
            const idUser= respuesta.data.id

            sessionStorage.setItem('token', token)
            sessionStorage.setItem('user', user)
            sessionStorage.setItem('idUser', idUser)
            Swal.fire({
                icon: 'success',
                title: mensaje,
                showConfirmButton: false,
                timer: 1500
            })
            window.location.href = "/Dashboard"
        }
    }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" style={{height: '100vh'}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'orange' }}>
            
          </Avatar>
          <Typography component="h1" variant="h5">
            MOMPA
          </Typography>
          <Box component="form" onSubmit={login} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="user"
              label="User name"
              name="user"
              autoComplete="user"
              autoFocus
              onChange={(e)=>setUser(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e)=>setContrasena(e.target.value)}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
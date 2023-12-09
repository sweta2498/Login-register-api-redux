import { Avatar, Box, Button, CssBaseline, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Rgister = () => {

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function loginbtn() {
        navigate('/login')
    }

    const signupbtn = () => {
        console.log("data====", firstname, lastname, email, password);
        const data = { firstname, lastname, email, password };

        if (firstname !== '' || lastname !== '' || email !== '' || password !== '') {
            fetch("http://localhost:4000/data", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((result) => {
                console.log(result);
                alert("Data Save Successfully..!!!")

                navigate('/dash')
            })
        }
        else {
            alert("Enter All Data..!!!")
        }
    }

    return (
        <>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />

                <Grid item md={12} component={Paper} elevation={6} square >
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: "primary.main", mt: 5 }}>
                            <LockOutlinedIcon />
                        </Avatar>

                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>

                        <Box component="form" noValidate sx={{ mt: 1 }}>

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="First Name"
                                name="firstname"
                                autoFocus
                                value={firstname}
                                onChange={e => setFirstname(e.target.value)}
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Last Name"
                                name="lastname"
                                autoFocus
                                value={lastname}
                                onChange={e => setLastname(e.target.value)}
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />

                            <Button
                                fullWidth
                                variant="contained"
                                onClick={signupbtn}
                                sx={{ mt: 3, mb: 2, borderRadius: 5 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Button onClick={loginbtn}>
                                        <Link variant="body2">
                                            Already have an account? Sign in
                                        </Link>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Rgister
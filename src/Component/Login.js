import { Alert, Avatar, Box, Button, CssBaseline, Grid, Link, Paper, Snackbar, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { setlogin, setSnackbar } from '../Redux/LoginAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [emailaddress, setEmail] = useState("")
    const [pwd, setPassword] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const snackbar = useSelector((state) => state.snack);
    const handleClose = () => {
        dispatch(
            setSnackbar({
                open: false,
                message: "",
                type: snackbar.type,
            })
        )
    }

    const loginbtn = (e) => {
        dispatch(setlogin({
            email: emailaddress,
            password: pwd
        },
            (res) => {
                if (res.success) {
                    dispatch(setSnackbar({
                        open: false,
                        message: res.message,
                        type: res.type
                    }))

                    navigate("/dash")
                    alert("Login success..!!!")

                } else { 
                    dispatch(setSnackbar({
                        open: false,
                        message: res.message,
                        type: res.type
                    }))
                }
                 
            }
        ))
    }



    const signupbtn = () => {
        navigate('/register')
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
                        }}>

                        <Avatar sx={{ m: 1, bgcolor: "primary.main", mt: 5 }}>
                            <LockOutlinedIcon />
                        </Avatar>

                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>

                        <Box component="form" noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Email Address"
                                name="emailaddress"
                                autoFocus
                                value={emailaddress}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="pwd"
                                label="Password"
                                type="password"
                                value={pwd}
                                onChange={e => setPassword(e.target.value)}
                            />

                            <Button
                                fullWidth
                                variant="contained"
                                onClick={loginbtn}
                                sx={{ mt: 3, mb: 2, borderRadius: 5 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Button onClick={signupbtn}>
                                        <Link variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Button>
                                </Grid>
                            </Grid>

                            <Snackbar
                                open={snackbar.open}
                                onClose={handleClose}
                                autoHideDuration={3000}
                                anchorOrigin={{ horizontal: "center", vertical: "bottom" }}>
                                <Alert onClose={handleClose} variant="filled" severity={snackbar.type}>
                                    {snackbar.message}
                                </Alert>
                            </Snackbar>

                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Login
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

const theme = createTheme();

function SignIn () {
    
    const [signInEmail, setSignInEmail] = useState("");
    const [signInPassword, setSignInPassword] = useState("");

    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, [])

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                signInEmail,
                signInPassword
            );
            window.open("https://iconcile.web.app/home",'_self');
            console.log(signInEmail);
            // console.log(user?.email);
        }
        catch (err) {
            console.error(err);
        }
      };

    return (
        <ThemeProvider theme = {theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Avatar sx={{
                        m:1,
                        bgcolor: 'secondary.main'
                    }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1"  variant='h5'>
                        Sign in
                    </Typography>
                    <Box 
                        // component="form"
                        sx={{
                            mt:3
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Email Address"
                                    onChange={(e) => {
                                        setSignInEmail(e.target.value);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    autoComplete="new-password"
                                    onChange={(e) => {
                                        setSignInPassword(e.target.value);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    fullWidth
                                    variant='contained'
                                    sx={{
                                        mt: 3,
                                        mb: 2
                                    }}
                                    onClick={login}
                                >
                                    Sign In
                                </Button>
                            </Grid>
                            <Grid container justifyContent='flex-end'>
                                <Grid item>
                                    <Link to='/signup' variant='body2'>
                                        Don't have an account? Sign up
                                    </Link>
                                </Grid>
                            </Grid>
                            <Grid
                                sx={{
                                    mt: 3,
                                    mb: 2
                                }}
                            >
                                {/* {user?.email != null ? 'Signed up successfully, Please proceed to login' : 'Please try again in a few minutes'} */}
                            </Grid>
                        </Grid>
                        
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default SignIn;
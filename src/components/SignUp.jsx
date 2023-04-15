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
import { auth} from "../config/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

const theme = createTheme();

function SignUp () {
    const [signUpFirstName, setSignUpFirstName] = useState("");
    const [signUpLastName, setSignUpLastName] = useState("");
    const [signUpEmail, setSignUpEmail] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");

    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, [])

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                signUpFirstName,
                signUpLastName,
                signUpEmail,
                signUpPassword
            );
            window.open("http://localhost:3000/home",'_self');
            console.log(user);
            console.log(user?.email);
        }
        catch (error) {
            console.error(error.message);
        }
      };
    //   const logout = async () => {
    //     await signOut(auth);
    //   };

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
                        Sign up
                    </Typography>
                    <Box 
                        // component="form"
                        sx={{
                            mt:3
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    label="First Name"
                                    onChange={(e) => {
                                        setSignUpFirstName(e.target.value);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Last Name"
                                    onChange={(e) => {
                                        setSignUpLastName(e.target.value);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Email Address"
                                    onChange={(e) => {
                                        setSignUpEmail(e.target.value);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    type='password'
                                    label="Password"
                                    autoComplete="new-password"
                                    onChange={(e) => {
                                        setSignUpPassword(e.target.value);
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
                                    onClick={register}
                                >
                                    Sign Up
                                </Button>
                            </Grid>
                            
                            <Grid container justifyContent='flex-end'>
                                <Grid item>
                                    <Link to='/signin' variant='body2'>
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}
                                sx={{
                                    mt: 1,
                                    mb: 2
                                }}
                            >
                                {/* {user?.email != null ? 'Signed up successfully, Please proceed to login' : 'Please try again in a few minutes'} */}
                            </Grid>
                            {/* <Grid item xs={12}>
                                <button onClick={logout}> Sign Out </button> 
                            </Grid> */}
                        </Grid>
                        
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default SignUp;
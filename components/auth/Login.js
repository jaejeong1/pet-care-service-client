import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import LockIcon from '@material-ui/icons/Lock';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            {/* TODO: 링크 주소 추후 수정 */}
            <Link color="inherit" href="https://mui.com/"> 
                Pet Care Service
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export function Login({onChange, onSubmit}) {
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                    <Avatar
                        sx={{
                            m: 2,
                            bgcolor: '#677381'
                        }}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={onSubmit}
                        noValidate="noValidate"
                        sx={{
                            mt: 1
                        }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="userid"
                            label="Id"
                            name="userid"
                            autoComplete="userid"
                            autoFocus
                            onChange={onChange}
                            InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <PersonOutlineOutlinedIcon />
                            </InputAdornment>
                            ),
                        }} />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={onChange}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <LockOpenOutlinedIcon />
                                </InputAdornment>
                                ),
                            }} />
                        <FormControlLabel
                            control={<Checkbox value = "remember" />}
                            label="Remember me"/>
                        <Button
                            type="submit"
                            fullWidth 
                            variant="contained"
                            sx={{
                                mt: 1,
                                mb: 1,
                                bgcolor: '#677381'
                            }}>
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                {/* <Link href="#" variant="body2">
                                    Forgot password?
                                </Link> */}
                            </Grid>
                            <Grid item>
                                <Link 
                                sx={{
                                    marginTop: 1,     
                                    color: '#677381'
                                }}
                                href="/auth/register" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright
                    sx={{
                        mt: 14,
                        mb: 4
                    }}/>
            </Container>
        </ThemeProvider>
    );
}

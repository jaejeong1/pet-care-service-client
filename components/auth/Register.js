import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/Email';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Head from 'next/head';

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export function Register( { onChange, onSubmit } ){

    // const classes = useStyles();

    return (
        <>
        <ThemeProvider theme={theme}>
        {/* <form className={classes.root} noValidate autoComplete="off"> */}
            <Head>
                <title>사용자| 회원가입</title>
            </Head>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                    >
                    <Avatar
                        sx={{
                            m: 1,
                            bgcolor: '#677381'
                            // bgcolor: 'secondary.main'
                        }}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        회원가입
                    </Typography>
                        <Box component="form" onSubmit={onSubmit} noValidate="noValidate" sx={{ mt: 3 }} >
                            <Grid container spacing={2}>

                                <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="E-mail"
                                            name="email"
                                            onChange={onChange}
                                            InputProps={{
                                                startAdornment: (
                                                <InputAdornment position="start">
                                                    <EmailOutlinedIcon />
                                                </InputAdornment>
                                                ),
                                            }} />
                                </Grid>
                               
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth={true}
                                        id="name"
                                        label="Name"
                                        name="name"
                                        onChange={onChange}
                                        InputProps={{
                                            startAdornment: (
                                            <InputAdornment position="start">
                                                <PermIdentityOutlinedIcon />
                                            </InputAdornment>
                                            ),
                                        }} />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="password"
                                        label="Password"
                                        name="password"
                                        onChange={onChange}
                                        InputProps={{
                                            startAdornment: (
                                            <InputAdornment position="start">
                                                <LockOutlinedIcon />
                                            </InputAdornment>
                                            ),
                                        }} />
                                </Grid>          

                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value = "allowExtraEmails" color = "primary" />}
                                        label="I want to receive inspiration, marketing promotions and updates via email."/>
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                // color="black"
                                // color='#82A0AA'
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    bgcolor: "#677381"
                                }}>
                                전 송
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/auth/login" variant="body2">
                                        로그인 화면으로 전환
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                </Box>
            </Container>
        {/* </form>  */}
         </ThemeProvider>
     </> 
    );
}

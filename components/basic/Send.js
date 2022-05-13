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
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import MovieIcon from '@material-ui/icons/Movie';

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

export function Send({onChange, onSubmit}) {
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        mt: 8,
                        mb: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                    <Avatar
                        sx={{
                            m: 2,
                            bgcolor: '#677381'
                        }}>
                        <MovieIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h4" gutterBottom>
                        Send Your Scene
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={onSubmit}
                        noValidate="noValidate"
                        sx={{
                            // mt: 1
                        }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="petname"
                            label="write your petname"
                            name="name"
                            autoComplete="userid"
                            autoFocus
                            onChange={onChange}
                          //   InputProps={{
                          //   startAdornment: (
                          //   <InputAdornment position="start">
                          //       <PersonOutlineOutlinedIcon />
                          //   </InputAdornment>
                          //   ),
                          // }}
                          />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="email"
                            label="email"
                            id="email"
                            // autoComplete="current-password"
                            onChange={onChange}
                             />

                        <Button
                            type="submit"
                            fullWidth 
                            onClick={onSubmit}
                            variant="contained"
                            sx={{
                                mt: 2,
                                mb: 1,
                                bgcolor: '#677381'
                            }}>
                           전송
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
                                    marginTop: 2,     
                                    color: '#677381'
                                }}
                                href="/basic/message" variant="body2">
                                    {"More change Message?"}
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

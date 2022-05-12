import React, {useState, useEffect} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {createSvgIcon} from '@mui/material/utils';
import { logoutRequest } from '@/modules/auth/login';
import {useDispatch, connect} from 'react-redux';
import { useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/system';


const HomeIcon = createSvgIcon(
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>,
    'Home',
);

const basicSettings = {
    subTitles: [
        // '반려견 홈케어 서비스',
        '모델', '메세지', '영상제작'
    ],
    urls: ["/basic/model", "/basic/message", "/basic/send", '/board/list']
};

const align = createTheme({
    
    align: {
    float: "right",
   }
});

export function Nav() {
    const {loginUser} = useSelector(state => state.login)

    const dispatch = useDispatch()
    const [imageInfos, setImageInfos] = useState({
        imageUrl: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FUg38c%2FbtrBLGyUiyO%2FlUMdQ6sjD96kFkKbpW8J10%2Fimg.png',
        imageTitle: 'sign'
    });
    const [userUrls, setUserUrls] = useState({subTitles: [], urls: []});

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleLogout = () => {
        alert(' 로그아웃 클릭 ')
        dispatch(logoutRequest());
    }

    useEffect(() => {
      console.log(' 모듈에 저장된 로그인값: '+JSON.stringify(loginUser))
        if (loginUser === null) {
            setUserUrls({
                subTitles: [
                    '회원가입', '로그인', '로그아웃'
                ],
                urls: ["/auth/register", "/auth/login",  "/auth/logout"]
            })
            setImageInfos({
                imageUrl: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FUg38c%2FbtrBLGyUiyO%2FlUMdQ6sjD96kFkKbpW8J10%2Fimg.png',
                imageTitle: 'sign'
            })
        } else {
            setUserUrls({
                subTitles: [
                    "프로필", "정보수정", "회원탈퇴"
                ],
                urls: ["/user/profile", "/user/modifyUser", "/auth/delUser"]
            })
            setImageInfos(
                {imageUrl: 'https://www.w3schools.com/howto/img_avatar.png', imageTitle: 'users'}
            )
        }
    }, [loginUser && loginUser.name])

    return (
        <AppBar
            position="static"
            style={{
                backgroundColor: "#000000"
                // marginBottom: "20px"
            }}>
            {/* <Container maxWidth="xl"> */}
                <Toolbar disableGutters="disableGutters">
                    <Typography
                        // align="right"
                        // className={classes.title}
                        variant="h6"
                        noWrap="noWrap"
                        component="div"
                        sx={{
                            mr: 2,
                            display: {
                                xs: 'none',
                                md: 'flex'
                            }
                        }}>
                        <Box
                           
                            sx={{
                                '& > :not(style)' : {
                                    m: 10
                                }
                            }}
                            >
                            <a href='/'><HomeIcon
                                color="primary"
                                sx={{
                my: 0,
                color: 'white',
                display: 'block'
            }}/></a>
                        </Box>
                      </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            color: 'white',
                            display: {
                                xs: 'none',
                                md: 'flex'
                            }
                        }}>
                        {
                            basicSettings
                                .urls
                                .map((urls, i) => (
                                    // 정렬이 안되네?
                                    <div align="right"> 
                                    <a
                                        href={urls}
                                        key={i}
                                        style={{
                                            textDecoration: 'none'
                                        }}>
                                  
                                        <Button
                                            // className={this.nav}
                                            // size="large"
                                            key={i}
                                            onClick={handleCloseNavMenu}
                                            sx={{
                                                my: 2,
                                                color: 'white',
                                                display: 'block',
                                                // align: 'align.float',
                                                float: 'right'
                                    
                                                
                                            }}>
                                            {basicSettings.subTitles[i]}
                                        </Button>
                                    
                                    </a>
                                </div>
                                ))
                        }
                    </Box>

                    <Box sx={{
                            flexGrow: 0
                        }}>
                        <Tooltip title={imageInfos.imageTitle}>
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{
                                    p: 0
                                }}>
                                <Avatar alt="Remy Sharp" src={imageInfos.imageUrl}/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{
                                mt: '45px'
                            }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            keepMounted="keepMounted"
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            open={Boolean(anchorElUser)}>
                            {
                                userUrls
                                    .urls
                                    .map((urls, i) => (
                                        <MenuItem key={i}>
                                            <a href={urls}>
                                                <Typography textAlign="center" onClick={handleCloseUserMenu}>{userUrls.subTitles[i]}</Typography>
                                            </a>
                                        </MenuItem>
                                    ))
                            }
                        </Menu>
                    </Box>
                    {loginUser && <Box >
                        <Button
                            onClick={handleLogout}
                            sx={{
                                color: 'white',
                                display: 'block'
                            }}>
                            로그아웃
                        </Button>
                    </Box>}
                </Toolbar>
            {/* </Container> */}
        </AppBar>
    );
}
import {increaseAsync, decreaseAsync} from '@/modules/basic/counter';
import {Counter} from '@/components';
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
import { ThemeProvider, createTheme } from '@mui/system';
import LoadingButton from '@mui/lab/LoadingButton';


const CounterPage = ({number, increaseAsync, decreaseAsync}) => {

    const style = {
        display:"inline-block",
        margin:'100px',
        
    };

    const style2 = {
        display:"inline-block",
        margin:'0 auto',
        
      
    };

    const style3 = {
        display:"inline-block",
        margin:'100px auto',
        // width: '2000px'
       
    };

    return (
        <>
       <div style={style3}>
        <div style={style}>
        <h1>음식</h1>
        {/* <ul>
        <li>밥먹자</li>
        <li>물마시자</li>
        <li>간식먹자</li> */}
        <Button variant="contained">밥먹자</Button>
        <Button variant="contained">물마시자</Button>
        <Button variant="contained">간식먹자</Button>
        {/* <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton> */}
       
        {/* <button>밥먹자</button>
        <button>물마시자</button>
        <button>간식먹자</button> */}
        </div>
        <div style={style}>
        <h1>놀이</h1>
        <Button  variant="outlined">앉아</Button>
        <Button  variant="outlined">손~</Button>
        <Button  variant="outlined">점프</Button>
        </div>
        <div style={style}>
        <h1>감정</h1>
        <Button variant="contained">사랑해</Button>
        <Button variant="contained">보고싶어</Button>
        <Button variant="contained">잘놀고있어</Button>
       </div>
       </div>
      </>
    );
};
const mapStateToProps = state => ({number: state.counter})
const registerActions = {
  increaseAsync, decreaseAsync
}

export default connect( mapStateToProps, registerActions)(CounterPage);


// export default connect(
//     state => ({number: state.counter}),
//     {increaseAsync, decreaseAsync}
// )(CounterPage);
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalDrinkTwoToneIcon from '@material-ui/icons/LocalDrinkTwoTone';
import OutdoorGrillTwoToneIcon from '@material-ui/icons/OutdoorGrillTwoTone';
import Typography from '@mui/material/Typography';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import EmojiEmotionsTwoToneIcon from '@material-ui/icons/EmojiEmotionsTwoTone';
import ToysTwoToneIcon from '@material-ui/icons/ToysTwoTone';
import EventSeatTwoToneIcon from '@material-ui/icons/EventSeatTwoTone';
import ChildCareTwoToneIcon from '@material-ui/icons/ChildCareTwoTone';
import PanToolTwoToneIcon from '@material-ui/icons/PanToolTwoTone';
import PetsTwoToneIcon from '@material-ui/icons/PetsTwoTone';
import {Modal, Pagination, Table} from '@/components'

import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '33%',
        maxWidth: 360,
        marginTop: 30,
        marginLeft: 50,
        marginRight: 50,
        display: "inline-block",
        backgroundColor: theme.palette.background.paper
    },
    root2: {
        width: '100%',
        marginTop: 70,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 70,
        display: "inline-block",
        backgroundColor: theme.palette.background.paper
    },
    root3: {
        width: '100%',
        marginTop: 50,
        // marginLeft: 50, marginRight: 50, display: "inline-block",
        backgroundColor: theme.palette.background.paper
    },
    root4: {
        width: '100%',
        marginTop: 70,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 70,
        align: "center",
        backgroundColor: theme.palette.background.paper
    },
    style: {
        display: "inline-block",
        margin: '100px'
    },
    root5: {
        width: '100%',
        backgroundColor: theme.palette.background.paper
    }
}));

export function Send() {
    const classes = useStyles();

    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        console.log("버튼클릭")
        setSelectedIndex(index);
    };

    return (
      <> 
        <Box
            sx={{
              marginTop: 15,
              marginLeft: 20,
              marginRight: 20,
            }} > 
          <Typography component="h1" variant="h3" align="center" color="text.primary">
            Send Your Scene
          </Typography>
        </Box>
        <Box
            sx={{
                marginTop: 10,
                marginLeft: 20,
                marginRight: 20,
            }}
            display="flex"
            justifyContent="center"
            m={1}
            p={1}>
            <TextField
                id="filled-full-width" 
                label="Write Your Pet Name"
                variant="outlined"
                // InputLbelProps={{
                //     shrink: true
                // }}
                />
        </Box>
        <Box
            // display="flex"
            // justifyContent="center"
            sx={{
                marginTop: 10,
                marginBottom: 20,
                marginLeft: 20,
                marginRight: 20
            }}>
            <TextField
                id="filled-full-width"
                label="Email"
                fullWidth
                variant="outlined"
                // size="medium"
                InputLabelProps={{
                    shrink: true
                }}/>
             <Box display="flex" justifyContent="center" m={1} p={1}>
                <Button size="large" type="submit" color="primary" variant="contained">전송</Button>
              </Box>
        </Box>
      </>
    );
}
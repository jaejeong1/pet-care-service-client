import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalDrinkTwoToneIcon from '@material-ui/icons/LocalDrinkTwoTone';
import OutdoorGrillTwoToneIcon from '@material-ui/icons/OutdoorGrillTwoTone';
import Typography from '@mui/material/Typography';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import EmojiEmotionsTwoToneIcon from '@material-ui/icons/EmojiEmotionsTwoTone';
import Link from '@mui/material/Link';
import ChildCareTwoToneIcon from '@material-ui/icons/ChildCareTwoTone';
import PanToolTwoToneIcon from '@material-ui/icons/PanToolTwoTone';
import PetsTwoToneIcon from '@material-ui/icons/PetsTwoTone';
import TextField from '@material-ui/core/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Divider from '@material-ui/core/Divider';
import {createTheme, ThemeProvider} from '@mui/material/styles';

function Copyright() {

  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Pet Care Service
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: 100, 
    marginLeft: 50,
    marginRight: 50,  
    marginBottom: 70,
    position: "relative",
    // backgroundColor: theme.palette.background.paper,
  },
  
  root2: {
    width: '100%',
    // display: 'inline-block',
    // display: "flex",
    // flexDirection: "column",
    // marginBottom: 50,
    // position: "relative",
    // display: "block",
    backgroundColor: theme.palette.background.paper,
  },

  root3: {
    width: '100%',
    marginTop: 50, 
    marginLeft: 50,
    marginRight: 50,  
    marginBottom: 50,
    backgroundColor: theme.palette.background.paper,
  },

  margin: {
    textAlign: "center",
    marginBottom:30
  },

}));

// const theme = createTheme();

export function Message({onChange, onSubmit, onDelete}) {
  const classes = useStyles();
  
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    console.log("버튼클릭", index)
    setSelectedIndex(index);
  };

  return (   
  <ThemeProvider theme={theme}>
  <main>
     {/* <Box className={classes.root}> */}
        <Box
            sx={{
              width: '100%',
              marginTop: 10, 
              marginLeft: 5,
              marginRight: 5,  
              marginBottom: 10,
            }}>
          <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                Choose Message for Your Pet
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Make Unique Pet Care Service by Yourself
          </Typography>
        {/* </Box> */}
      </Box>
      <Box sx={{
                      mb: 10,
                      // mt: 10,
                      ml: 10,
                      mr: 5
                      // width: '30%',
                      // align: 'center',
                      // display: 'inline-block',
                      // flexDirection: 'column',
                      // verticalAlign: "middle", 
                  }}>
    <Box  component="form"  
              // onSubmit={onSubmit}
              noValidate="noValidate"
              sx={{
                  mr: 2,
                  ml: 2,
                  width: '30%',
                  align: 'center',
                  display: 'inline-block',
                  // flexDirection: 'column',
                  // verticalAlign: "middle", 
              }}
              >
      <List className={classes.root2} component="nav" aria-label="main mailbox folders">
      <h1 align="center" className={classes.margin}>음식:Food</h1>
        <ListItem
          button
          value='물 마시자'
          name='food'
          selected={selectedIndex === 0}
          onClick={onSubmit}
        >
          <ListItemIcon>
            <LocalDrinkTwoToneIcon />
          </ListItemIcon>
          <ListItemText align="right" primary="물 마시자" />
        </ListItem>
        <ListItem
          button
          name='food'
          selected={selectedIndex === 1}
          onClick={onSubmit}
        >
          <ListItemIcon>
            <OutdoorGrillTwoToneIcon />
          </ListItemIcon>
          <ListItemText align="right" primary="밥 먹자" />
        </ListItem>
        <ListItem
          button
          name='food'
          selected={selectedIndex === 2}
          onClick={onSubmit}
        >
          <ListItemIcon>
            <OutdoorGrillTwoToneIcon />
          </ListItemIcon>
          <ListItemText align="right" primary="간식 먹자" />
        </ListItem>
      </List>
      </Box>

      <Box
       component="form"  
              // onSubmit={onSubmit}
              noValidate="noValidate"
              sx={{
                  mr: 2,
                  ml: 2,
                  width: '30%',
                  display: 'inline-block',
                  // flexDirection: 'column',
                  // alignItems: 'center'
              }}>
      <List className={classes.root2} component="nav" aria-label="main mailbox folders">
      <h1 align="center"className={classes.margin}>놀이:Play</h1>
        <ListItem
          button
          name='play'
          selected={selectedIndex === 3}
          onClick={onSubmit}
        >
          <ListItemIcon>
            <PetsTwoToneIcon />
          </ListItemIcon>
        <ListItemText align="right" primary="앉아" />
        </ListItem>
        <ListItem
        button
        name='play'
        selected={selectedIndex === 4}
        onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemIcon>
            <PetsTwoToneIcon />
          </ListItemIcon>
        <ListItemText align="right" primary="점프" />
        </ListItem>
        <ListItem
          button
          name='play'
          selected={selectedIndex === 5}
          onClick={onSubmit}
        >
          <ListItemIcon>
            <PetsTwoToneIcon />
          </ListItemIcon>
        <ListItemText align="right" primary="손" />
        </ListItem>
      </List>
    </Box>

    <Box
          component="form"  
          // onSubmit={onSubmit}
          noValidate="noValidate"
          sx={{
              mr: 2,
              ml: 2,
              width: '30%',
              display: 'inline-block',
              // flexDirection: 'column',
              // alignItems: 'center'
          }}>
      <List className={classes.root2} component="nav" aria-label="main mailbox folders">
      <h1 align="center" className={classes.margin}>감정:Emotion</h1>
        <ListItem
          button
          name='emotion'
          selected={selectedIndex === 6}
          onClick={onSubmit}
        >
          <ListItemIcon>
            <ChildCareTwoToneIcon />
          </ListItemIcon>
        <ListItemText align="right" primary="잘놀고있어" />
        </ListItem>
        <ListItem
          button
          name='emotion'
          selected={selectedIndex === 7}
          onClick={onSubmit}
        >
          <ListItemIcon>
            <EmojiEmotionsTwoToneIcon />
          </ListItemIcon>
        <ListItemText align="right" primary="보고싶어" />
        </ListItem>
        <ListItem
          button
          name='emotion'
          selected={selectedIndex === 8}
          onClick={onSubmit}
        >
          <ListItemIcon>
            <FavoriteTwoToneIcon />
          </ListItemIcon>
        <ListItemText align="right" primary="사랑해" />
        </ListItem>
      </List>
      </Box> 
    </Box>
  
  <Divider />

  <Box sx={{
              width: '100%',
              marginTop: 10, 
              marginLeft: 5,
              marginRight: 5,  
              // fontWeight: 400
              // marginBottom: 7, 
              }}
              >     
     <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              // fontWeight="bold"
            >
      Add More Message
      </Typography> 
      <Box component="form" onSubmit={onSubmit} onDelete={onDelete} noValidate="noValidate"
              sx={{
                marginTop: 10,
                marginBottom: 20,
                marginLeft: 20,
                marginRight: 20
              }}
              >     
        <TextField
          id="outlined-full-width"
          label="Add your Message"
          // style={{ margin: 8 }}
          // multiline
          // rows={4}
          name='text'
          fullWidth
          // margin="normal"
          onChange={onChange}
          variant="filled"
        />
        <Box display="flex" justifyContent="right" p={1}>
            <Button 
              type="submit" 
              variant="contained"
              // name="text"
              onClick={onSubmit}
              sx={{
                  mt: 2,
                  mb: 1,
                  bgcolor: '#677381'
              }}>
              추가
              </Button>
            <Button 
              type="submit" 
              variant="contained"
              onClick={onDelete}
              sx={{
                  mt: 2,
                  mb: 1,
                  bgcolor: '#677381'
              }}>
              삭제
            </Button>                 
        </Box> 
      </Box> 
    </Box>
  </main>
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">   
          <Copyright />
    </Box>
  </ThemeProvider> 
  );
}

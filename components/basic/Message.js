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
import ToysTwoToneIcon from '@material-ui/icons/ToysTwoTone';
import EventSeatTwoToneIcon from '@material-ui/icons/EventSeatTwoTone';
import ChildCareTwoToneIcon from '@material-ui/icons/ChildCareTwoTone';
import PanToolTwoToneIcon from '@material-ui/icons/PanToolTwoTone';
import PetsTwoToneIcon from '@material-ui/icons/PetsTwoTone';
import TextField from '@material-ui/core/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: 100, 
    marginLeft: 50,
    marginRight: 50,  
    marginBottom: 70,
    // display: "flex",
    // backgroundColor: theme.palette.background.paper,
  },
  
  root2: {
    width: '100%',
    maxWidth: 360,
    // marginTop: 30, 
    // marginLeft: 70,
    // marginRight: 70,  
    // alignItems: 'center'
    // display: "inline-block",
    backgroundColor: theme.palette.background.paper,
  },

  // style: {
  //   display:"inline-block",
  //   margin:'100px',   
  // },

  margin: {
    marginBottom:30
  }

}));

// const theme = createTheme();

export function Message() {
  const classes = useStyles();
  
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    console.log("버튼클릭")
    setSelectedIndex(index);
  };

  return (   
  <>
     <Box className={classes.root}>
        {/* <Box
            sx={{
                mt: 6,
                mb: 2,
                // display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}> */}
          <Typography
                  component="h1"
                  variant="h3"
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
  {/* <div className={classes.root}> */}
    <Box  component="form"  
              // onSubmit={onSubmit}
              noValidate="noValidate"
              sx={{
                  // mt: 6,
                  // mb: 2,
                  // width: '100%',
                  // display: 'inline-block',
                  flexDirection: 'column',
                  alignItems: 'center'
              }}
              >
      <List className={classes.root2} component="nav" aria-label="main mailbox folders">
      <h1 align="center" className={classes.margin}>음식:Food</h1>
        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)} //TODO: 이벤트 설정 및 파라미터보내주기
        >
          <ListItemIcon>
            <LocalDrinkTwoToneIcon />
          </ListItemIcon>
          <ListItemText align="right" primary="물 마시자" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <OutdoorGrillTwoToneIcon />
          </ListItemIcon>
          <ListItemText align="right" primary="밥 먹자" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <OutdoorGrillTwoToneIcon />
          </ListItemIcon>
          <ListItemText align="right" primary="간식 먹자" />
        </ListItem>
      </List>
   
      <List className={classes.root2} component="nav" aria-label="main mailbox folders">
      <h1 align="center"className={classes.margin}>놀이:Play</h1>
        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)} //TODO: 이벤트 설정 및 파라미터보내주기
        >
          <ListItemIcon>
            <PetsTwoToneIcon />
          </ListItemIcon>
        <ListItemText align="right" primary="앉아" />
        </ListItem>
        <ListItem
        button
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
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
        >
          <ListItemIcon>
            <PetsTwoToneIcon />
          </ListItemIcon>
        <ListItemText align="right" primary="손" />
        </ListItem>
      </List>
    
      <List className={classes.root2} component="nav" aria-label="main mailbox folders">
      <h1 align="center" className={classes.margin}>감정:Emotion</h1>
        <ListItem
          button
          selected={selectedIndex === 6}
          onClick={(event) => handleListItemClick(event, 6)} //TODO: 이벤트 설정 및 파라미터보내주기
        >
          <ListItemIcon>
            <ChildCareTwoToneIcon />
          </ListItemIcon>
        <ListItemText align="right" primary="잘놀고있어" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 7}
          onClick={(event) => handleListItemClick(event, 7)}
        >
          <ListItemIcon>
            <EmojiEmotionsTwoToneIcon />
          </ListItemIcon>
        <ListItemText align="right" primary="보고싶어" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 8}
          onClick={(event) => handleListItemClick(event, 8)}
        >
          <ListItemIcon>
            <FavoriteTwoToneIcon />
          </ListItemIcon>
        <ListItemText align="right" primary="사랑해" />
        </ListItem>
      </List>
    </Box>
  {/* </div> */}
  
  <Divider />

  <div className={classes.root}>
     <Typography
              component="h1"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
      Add More Message
      </Typography> 
      <Box
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
          fullWidth
          // margin="normal"
          // defaultValue="추가메세지를 입력하세요"
          variant="filled"
        />
        <Box display="flex" justifyContent="right" p={1}>
            <Button 
              type="submit" 
              variant="contained"
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
              sx={{
                  mt: 2,
                  mb: 1,
                  bgcolor: '#677381'
              }}>
              변경
            </Button>                 
        </Box> 
      </Box> 
    {/* </div> */}
          {/* <FormControl fullWidth variant="filled">
        <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
        <FilledInput
          id="filled-adornment-amount"
          // label="Message"
          // value={values.amount}
          // onChange={handleChange('amount')}
          startAdornment={<InputAdornment position="start"></InputAdornment>}
        />
      </FormControl> */}
      {/* </div>  */}
  </div>
 </>
  );
}
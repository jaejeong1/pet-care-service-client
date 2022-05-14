import {useDispatch, useSelector} from 'react-redux';
import { scenelinkRequest } from '@/modules/basic/scenelink';;
import React, { useEffect, useState } from "react";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import PetsIcon from '@material-ui/icons/Pets';

const useStyles = makeStyles((theme) => ({
	root: {
	//   width: '100%',
	  marginTop: 30, 
	  marginLeft: 50,
	  marginRight: 50,  
	  marginBottom: 70,
	  // display: "flex",
	  // backgroundColor: theme.palette.background.paper,
	},
}));





export function SceneLink() {

	const classes = useStyles();

	const state = useSelector((state) => state.scenelink);

	const dispatch = useDispatch();

	const [linkList, setLink] = useState({link:''})
    
    const upDate = e => {
        e.preventDefault()
		dispatch(scenelinkRequest());
        const {name, value} = e.target;
        console.log("name", name)
        console.log("value", value)
        setLink({
            ...linkList,
            [name]: value
        })
    }

	
	useEffect(() => {
		console.log("링크값 받아오는가?");
		upDate;
	}, []);

	
	return (
	<>
        <Box
            sx={{
                // width: '100%',
				marginTop: 20, 
				marginLeft: 50,
				marginRight: 50,  
				marginBottom: 70,
                // display: 'flex',
                // flexDirection: 'column',
                // alignItems: 'center'
            }} > 
          <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
				<PetsIcon fontSize='inherit' />
                Check Your Video
				<PetsIcon fontSize='inherit' />
          </Typography>
			<Typography className={classes.root} variant="h4" align="center" color='textPrimary' paragraph>
				Link: {linkList.link}
			</Typography>
      </Box>
	</>
	);
}

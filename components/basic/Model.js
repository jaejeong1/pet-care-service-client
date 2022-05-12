// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@mui/material/Grid';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 300,
//     padding: 25,
//     margin: 60,
//   },
//   media: {
//     height: 300,    
//   }
// });

// export function Model({onChange, onSubmit}) {
  
//   const classes = useStyles();

//   return (
//     <>
//      {/* <Card className={classes.root}> */}
    
//      <Grid container spacing={3}> 
//      <Grid className={classes.root} xs={4}> 
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FGl1a6%2FbtrBMazcL94%2FACkTK6MKT7YUrJz9YSzsk1%2Fimg.png"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//            Danny
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//            AI모델 1번
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//       {/* TODO: ProjectAPI로 모델정보보내기 */}
//         <Button variant="contained" color="primary"> 
//           Select
//         </Button>
//       </CardActions>
//       </Grid> 
//       <Grid className={classes.root} xs={4}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FGl1a6%2FbtrBMazcL94%2FACkTK6MKT7YUrJz9YSzsk1%2Fimg.png"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//            Danny
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//            AI모델 1번
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//       {/* TODO: ProjectAPI로 모델정보보내기 */}
//         <Button variant="contained" color="primary"> 
//           Select
//         </Button>
//       </CardActions>
//       </Grid>
//       <Grid className={classes.root} xs={4}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FGl1a6%2FbtrBMazcL94%2FACkTK6MKT7YUrJz9YSzsk1%2Fimg.png"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//            Danny
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//            AI모델 1번
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//       {/* TODO: ProjectAPI로 모델정보보내기 */}
//         <Button variant="contained" color="primary"> 
//           Select
//         </Button>
//       </CardActions>
//       </Grid>
//     </Grid>
//     {/* </Card> */}
//     </>
//   );
// }

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright() {

//   const onSubmit = e => {
//     e.preventDefault()
//     console.log("user2", user)
//     alert('회원가입정보: '+JSON.stringify(user))
//     dispatch(registerRequest(user))
// };



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

const infos = [
  {
   img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FeflLqS%2FbtrBSZL47ZE%2FSOKBSDk1X9xfZuq5vYKQy0%2Fimg.png',
   head: 'Yoon sunyoung(Korean)',
   body: 'Yoon sun young is an AI infomercial host who is best suited for curating and marketing products to customers. She will yield the best results when presenting products to potential customers',
   model: 'ysy'
  },
  {
    img:'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdovPI2%2FbtrBUH44HbK%2FYHMj5VfjJmP4QFEZeMKRH1%2Fimg.png',
    head: 'Kang jiyoon(Korean)',
    body: 'With a voice suited for the education field, Kang is mainly used in education materials and user manuals',
    model: 'kang'
  },
  {
    img:'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbXYjUY%2FbtrBWPVPu6A%2FiY6XjlrM4Qkpa8NvMn3B81%2Fimg.png',
    head: 'Jonathan(English)',
    body: 'As a news anchor, this AI Human is comfortable on camera and displays natural body language and facial expressions. As a result, Jonathan can be a helpful and calming entity in many different services',
    model: 'jonadan_ces'
  }
]

const theme = createTheme();

export function Model({onSubmit}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
             Select Your Own AI Model
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Make Unique Pet-Care-Service by Yourself123
            </Typography>
            {/* <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack> */}
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {infos.map((info) => (
              <Grid item key={info} xs={18} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', width: 270}}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      // pt: '56.25%',
                    }}
                    image={info.img}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                       {info.head}
                    </Typography>
                    <Typography>
                       {info.body}
                    </Typography>
                  </CardContent>
                  <Box component="form" onSubmit={onSubmit} noValidate="noValidate" sx={{ mt: 1 }} >
                  <CardActions sx={{float: 'right'}}>
                    <Button type="submit" variant="contained" color="primary" onSubmit={onSubmit} >Confirm</Button>
                  </CardActions>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
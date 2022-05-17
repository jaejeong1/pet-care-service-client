import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { info } from 'console';
import {useState} from 'react';
// import { useDispatch, connect, useSelector } from 'react-redux';
// import { modelSelect, modelSelectFailure } from '@/modules/basic/model';

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

// const onSubmit2 = e => {
//   e.preventDefault()
//   console.log("modelList", modelList)
//   console.log("value", e.target.value)
//   setModelList({...modelList, model: model_name[1]})
//   console.log("modelList", modelList)
//   dispatch(modelSelect(modelList))
//   // dispatch(window.location.href = "/basic/message")
// }


export function Model({onChange, onSubmit}) {

const infos = [
  {
   index: 0,
   img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb5DrYz%2FbtrCboi8qAi%2FvoT241XxiBSw8bE6JOOut1%2Fimg.png',
   head: 'Yoon sunyoung(Korean)',
   body: 'Yoon sun young is an AI infomercial host who is best suited for curating and marketing products to customers. She will yield the best results when presenting products to potential customers',
   model: 'ysy'
  },
  {
    index: 1,
    img:'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdovPI2%2FbtrBUH44HbK%2FYHMj5VfjJmP4QFEZeMKRH1%2Fimg.png',
    head: 'Kang jiyoon(Korean)',
    body: 'With a voice suited for the education field, Kang is mainly used in education materials and user manuals',
    model: 'kang'
  },
  {
    index: 2,
    img:'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbXYjUY%2FbtrBWPVPu6A%2FiY6XjlrM4Qkpa8NvMn3B81%2Fimg.png',
    head: 'Jonathan(English)',
    body: 'As a news anchor, this AI Human is comfortable on camera and displays natural body language and facial expressions. As a result, Jonathan can be a helpful and calming entity in many different services',
    model: 'jonadan_ces'
  },
  {
    index: 3,
    img:'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FomDyu%2FbtrCfnqgg9Y%2FibqSn0KbkcNIOJ7M5hL0zk%2Fimg.png',
    head: 'Haylyn(English)',
    body: 'With a voice suited for responding to customers in real time, Haylyn is mainly used in many platforms like the AI Kiosk that deal with customer support requests',
    model: 'haylyn'
  },
  {
    index: 4,
    img:'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fdy4b68%2FbtrB7MSObK4%2Fe89O8YFNaZXdk2JmQTEer0%2Fimg.png',
    head: 'Kim Hyunwook(Korean)',
    body: 'As a news anchor, He is a suitable option when it comes to selecting a reputable AI model with assurance in his words',
    model: 'khw'
  },
  {
    index: 5,
    img:'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fctoi28%2FbtrB68hxr0k%2FKouD5cIxkTE9HQLQzD8SZ1%2Fimg.png',
    head: 'Lee taeyeon(Korean)',
    body: 'Regardless of the content or industry, Lee enunciates every word clearly in a soothing voice and delivers information effectively',
    model: 'leetaeyeon'
  }
];

// const [modelList, setModelList] =useState({
//   model:''
// })

//  const onClick = (index) => {  
//    if () 
//   console.log("버튼클릭", index)
//   let model = infos[index].model
//   setModelList({...modelList, model: model})
//   onSubmit;
 
// };
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
              Make Unique Pet-Care-Service by Yourself
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
                  {/* <Box component="form" noValidate="noValidate" sx={{ mt: 1 }} > */}
                  <CardActions sx={{float: 'right'}}>                                              
                    <Button type="submit" id="confirm" value={info.model} variant="contained" color="primary" onClick={onSubmit}>Confirm</Button>
                  </CardActions>
                  {/* </Box> */}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        {/* <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography> */}
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
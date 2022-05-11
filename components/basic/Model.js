import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 100,
  },
  media: {
    height: 300,
    
  },
});

export function Model({onChange, onSubmit}) {
  
  const classes = useStyles();

  return (
    <>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FGl1a6%2FbtrBMazcL94%2FACkTK6MKT7YUrJz9YSzsk1%2Fimg.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Danny
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           AI모델 1번
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      {/* TODO: ProjectAPI로 모델정보보내기 */}
        <Button variant="contained" color="primary"> 
          Select
        </Button>
      </CardActions>
    </Card>
    </>
  );
}
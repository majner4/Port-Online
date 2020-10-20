import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Zvysovac from '../img/zvysovac.jpg';
import Palic from '../img/palic.jpg';

const GameCard = (props:any):JSX.Element => {
    const useStyles = makeStyles({
        root: {
          maxWidth: 250,
        },
        media: {
          height: 200,
        },
      });
      const classes = useStyles();

  return (
    <Card className={props.cardName === "zvysovac" ? "card rotate": "card rotate-des"}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.cardName === "zvysovac" ? Zvysovac : Palic}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.cardName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Díky této kartě můžete brát o jednu kartu více
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
  );
}

export default GameCard;

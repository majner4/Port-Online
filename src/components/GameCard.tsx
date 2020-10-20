import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
  const { data } = props;
  return (
    <Card className={classes.root}>
        <CardActionArea>
          {/* <CardMedia
            className={classes.media}
            image={props.cardName === "zvysovac" ? Zvysovac : Palic}
            title="Contemplative Reptile"
          /> */}
          <CardContent>
            <div className="price-box">
              <div className="price-box__content">
                <label className="price-box__label">{data.price}</label>
                <MonetizationOnOutlinedIcon style={{ color: "#dc004e", fontSize: "36px" }} />
              </div>
            </div>
            <Typography gutterBottom variant="h5" component="h2">
              {data.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Díky této kartě můžete brát o jednu kartu více
            </Typography>
            <div className="sword-box">
              <div className="sword-box__content">
                <label className="sword-box__label">{data.sword}</label>
                <BookmarkBorderOutlinedIcon style={{ color: "#16409f", fontSize: "50px" }} />
              </div>
            </div>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
      </Card>
  );
}

export default GameCard;

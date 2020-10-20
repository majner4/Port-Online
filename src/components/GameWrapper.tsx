import React from 'react';
import Grid from '@material-ui/core/Grid';
import { cards } from '../constants/constants';
import GameCard from './GameCard';

const GameWrapper = ():JSX.Element => {
  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {cards.map((card) => (
              <Grid item>
                <GameCard data={card}/>
              </Grid>
            ))}
          </Grid>
        </Grid>
    </Grid>
  );
}

export default GameWrapper;

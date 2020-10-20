import React from 'react';
import Grid from '@material-ui/core/Grid';
import GameCard from './GameCard';

const GameWrapper = ():JSX.Element => {
  return (
    <Grid container spacing={3}>
        <Grid item xs={6}>
            <GameCard cardName="zvysovac"/>
        </Grid>
        <Grid item xs={6}>
            <GameCard cardName="palic"/>
        </Grid>
    </Grid>
  );
}

export default GameWrapper;

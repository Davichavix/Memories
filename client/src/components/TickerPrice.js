import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper} from '@material-ui/core'
import useStyles from './styles';
import { createPost, updatePost, getCurrentPrice } from '../actions/posts'
import {useDispatch, useSelector} from 'react-redux'

const TickerPrice = () => {
  const [tickerName, setTickerName] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }

  const clear = () => {
    setTickerName("");
  };

  const getCoinPrice = (ticker) => {
    console.log(ticker)
    const price = getCurrentPrice(ticker);
    console.log(price)
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <div className={classes.ticker}>
        <TextField name="ticker" variant="outlined" label="Ticker" value={tickerName} onChange={(e) => setTickerName(e.target.value)}/>
        <Typography className={classes.appBar} variant="h5">${currentPrice}</Typography>
        </div>
        <Button className={classes.buttonSubmit} variant="text" color="primary" size="small" type="submit" fullWidth>Get Stock Quote</Button>
        <Button variant="text" color="secondary" size="small" onClick={clear} fullWidth>Clear Ticker</Button>
      </form>
    </Paper>
  )
}

export default TickerPrice;
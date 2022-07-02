import React from "react";
import { useDispatch } from 'react-redux';


import useStyles from './styles';

const Post = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <h1>POST</h1>
  )
}

export default Post;
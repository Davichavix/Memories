import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core'
import Delete from '@material-ui/icons/Delete';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import moment from 'moment'

import useStyles from './styles';

const Post = ( {post}) => {
  const classes = useStyles();
  return (
   <Card className={classes.card}>
     <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
     <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
     </div>
     <div className={classes.overlay2}>
      <Button style={{color: 'white'}} size="small" onClick={() => {}}>
        <MoreHoriz fontSize="default" />
      </Button>
     </div>
     <div className={classes.details}>
      <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
     </div>
     <Typography variant="body2" color="textSecondary">{post.message}</Typography>
   </Card>
  );
}

export default Post;
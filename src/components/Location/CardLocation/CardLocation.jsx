import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function CardLocation({ name, type, dimension, residents }) {
  return (
    <Card sx={{ maxWidth: 345 , 
      backgroundColor: '#161616', 
      color: '#FFFFFF',
      borderRadius: 2,
      boxShadow: '24px 9px 9px rgba(6, 6, 6, 24)',
      }}>
      <CardActionArea>
  
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" >
          type: {type}
          </Typography>
          <Typography variant="body2" >
          dimension: {dimension}
          </Typography>
          <Typography variant="body2" >
          residents: {residents}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardLocation;

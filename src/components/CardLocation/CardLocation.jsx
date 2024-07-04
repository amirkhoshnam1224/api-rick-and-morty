import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function CardLocation({ name, type, dimension, residents }) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
  
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          type: {type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          dimension: {dimension}
          </Typography>
          <Typography variant="body2" color="text.secondary">
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

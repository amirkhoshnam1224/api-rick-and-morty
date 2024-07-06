import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function CardEpisode({ name, air_date, episode, characters}) {
  return (
    <Card sx={{ maxWidth: 245 }}>
      <CardActionArea>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          air_date:{air_date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          episode: {episode}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          characters: {characters}
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

export default CardEpisode;

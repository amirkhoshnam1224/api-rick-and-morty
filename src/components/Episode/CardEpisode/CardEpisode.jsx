import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function CardEpisode({ name, air_date, episode, characters}) {
  return (
    <Card sx={{ maxWidth: 245 , 
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
          <Typography gutterBottom variant="h5" component="div">
          air_date:{air_date}
          </Typography>
          <Typography variant="body2" >
          episode: {episode}
          </Typography>
          <Typography variant="body2">
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

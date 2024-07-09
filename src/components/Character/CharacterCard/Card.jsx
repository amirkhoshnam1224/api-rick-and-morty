import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function CustomCard({ name, gender, image, status, species}) {
  return (
    <Card sx={{ 
      maxWidth: 345, 
      backgroundColor: '#161616', 
      color: '#FFFFFF',
      borderRadius: 2,
      boxShadow: '24px 9px 9px rgba(6, 6, 6, 24)', // تنظیم دقیق boxShadow
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="color: '#FFFFFF' ">
            Gender: {gender}
          </Typography>
          <Typography variant="body2" color="color: '#FFFFFF' ">
            status: {status}
          </Typography>
          <Typography variant="body2" color="color: '#FFFFFF' ">
            species: {species}
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

export default CustomCard;

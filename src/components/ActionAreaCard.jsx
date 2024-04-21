import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './ActionAreaCard.css'; // Import CSS file for styling

export default function ActionAreaCard({ title, description, imageUrl, maxWidth, maxHeight, margin }) {
  return (
    <Card
      sx={{
        maxWidth: maxWidth || 345,
        maxHeight: maxHeight || '600px',
        margin: margin || 5,
        fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
        display: 'flex',
      }}
      className="action-area-card" // Apply CSS class for styling
    >
      <CardActionArea className="card-action-area">
        <CardMedia
          component="img"
          image={imageUrl || "src/assets/placeholder-image.png"}
          alt={title || "Image"}
          className="card-media"
        />
        <CardContent className="card-content">
          <Typography gutterBottom variant="h5" component="div" className="card-title">
            {title || "Title"} 
          </Typography>
          <Typography variant="body2" color="text.secondary" className="card-description">
            {description || "Description"} 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

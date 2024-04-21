import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Person({ title, description, width, height, margin }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', margin: margin,marginLeft:'40px',marginRight:'40px' }}>
      <Avatar
        alt="Remy Sharp"
        src="https://avatar.iran.liara.run/public/boy?username=Ash"
        sx={{ width: 200, height: 200, objectFit: 'contain' }}
      />
      <Typography variant="h5" component="div" sx={{ marginTop: 2 }}>
        {title || "Default Title"}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ marginTop: 1, textAlign: 'center' }}>
        {description}
      </Typography>
    </div>
  );
}

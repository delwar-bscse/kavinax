import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';


export default function Star2({value}) {

  return (
    <Box sx={{ width: 200, display: 'flex', alignItems: 'right' }} className="flex justify-start items-center">
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      </Box>
  );
}

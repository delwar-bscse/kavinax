import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';


export default function TextRating({value}) {

  return (
    <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }} className="flex justify-end items-end pr-5">
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

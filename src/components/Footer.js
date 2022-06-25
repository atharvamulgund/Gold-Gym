import React from 'react';
import { Box, Stack, Typography } from '@mui/material';


const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤️ by <a href="https://atharvamulgund.netlify.app/" target='_blank' style={{color:'#ff2625' , textDecoration:'none'}}>Atharva Mulgund</a></Typography>
  </Box>
);

export default Footer;
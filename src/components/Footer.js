import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import Logo from '../assets/images/Logo.png'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap='10px' alignItems='center' px='40px' pt='10px'>
        <img src={Logo} alt='logo' width='auto' height = '60px' />
        <Typography variant='h5' pb={'40px'} textAlign={'center'} color={'#ff2625'} fontWeight={'600'}>
          STAYFIT CLUB
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
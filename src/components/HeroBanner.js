import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'

import HeroBannerImage from '../assets/images/banner.png'
import { Padding } from '@mui/icons-material'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: {lg: '212px', xs: '70px'},
        ml: {sm: '50px'}
    }} position='relative' p='20'>
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
            FITNESS CLUB
        </Typography>
        <Typography fontWeight='700' fontSize='40px' mb='30px' mt='30px'>
            Sweat, Smile <br /> and REPEAT
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb={4}>
            Checkout the most effective exercises
        </Typography>
        <Button variant='contained' color='error' href='#exercises'
            sx={{ backgroundColor: "#FF2625", padding: '10px'
            }}
            mb={4}
        >
            Explore Exercises</Button>
        <Typography
            fontWeight='600'
            color="#FF2625"
            sx={{
                opacity: '0.1',
                display: { lg: 'block', xs: 'none'}
            }}
            fontSize='200px' mt={6}>
            EXERCISES 
        </Typography>
        <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner
import React from 'react'
import { Typography, Stack, Button } from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Detail = ({ exerciseDetail }) => {
  const {bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    }
  ]
  
  return (
    <Stack gap = "60px" sx = {{flexDirection: 'row', p: '20px', alignItems: 'center'}}>
      <img src= {gifUrl} alt={name} Loading='lazy' className='detail-image' width={'1000px'} height={'auto'}/>
      <Stack sx={{ gap: { lg:'35px', xs: '20px'}}}>
        <Typography variant='h3' textTransform='capitalize' fontWeight='700'>
          {name}
        </Typography>
        <Typography variant='h6'>
          Exercises keep you strong. <Typography variant='h6' textTransform='capitalize' fontWeight='700' display='inline'>{name}</Typography>  is one of the best exercises to 
          target your <Typography variant='h6' textTransform='capitalize' fontWeight='700' display='inline'>{target}</Typography>. It will help you improve your mood and gain energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction = "row" gap ='24px' alignItems='center'>
            <Button sx={{ background: '#fff2db', borderRadius: '50%', width: '90px', height:'90px'}}>
              <img src={item.icon} alt={bodyPart} />
            </Button>
            <Typography variant='h5' textTransform='capitalize' fontWeight={'500'}>
              {item.name}
            </Typography>

          </Stack>

        ))}
      </Stack>
    </Stack>
  )
}

export default Detail
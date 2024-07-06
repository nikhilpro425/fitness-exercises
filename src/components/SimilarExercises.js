import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx = {{ mt: {lg:'100px', xs:'0'}}}>
      <Typography variant='h4' fontWeight={'600'} mb={'40px'}>Exercises that Target the Same Muscle Group</Typography>
      <Stack direction='row' sx={{p:'2', position:'relative'}} mb={'60px'}>
        {targetMuscleExercises.length ? 
          <HorizontalScrollbar data={targetMuscleExercises}/>
          : <Loader/>}
      </Stack>
      
      <Typography variant='h4' fontWeight={'600'} mb={'40px'}>Exercises that use the same Equipment</Typography>
      <Stack direction='row' sx={{p:'2', position:'relative'}} mb={'60px'}>
        {targetMuscleExercises.length ? 
          <HorizontalScrollbar data={equipmentExercises}/>
          : <Loader/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises
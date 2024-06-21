import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography, Button, TextField } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setsearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])
  
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

      setBodyParts(['all', ...bodyPartsData])
    }
    
    fetchExercisesData()
  }, [])
  

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData( 'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions)

      const searchedExercises = exercisesData.fitler(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      )

      setsearch('')
      setExercises(searchedExercises)
    }
  }

  return (
    <Stack alignItems='center' mt='20px' justifyContent='center' p='20px'>
      
      <Typography fontSize='40px' fontWeight='700' align='center' mb='50px'>
        Awesome Exercises You <br /> Should Know
      </Typography>
      
      <Box position='relative' mb='72px'>
        
        <TextField              // INPUT
          sx = {{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px'},
            width: { lg: '1000px', xs: '350px'} ,
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
          height = '76px'
          value = {search}
          onChange={(e) => setsearch(e.target.value.toLowerCase())}
          placeholder='Search Exercises'
          type='text'
        />

        <Button className='search-btn'      // SEARCH BUTTON
         sx={{
          bgcolor: '#FF2625' ,
          color: "#fff",
          textTransform: 'none',
          width: { lg: '175px', xs: '80px'},
          fontSize: { lg: '20px', xs: '14px'},
          height: '56px',
          position: 'absolute',
          right: '0'    // Due to absolute position must add this to keep it centered
         }}
         onClick={handleSearch}
         >
          Search
        </Button>

      </Box>

      <Box sx={{ position: 'relative', width: '100%', p: '20px'}}>
         <HorizontalScrollbar data={bodyParts} bodyPart ={bodyPart} setBodyPart={setBodyPart} />
      </Box>   
    </Stack> 
  )
}

export default SearchExercises
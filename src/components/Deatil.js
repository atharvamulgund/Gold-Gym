import React from 'react'
import {Box, Button, Stack, Typography} from '@mui/material'
import { textTransform } from '@mui/system'
import BodyPart from './BodyPart'


const Detail = ({ExerciseDetails}) => {
    // const {bodypart, gifurl, name, target, equiment}= ExerciseDetails
    const extraDetail = [
        {
            icon: '../../assets/icons/body-part.png',
            name: ExerciseDetails.bodyPart
         },
         {
            icon: '../../assets/icons/target.png',
            name: ExerciseDetails.target
         },
         {
            icon: '../../assets/icons/equipment.png',
            name: ExerciseDetails.equipment
         },
    ]

    console.log(extraDetail)
  return (
    <Stack gap="60px" sx={{flexDirection:{lg:'row' }, p:"20px", alignItems:"center"}}>
        <img src={ExerciseDetails.gifUrl} alt={ExerciseDetails.name} loading='lazy' className='detail-image'/>
        <Stack sx={{gap:{lg:'36px' , xs:'20px'}}}>
            <Typography variant='h3' textTransform='capitalize'>
                {ExerciseDetails.name}
            </Typography>
            <Typography variant='h6'>
                Exercises keep you strong. <span style={{textTransform:'capitalize', fontWeight:'700'}}>{ExerciseDetails.name}</span> is one of the best
                exercises to target your <span style={{textTransform:'capitalize', fontWeight:'700'}}>{ExerciseDetails.target}</span>. It will
                help you improve your
                mood and gain energy.
            </Typography>
            {extraDetail.map((item)=>(
                <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
                    <Button sx={{background:'#fff2db',borderRadius:'50%', width:'100px', height:'100px' }}>
                        <img src={item.icon} alt={item.bodyPart} style={{width:'50px', height:'50px'}}/>
                    </Button>
                    <Typography variant='h5' textTransform="capitalize">{item.name}</Typography>
                </Stack>
            ))}
        </Stack>
    </Stack>
  )
}

export default Detail
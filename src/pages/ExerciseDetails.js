import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import ExerciseVideos from '../components/ExerciseVideos';
import Detail from '../components/Deatil';
import SimilarExercises from '../components/SimilarExercise';

const ExerciseDetails = () => {

  const [exerciseDetail, setexerciseDetail] = useState([])
  const [exerciseVideos, setexerciseVideos] = useState([])
  const {id} = useParams()

  useEffect(()=>{
    const fetchExercisesData = async () =>{
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com"
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions )
      setexerciseDetail(exerciseDetailData)
      console.log(exerciseDetailData)

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions )
      setexerciseVideos(exerciseVideosData)
    }
    fetchExercisesData()
    console.log(exerciseVideos)
  },[id])
  return (
   <Box>
    <Detail ExerciseDetails={exerciseDetail}/>
    {/* <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
    <SimilarExercises/> */}
   </Box>
  )
}

export default ExerciseDetails
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios';
function Add() {
    const {state}=useLocation()
    const navigate=useNavigate()
    
    const [course,setCourse]=useState({
        name:'',
        duration:'',
        rating:''
    })
    useEffect(()=>{if(state)setCourse(state)},[state])
    const hanndleChange=(e)=>{
        setCourse({...course,[e.target.name]:e.target.value});
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            if(course._id){
              await  axios.put(`http://localhost:3000/courses/update/${course._id}`,course)
              console.log("successfull")
            }else{
                await  axios.post(`http://localhost:3000/courses/add`,course)
              console.log("successfull")

            }
            navigate('/');
        }
        catch(err){
            console.log(err)
        }
        
    }

  return (
    <>
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
        onSubmit={handleSubmit}
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" name='name'value={course.name} onChange={hanndleChange} label="Course Name" variant="outlined" required />
      <TextField id="filled-basic"  name='duration' value={course.duration} onChange={hanndleChange}label="Duration" variant="filled" required/>
      <TextField id="standard-basic"  name='rating' value={course.rating} onChange={hanndleChange} label="Rating(0-5)" variant="standard" required />
      <Button variant="contained" type='submit'>Submit</Button>
    </Box>
      </Container>
    </React.Fragment>
    </>
  )
}

export default Add

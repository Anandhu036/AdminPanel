import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router';
function Dashboard() {
  const navigate=useNavigate();
  const [courses,setCourses]=useState([]);
  const fetch=async()=>{
    try{
      const res=await axios.get("http://localhost:3000/courses")
      setCourses(res.data);
    }catch(err){
      console.log(err)
    }
  }
  const handleDelete=async(id)=>{
    if(!window.confirm("Are u sure"))return;
    try{
      await axios.delete(`http://localhost:3000/courses/delete/${id}`)
      setCourses(courses.filter((course) => course._id !== id));
      console.log("Deleted successfully");
    }catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{fetch()},[]);

  return (
    <>
    <Grid container spacing={3} padding={3}>
    {courses && courses.map((course) => (
        
        <Grid item xs={12} sm={6} md={4} key={course._id}>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {course.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Duration:{course.duration}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          ID:{course._id}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Rating:{course.rating}
        </Typography>
      </CardContent>
      <CardActions>
                    <Button size="small" onClick={() => navigate("/add", { state: course })}>Edit</Button>
                    <Button size="small" color="error" onClick={() => handleDelete(course._id)}>Delete</Button>
                </CardActions>
            </Card>
        </Grid>
    ))}
</Grid>
     
    </>
  )
}

export default Dashboard

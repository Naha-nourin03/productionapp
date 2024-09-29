import { Grid } from '@mui/material'
import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const Home = () => {
 var[user,setuser] =useState([])
  axios.get("https://fakestoreapi.com/products")
      .then((prod) =>{
          console.log(prod.data)
          setuser(prod.data)
      })
  return (
    <div>
     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {user.map((val)=>{
         return(
        <Grid item xs= {10} sm={8} md={4}> 
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={val.image}   
        title="Products"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {val.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {val.description}
        </Typography>
        <Typography>Category:{val.category}</Typography>
        <Typography>Rating:{val.rating.rate}</Typography>
        <Typography>Count:{val.rating.count}</Typography>

      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
       </Card>
        </Grid>
    )})
}
  </Grid>

    </div>
  )
}

export default Home
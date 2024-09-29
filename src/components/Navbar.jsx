import { AppBar, Button, TextField, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar sx={{ backgroundColor: 'rgb(174, 198, 220)' }}>
            <Toolbar>
            <Typography variant='h4'>ProductApp</Typography>
            <Link to ='/h'>
            <Button variant='container'>Home</Button>
            </Link>
            <Link to ='/addprd'>
            <Button variant='container'>AddProduct</Button>
            </Link>
            </Toolbar>
         </AppBar>
  

    </div>
  )
}

export default Navbar
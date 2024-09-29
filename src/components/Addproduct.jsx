import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Addproduct = () => {
  return (
    <div><br /><br /><br />
<Typography variant='h2'>Product App </Typography><br /> <br /><br /><br />
<TextField label='Title of product' variant='outlined' /> <br /><br />
<TextField label='Price' variant='outlined' /> <br /><br />
<TextField label='Category' variant='outlined' /> <br /><br />
<TextField label='Image of product' variant='outlined'/> <br /><br />
<Button variant='outlined'>Submit</Button>
    </div>
  )
}

export default Addproduct
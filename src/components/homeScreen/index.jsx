import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function HomeScreen () {
  return (
    <div className='container'>
      <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Create Crossword Puzzle
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Create a crossword puzzle for your scenarios
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Create
        </Button>
        <Button size="small" color="primary">
          Learn more
        </Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default HomeScreen

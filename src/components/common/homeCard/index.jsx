import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import {Link} from 'react-router-dom';

function HomeCard({ title, description, link }) {
  return (
    <div className="container">
      <Card sx={{ maxWidth: 250 }}>
        <CardActionArea href="/create">
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
            <Link href='/create'>Create</Link>
          </Button>
          <Button size="small" color="primary">
            Learn more
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default HomeCard;

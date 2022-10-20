import React from "react";
import Typography from "@mui/material/Typography";

function LearnMore() {
  return (
    <div className="container" sx={{ ml: 3 }}>
      <Typography variant="h4" component="h4" sx={{ mb: 3 }}>
        Learn More
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ mb: 2 }}>
        Funzy Crossword Puzzle Generator is a crossword puzzle generator. You
        can input a bunch of words by clicking on create and it will generate a
        crossword puzzle for you.
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ mb: 2 }}>
        Enjoy the game !
      </Typography>
      <Typography variant="caption" display="block" gutterBottom sx={{ mb: 2 }}>
        If you want to contibute to this project. &nbsp;
        <a href="https://github.com/mksOrg-open/funzy-crossword-puzzle-generator">
          Click here.
        </a>
      </Typography>
    </div>
  );
}

export default LearnMore;

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
function Image(props) {
  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{ margin: "10px", backgroundColor: "black", color: "white" }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.ele.userImageURL}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.ele.tags}
          </Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
export default Image;

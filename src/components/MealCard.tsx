import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import { Meal } from "../services/axiosClient";

interface Props {
  meal: Meal;
}

export default function MealCard({ meal }: Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={"/detail/" + meal.idMeal}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={meal.strMealThumb}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {meal.strMeal}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}

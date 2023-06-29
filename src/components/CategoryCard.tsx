import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Category } from "../services/axiosClient";
import { Link } from "react-router-dom";

interface Props {
  category: Category;
}

export default function CategoryCard({ category }: Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={"/category/" + category.strCategory}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={category.strCategoryThumb}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {category.strCategory}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {category.strCategoryDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}

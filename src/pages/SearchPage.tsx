import {
  Box,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Meal, getMealsByName } from "../services/axiosClient";
import MealCard from "../components/MealCard";
import { red } from "@mui/material/colors";
import { useSearchContext } from "../context/SearchContext";

const warningColor = red[400];

const SearchPage = () => {
  const [isLoading, setIsloading] = useState(false);
  const [meals, setMeals] = useState<Meal[]>([]);
  const { text, setSearchText } = useSearchContext();

  useEffect(() => {
    getMealsByName(text).then((res) => {
      setMeals(res.data.meals);
      setIsloading(false);
    });
  }, [text]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <Box paddingTop={2} paddingX={{ xs: 1, sm: 2, md: 5, lg: 10 }}>
        <TextField
          id="outlined-basic"
          label="Search By Name..."
          variant="outlined"
          fullWidth
          onChange={handleChange}
          value={text}
        />
      </Box>
      {isLoading ? (
        <Box textAlign={"center"} marginTop={10}>
          <CircularProgress color="secondary" />
        </Box>
      ) : !meals ? (
        <Box textAlign={"center"} marginTop={10}>
          <Typography color={warningColor}>No Results Found.</Typography>
        </Box>
      ) : (
        <Grid container paddingTop={2}>
          {meals?.map((meal) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              style={{ display: "flex", justifyContent: "center" }}
              key={meal.idMeal}
            >
              <MealCard meal={meal} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default SearchPage;

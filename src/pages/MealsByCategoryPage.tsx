import { Grid } from "@mui/material";
import { Meal, getMealsByCategory } from "../services/axiosClient";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MealCard from "../components/MealCard";
import CardSkeletons from "../components/CardSkeletons";
import useMealsByCategory from "../hooks/useMealsByCategory";

const MealsByCategoryPage = () => {
  let { id } = useParams();
  const { meals, isLoading } = useMealsByCategory(id!);

  if (isLoading) return <CardSkeletons />;
  return (
    <>
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
    </>
  );
};

export default MealsByCategoryPage;

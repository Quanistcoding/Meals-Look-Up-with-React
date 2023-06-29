import React, { useEffect, useState } from "react";
import { Meal, getMealsById } from "../services/axiosClient";
import { useParams } from "react-router-dom";
import { Box, CircularProgress, Typography } from "@mui/material";
import useMeal from "../hooks/useMeal";

const ingredientsIds: number[] = [];

for (let i = 1; i <= 20; i++) ingredientsIds.push(i);

const MealPage = () => {
  let { id } = useParams();
  const { meal, isLoading } = useMeal(id!);

  if (isLoading)
    return (
      <Box textAlign={"center"} marginTop={10}>
        <CircularProgress color="secondary" />
      </Box>
    );

  return (
    <>
      {meal?.strMealThumb && (
        <Box
          component="img"
          alt={meal?.strMeal}
          src={meal?.strMealThumb}
          width={"100%"}
          style={{ objectFit: "cover" }}
          height={{
            xs: 100,
            sm: 200,
            md: 300,
          }}
        />
      )}

      <Box
        paddingX={{
          xs: 1,
          sm: 5,
          md: 10,
        }}
      >
        <Typography variant="h5" component="h1" textAlign={"center"}>
          {meal?.strCategory}
        </Typography>
        <Typography variant="h6" component="h1" textAlign={"center"}>
          {meal?.strMeal}
        </Typography>
        <hr></hr>
        <Typography component="p">{meal?.strInstructions}</Typography>
        <Box>
          <Typography variant="h5" component="h1" textAlign={"center"}>
            Ingredients:
            {meal?.strIngredient1}
          </Typography>
          <ul>
            {ingredientsIds.map((id) => {
              const iid = "strIngredient" + id;
              if (meal && (meal as any)[iid] !== "")
                return <li key={iid}>{(meal as any)[iid]}</li>;
            })}
          </ul>
        </Box>
      </Box>
    </>
  );
};

export default MealPage;

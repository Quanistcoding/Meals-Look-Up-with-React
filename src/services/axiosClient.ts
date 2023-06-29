import axios from "axios";

const instance = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1',
  });


export interface Category {
  idCategory:string,
  strCategory:string,
  strCategoryThumb:string,
  strCategoryDescription:string,
}

export const getCategories = () => {
  return instance.get<{categories:Category[]}>("/categories.php");
}

export interface Meal {
  idMeal:string,
  strMeal:string,
  strMealThumb:string,
  strCategory:string,
  strInstructions:string,
  strIngredient1: string,
  strIngredient2: string,
  strIngredient3: string,
  strIngredient4: string,
  strIngredient5: string,
  strIngredient6: string,
  strIngredient7: string
  strIngredient8: string,
  strIngredient9: string,
  strIngredient10: string,
  strIngredient11: string,
  strIngredient12: string,
  strIngredient13: string,
  strIngredient14: string,
  strIngredient15: string,
  strIngredient16: string,
  strIngredient17: string,
  strIngredient18: string,
  strIngredient19: string,
  strIngredient20: string,
}

export const getMealsByCategory = (category:string) => {
  return instance.get<{meals:Meal[]}>("filter.php?c=" + category);
}



export const getMealsById = (id:string) => {
  return instance.get<{meals:Meal[]}>("lookup.php?i=" + id);
}








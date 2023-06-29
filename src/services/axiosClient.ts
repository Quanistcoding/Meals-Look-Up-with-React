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

















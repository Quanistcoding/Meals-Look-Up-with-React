import { useQuery } from "react-query";
import { getMealsByCategory } from "../services/axiosClient";


const useMealsByCategory = (id:string) => {
    const { data, isLoading } = useQuery("mealsByCategories/" + id, async () =>  getMealsByCategory(id));

    return { meals:data?.data.meals!, isLoading };
}

export default useMealsByCategory;
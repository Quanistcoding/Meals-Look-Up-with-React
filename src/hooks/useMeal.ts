import { useQuery } from "react-query";
import { getMealsById } from "../services/axiosClient";


const useMeal = (id:string) => {
    const { data, isLoading } = useQuery("meal/" + id, async () => getMealsById(id));

    return { meal:data?.data.meals[0]!, isLoading };
}

export default useMeal;
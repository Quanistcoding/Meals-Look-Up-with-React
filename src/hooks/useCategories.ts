import { useQuery } from "react-query";
import { getCategories } from "../services/axiosClient";


const useCategories = () => {
    const { data, isLoading } = useQuery("categories", getCategories);

    return { categories:data?.data.categories!, isLoading };
}

export default useCategories;
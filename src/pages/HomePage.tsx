import { useEffect, useState } from "react";
import { getCategories, Category } from "../services/axiosClient";
import CategoryCard from "../components/CategoryCard";
import { Grid } from "@mui/material";

const HomePage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res.data.categories);
      console.log(res.data.categories);
    });
  }, []);
  return (
    <>
      <Grid container>
        {categories.map((category) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <CategoryCard category={category} key={category.idCategory} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default HomePage;

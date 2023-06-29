import CategoryCard from "../components/CategoryCard";
import { Grid } from "@mui/material";
import CardSkeletons from "../components/CardSkeletons";
import useCategories from "../hooks/useCategories";

const HomePage = () => {
  const { categories, isLoading } = useCategories();
  if (isLoading) return <CardSkeletons />;

  return (
    <>
      <Grid container paddingTop={2}>
        {categories?.map((category) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{ display: "flex", justifyContent: "center" }}
            key={category.idCategory}
          >
            <CategoryCard category={category} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default HomePage;

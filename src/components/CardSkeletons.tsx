import { Box, Grid, Skeleton } from "@mui/material";

const skeketonArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const CardSkeletons = () => {
  return (
    <>
      <>
        <Grid container paddingTop={2}>
          {skeketonArray.map((id) => (
            <Grid
              key={id}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 10,
              }}
            >
              <Box>
                <Skeleton
                  variant="rectangular"
                  width={300}
                  height={150}
                  sx={{ marginBottom: 1 }}
                ></Skeleton>
                <Skeleton
                  variant="rectangular"
                  width={300}
                  height={20}
                  sx={{ marginBottom: 1 }}
                />
                <Skeleton variant="rectangular" width={300} height={100} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </>
    </>
  );
};

export default CardSkeletons;

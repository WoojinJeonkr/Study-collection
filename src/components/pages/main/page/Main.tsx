import { Grid } from "@mui/material";
import {
  MainBoardPage,
  MainFaqPage,
  MainNoticePage,
  MainQnaPage,
} from "components";

export default function Main() {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1 }}>
      <Grid item xs={6}>
        <MainBoardPage />
      </Grid>
      <Grid item xs={6}>
        <MainNoticePage />
      </Grid>
      <Grid item xs={6}>
        <MainFaqPage />
      </Grid>
      <Grid item xs={6}>
        <MainQnaPage />
      </Grid>
    </Grid>
  );
}

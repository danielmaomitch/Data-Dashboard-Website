import React from "react";
import Grid from "@mui/material/Grid2";
import DataCard from "../DataCard";
import scss from "./DataRibbon.module.scss";

const DataRibbon = () => {
  return (
    <Grid
      container
      gap={2}
      sx={{ display: "grid", gridTemplateColumns: "repeat(0, 1fr)" }}
      className={scss.dataRibbon}
    >
      <Grid>
        <DataCard
          title={"Total Sales"}
          value={"342"}
          description={
            "The totals of all DataTwiggs products in the current financial year"
          }
        />
      </Grid>
      <Grid>
        <DataCard
          title={"Total Revenue"}
          value={"$21.678 M"}
          description={
            "The total revenue for DataTwiggs from the current financial year"
          }
        />
      </Grid>
      <Grid>
        <DataCard
          title={"Avg. Order Value"}
          value={"$42.02"}
          description={
            "The average price of all DataTwiggs orders in the current financial year"
          }
        />
      </Grid>
      <Grid>
        <DataCard
          title={"Conversion Rate"}
          value={"0.721%"}
          description={"How many pitches become sales"}
        />
      </Grid>
    </Grid>
  );
};

export default DataRibbon;

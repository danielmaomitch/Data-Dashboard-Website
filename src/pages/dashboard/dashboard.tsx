import { Box, Grid2, Paper } from "@mui/material";
import React from "react";
import scss from "./Dashboard.module.scss";
import DataRibbon from "@/components/Dashboard/DataRibbon";

const Dashboard = () => {
  return (
    <Box>
      {/* data ribbon */}
      <DataRibbon />
      {/* transactionsPerDay */}
      {/* Transaction doughnut charts, bottom most row */}
    </Box>
  );
};

export default Dashboard;

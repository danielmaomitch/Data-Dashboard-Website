import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import Grid from "@mui/material/Grid2";
import FormControl from "@mui/material/FormControl";
import { Button, FormControlLabel, FormGroup, Switch } from "@mui/material";

const Settings = () => {
  const [showRevenue, setShowRevenue] = React.useState(true);
  const [showProfit, setShowProfit] = React.useState(true);
  const [showOrders, setShowOrders] = React.useState(true);
  const [showCustomers, setShowCustomers] = React.useState(true);
  //cahnge
  const handleShowRevenueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowRevenue(event.target.checked);
  };
  const handleShowProfitChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowProfit(event.target.checked);
  };
  const handleShowOrdersChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowOrders(event.target.checked);
  };
  const handleShowCustomersChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowCustomers(event.target.checked);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <h1>Settings</h1>
      <Box>
        <Typography variant="h5" gutterBottom>
          Dashboard Features
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <FormControl component="fieldset">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showRevenue}
                        onChange={handleShowRevenueChange}
                      />
                    }
                    label="Revenue"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showProfit}
                        onChange={handleShowProfitChange}
                      />
                    }
                    label="Profit"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showOrders}
                        onChange={handleShowOrdersChange}
                      />
                    }
                    label="Orders"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showCustomers}
                        onChange={handleShowCustomersChange}
                      />
                    }
                    label="Customers"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Button type="submit" variant="contained" color="primary">
                Save Settings
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default Settings;

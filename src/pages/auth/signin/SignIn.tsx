import Login from "@/components/Login";
import Box from "@mui/material/Box";
import { useSession } from "next-auth/react";
import React from "react";

const SignIn = () => {
  const { data: session } = useSession();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>{session ? "Thank you for logging in!" : "Please log in..."}</h2>
      <Login />
    </Box>
  );
};

export default SignIn;

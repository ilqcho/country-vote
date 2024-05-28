import React from "react";
import { Container, Box, AppBar, Toolbar } from "@mui/material";
import type { LayoutProps } from "../types/types";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <AppBar position="static" sx={{backgroundColor: "#F8F8F8", boxShadow: 'none'}}>
        <Toolbar>
          <img src="/logo.svg" alt="Loopstudio logo"/>
        </Toolbar>
      </AppBar>
      <Container
        maxWidth="md"
        sx={{
          "&.MuiContainer-maxWidthMd": {
            maxWidth: "1100px",
          },
          paddingTop: 4,
          paddingBottom: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default Layout;

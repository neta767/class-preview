import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import { Box, Drawer } from "@mui/material";
import { useState } from "react";
import SideBar from "./SideBar";
const theme = createTheme({
  palette: {
    primary: green,
  },
});

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <ThemeProvider theme={theme}>
      <Drawer
        PaperProps={{ style: { width: "30vw" } }}
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <SideBar />
      </Drawer>
      <Box component="main">
        <div className="App" onClick={handleDrawerToggle}></div>
      </Box>
    </ThemeProvider>
  );
}

export default App;

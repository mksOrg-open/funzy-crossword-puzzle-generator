import "./App.css";
import React from "react";
import Index from "./pages";
import Create from "./pages/create";
import LearnMore from "./pages/learnMore";
import Navbar from "./components/common/navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import theme from './components/Theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


function App() {
  return (
      <>
          <ThemeProvider theme={theme}>
              <CssBaseline />
              <Navbar/>
              <Routes>
                  <Route exact path="/" element={<Index />} />
                  <Route path="/create" element={<Create />} />
                  <Route path="/learn-more" element={<LearnMore />} />
              </Routes>
              <Footer/>
          </ThemeProvider>
      </>

  );
}

export default App;

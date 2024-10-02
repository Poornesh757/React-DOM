import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Data from './components/Data';
import { AppBar, Toolbar, Button, Container, Box } from '@mui/material';
import './App.css';

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/data">Data</Button>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="md">
        <Box mt={5}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/data" element={<Data />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
};

export default App;

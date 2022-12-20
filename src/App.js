import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Navbar from './Navbar';
import NotFound from './pages/NotFound';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;

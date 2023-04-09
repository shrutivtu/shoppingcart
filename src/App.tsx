import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Store } from './pages/Store';
import { Navbar } from './components/Navbar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <ShoppingCartProvider>
      <Container className='mb-4'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App;
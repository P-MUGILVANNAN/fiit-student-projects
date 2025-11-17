import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import { CartProvider } from './context/CartContext';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
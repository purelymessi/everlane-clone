import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import ProductGrid from './pages/ProductGrid';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Cart from './pages/Cart';
import PaymentCard from './pages/PaymentCard'; // Импортируйте компонент PaymentCard
import PaymentPaypal from './pages/PaymentPaypal'; // Импортируйте компонент PaymentPaypal
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:category" element={<ProductGrid />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment/card" element={<PaymentCard />} /> {/* Новый маршрут для оплаты картой */}
        <Route path="/payment/paypal" element={<PaymentPaypal />} /> {/* Новый маршрут для PayPal */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

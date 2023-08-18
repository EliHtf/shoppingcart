import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Store from './components/Store';
import ProductContextProvider from './context/ProductContextProvider';
import ProductDetails from './components/ProductDetails';
import CartContextProvider from './context/CartContextProvider';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';
function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/products" element={<Store />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path='/' element={<Navigate to='/products' />} />
          <Route path='/cart' element={<ShopCart />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
}
export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from '../components/Header'
import OrderInfo from '../components/OrderInfo'
import ProductForm from '../components/ProductForm'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const products = [
    { name: 'iphone 14', price: 900 },
    { name: 'Samsung galaxy s23', price: 550 },
    { name: 'Samsung galaxy s24', price: 800 },
  ];

  const [order, setOrder] = useState(null);

  const handleOrder = (product, quantity) => {
    setOrder({ product, quantity });
  };

  return (
    <div>
      <Header image="/kuvat/smartphone-1132677_640.png" title="Welcome to product page!" />
      <ProductForm products={products} onOrder={handleOrder} />
      {order && <OrderInfo product={order.product} quantity={order.quantity} />}
    </div>
  );
}

export default App;
import React, { useState } from 'react';

function ProductForm({ products, onOrder }) {
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleProductChange = (e) => {
    setSelectedProductIndex(e.target.value);
  };

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(Math.max(0, quantity - 1));

  const product = products[selectedProductIndex];

  return (
    <div>
      <select value={selectedProductIndex} onChange={handleProductChange}>
        {products.map((product, index) => (
          <option key={index} value={index}>
            {product.name} - ${product.price}
          </option>
        ))}
      </select>
      <button onClick={decreaseQuantity}>-</button>
      <span>{quantity}</span>
      <button onClick={increaseQuantity}>+</button>
      <button onClick={() => onOrder(product, quantity)}>Order</button>
    </div>
  );
}

export default ProductForm;

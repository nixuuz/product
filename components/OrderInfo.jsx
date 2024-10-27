import React from 'react';

function OrderInfo({ product, quantity }) {
  const totalPrice = product.price * quantity;

  return (
    <div>
      <h2>Order Summary</h2>
      <p>Product: {product.name}</p>
      <p>Price: ${product.price}</p>
      <p>Quantity: {quantity}</p>
      <p>Total: ${totalPrice}</p>
    </div>
  );
}

export default OrderInfo;

import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const product = { id: 1, name: 'Wooden Chair', price: 50, description: 'Comfortable wooden chair.' };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
}

export default ProductDetail;
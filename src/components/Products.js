// components/Products.js
import React, { useEffect, useState } from 'react';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div>
      <h2>dummyAPI  <br></br> (I am using here fakestoreapi as told by maam)</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '10px',
              padding: '20px',
              gap: '100px',
              marginTop : '2rem',
              width: '250px',
            }}
          >
            <img src={product.image} alt={product.title} style={{ height: '100px', objectFit: 'contain' }} />
            <h4>{product.title.slice(0, 40)}...</h4>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

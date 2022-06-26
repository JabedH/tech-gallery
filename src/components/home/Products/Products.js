import React, { useEffect, useState } from "react";

const Products = () => {
  const [useProduct, setProduct] = useState([]);
  useEffect(() => {
    fetch("Items.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  });
  return (
    <div>
      {useProduct.map((product) => (
        <h1>{product.name}</h1>
      ))}
    </div>
  );
};

export default Products;

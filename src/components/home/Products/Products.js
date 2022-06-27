import React, { useEffect, useState,  } from "react";

const Products = () => {
  const [useProduct, setProduct] = useState([]);
  useEffect(() => {
    fetch("Items.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  });
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
      {useProduct.map((product) => (
        <div className="">
          <div class="card w-96 h-auto lg:w-auto bg-base-100 shadow-xl">
            <figure>
              <img className="h-40" src={product.img} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{product.name}</h2>
              <p>{product.info}</p>
              <div className="grid grid-cols-2 justify-items-start">
                <p>
                  {" "}
                  <span className="font-bold">Brand Name:</span> {"Intel"}
                </p>
                <p>
                  <span className="font-bold">RAM:</span>{" "}
                  {product.ram ? product.ram : "16GB"}
                </p>
                <p>
                  {" "}
                  <span className="font-bold">Internal Storage:</span>{" "}
                  {product.store ? product.store : "512GB"}
                </p>
                <p>
                  {" "}
                  <span className="font-bold">Screen Size:</span>{" "}
                  {product.size ? product.size : "1280x800"}
                </p>
              </div>

              <div class="card-actions justify-center">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

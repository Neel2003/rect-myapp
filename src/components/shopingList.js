import Product from "./product";
import React from "react";

const ShopingList = () => {
  const products = [
    {
      name: "Iphone13",
      imgUrl:
        "https://images.unsplash.com/photo-1695048065127-fbee942eed2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGlwaG9uZSUyMDE1fGVufDB8fDB8fHww",
      price: 150,
    },
    {
      name: "Iphone14",
      imgUrl:
        "https://images.unsplash.com/photo-1695048065127-fbee942eed2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGlwaG9uZSUyMDE1fGVufDB8fDB8fHww",
      price: 150,
    },
    {
      name: "Iphone15",
      imgUrl:
        "https://images.unsplash.com/photo-1695048065127-fbee942eed2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGlwaG9uZSUyMDE1fGVufDB8fDB8fHww",
      price: 150,
    },
  ];

  return (
    <div>
        {products.map((product) => {
          return (
              <Product
                name={product.name}
                imgUrl={product.imgUrl}
                price={product.price}
              ></Product>
          );
        })}
    </div>
  );
};

export default ShopingList;

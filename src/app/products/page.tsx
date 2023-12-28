import Link from "next/link";
import React from "react";

const ProductsList = () => {
  return (
    <>
      <h1>Products</h1>
      <Link href="/products/1">product 1</Link>
      <Link href="/products/2">product 2</Link>
      <Link href="/products/3">product 3</Link>
    </>
  );
};

export default ProductsList;

import Link from "next/link";
import React from "react";

const ProductsList = () => {
  return (
    <>
      <h1>Products</h1>
      <div className="*:border *:bg-blue-500 *:px-3 *:py-1 *:rounded-md *:m-2">
        <Link href="/products/1">product 1</Link>
        <Link href="/products/2">product 2</Link>
        <Link href="/products/3">product 3</Link>
      </div>
    </>
  );
};

export default ProductsList;

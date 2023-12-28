"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

type paramsType = {
  params: params;
};

type params = {
  productId: string;
};
const ProductDetails = ({ params }: paramsType) => {
  const router = useRouter();

  return (
    <>
      <h1>Product Number {params.productId}</h1>
      <Link href="products" onClick={() => router.back()}>
        Back to product list
      </Link>
    </>
  );
};

export default ProductDetails;

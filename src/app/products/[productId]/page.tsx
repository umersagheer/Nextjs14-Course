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
      <h1 className="border bg-blue-500 px-3 py-1 rounded-md m-2 w-fit">
        Product Number {params.productId}
      </h1>
      <Link
        href="products"
        onClick={() => router.back()}
        className="border bg-blue-500 px-3 py-1 rounded-md m-2 hover:bg-blue-400/80"
      >
        Back to product list
      </Link>
      <Link
        href={`${params.productId}/reviews`}
        className="border bg-blue-500 px-3 py-1 rounded-md m-2 hover:bg-blue-400/80"
      >
        Reviews about this product
      </Link>
    </>
  );
};

export default ProductDetails;

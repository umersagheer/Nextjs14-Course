import Button from "@/components/Button";
import Link from "next/link";
import React from "react";

const ProductReview = ({ params }: { params: { productId: string } }) => {
  return (
    <>
      <h1>Reviews of product number {params.productId}</h1>
      <div className="*:border *:bg-blue-500 *:px-3 *:py-1 *:rounded-md *:m-2">
        <Link href={`/products/${params.productId}/reviews/1`}>Review 1</Link>
        <Link href={`/products/${params.productId}/reviews/2`}>Review 2</Link>
        <Link href={`/products/${params.productId}/reviews/3`}>Review 3</Link>
      </div>
      <Link href={`/products/${params.productId}`}>
        <Button text="Back to Products" />
      </Link>
    </>
  );
};

export default ProductReview;

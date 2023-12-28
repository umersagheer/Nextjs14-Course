import Button from "@/components/Button";
import Link from "next/link";
import React from "react";

type paramsType = {
  params: params;
};

type params = {
  productId: string;
  reviewId: string;
};

const ProductReviewDetails = ({ params }: paramsType) => {
  return (
    <>
      <h1>
        Detailed Review {params.reviewId} of product {params.productId}
      </h1>
      <Link href={`/products/${params.productId}/reviews`}>
        <Button text="Back to Reviews" />
      </Link>
    </>
  );
};

export default ProductReviewDetails;

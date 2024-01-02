import Link from "next/link";
import { Metadata } from "next";

type paramsType = {
  params: params;
};

type params = {
  productId: string;
};

export const generateMetadata = ({ params }: paramsType): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};

const ProductDetails = ({ params }: paramsType) => {
  return (
    <>
      <h1 className="border bg-blue-500 px-3 py-1 rounded-md m-2 w-fit">
        Product Number {params.productId}
      </h1>
      <Link
        href="/products"
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

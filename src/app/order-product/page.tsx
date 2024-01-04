"use client";

import { useRouter } from "next/navigation";

const OrderProduct = () => {
  const router = useRouter();
  function handleClick() {
    console.log("Order placed");
    // userouter() methods => push, replace, back, forward
    router.push("/");
  }
  return (
    <div className="grid place-items-center">
      <h2 className="text-4xl font-bold text-emerald-400 p-4">Order Product</h2>
      <button
        onClick={handleClick}
        className="bg-emerald-500 hover:bg-emerald-300 p-3 rounded-md font-bold my-3"
      >
        Place order
      </button>
    </div>
  );
};

export default OrderProduct;

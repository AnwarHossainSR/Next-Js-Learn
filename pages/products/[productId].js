import { useRouter } from "next/router";
import React from "react";

const ProductDetails = () => {
  const { productId } = useRouter().query;
  return <div>Product -{productId} Details</div>;
};

export default ProductDetails;

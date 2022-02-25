import { useRouter } from "next/router";
import React from "react";

const Review = () => {
  const { productId } = useRouter().query;
  return <div>Product -{productId} Review</div>;
};

export default Review;

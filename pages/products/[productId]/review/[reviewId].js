import { useRouter } from "next/router";
import React from "react";

const ReviewDetails = () => {
  const { productId, reviewId } = useRouter().query;
  return (
    <div>
      Product -{productId} Review Details of {reviewId}
    </div>
  );
};

export default ReviewDetails;

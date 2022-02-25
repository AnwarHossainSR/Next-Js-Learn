import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <Link href="/blogs">Blogs</Link>
      <br />
      <Link href="/products">Products</Link>
    </>
  );
};

export default Home;

import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Home = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/docs");
  };
  return (
    <>
      <div>Home</div>
      <Link href="/blogs">Blogs</Link>
      <br />
      <Link href="/products">Products</Link>
      <br />
      <h1 onClick={handleClick}>Programetatiocaly navigate</h1>
    </>
  );
};

export default Home;

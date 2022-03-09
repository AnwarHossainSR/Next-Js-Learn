import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
      <Link href="/users">
        <a>users</a>
      </Link>
    </div>
  );
};

export default index;

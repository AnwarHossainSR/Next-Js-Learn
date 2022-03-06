import Link from "next/link";
import React from "react";

const postList = ({ posts }) => {
  return (
    <>
      <h1>List of Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`} passHref>
            <h1>{post.title}</h1>
            <hr />
          </Link>
        </div>
      ))}
    </>
  );
};

export default postList;

export const getStaticProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();
  return {
    props: {
      posts: posts,
    },
  };
};

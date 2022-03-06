import React from "react";

const Post = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;

export const getStaticProps = async (context) => {
  const { postId } = context.params;
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const postData = await post.json();
  return {
    props: {
      postData,
    },
  };
};

import React from "react";

const Post = ({ postData }) => {
  return (
    <div>
      <h1>{postData.title}</h1>
      <p>{postData.body}</p>
    </div>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();
  const paths = posts.map((post) => ({
    params: { postId: post.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
};

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

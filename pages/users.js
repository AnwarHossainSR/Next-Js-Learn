import React from "react";
import User from "../components/User";

const users = ({ users }) => {
  return (
    <>
      <h1>All Users</h1>
      <>
        {users.map((item) => (
          <User key={item.id} user={item} />
        ))}
      </>
    </>
  );
};

export default users;

export const getStaticProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();
  return {
    props: {
      users,
    },
  };
};

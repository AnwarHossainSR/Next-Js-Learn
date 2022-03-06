import React from "react";

const users = ({ users }) => {
  return (
    <>
      <h1>All Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
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

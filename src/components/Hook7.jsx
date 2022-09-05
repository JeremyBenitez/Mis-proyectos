import React, { useEffect, useState, Fragment } from "react";
const Hook7 = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  // ejemplo de como renderizar datos traídos anteriormente desde una API, ese ejemplo es el siguiente:
  function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => setPosts(posts))
      .catch((err) => console.log(err.message));
  }

  function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUsers(users))
      .catch((err) => console.log(err.message));
  }

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Fragment>
      <br></br>
      <br></br>
      <h4>---Este ejemplo renderiza datos extraidos de una API---</h4>
      <h2>Posts de la API</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <br></br>
      <br></br>
      <h2>Usuarios</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Hook7;

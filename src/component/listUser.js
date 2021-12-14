import axios from "axios";
import React, { useEffect, useState } from "react";
import CardUser from "./carduser";

function ListUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        users.map((user) => <CardUser user={user} />)
      )}
    </div>
  );
}

export default ListUsers;

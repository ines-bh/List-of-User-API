import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

function User({ match }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
      .then((res) => setUser(res.data))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Card border="primary" style={{ width: "18rem" }}>
        <Card.Header>
          {user.name}
          {user.username}
        </Card.Header>
        <Card.Body>
          <Card.Title>{user.email}</Card.Title>
          <Card.Text>
            {user.phone}
            <br />
            {user.website}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default User;

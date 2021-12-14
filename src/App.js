import React, { useState } from "react";
import NavbarUser from "./component/navbar";
import "./App.css";
import ListUsers from "./component/listUser";
import Home from "./Home";
import User from "./component/user";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./component/privateroute";


function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      <NavbarUser isAuth={isAuth} setIsAuth={setIsAuth} />
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute
          isAuth={isAuth}
          path="/Listofusers"
          component={ListUsers}
        />
        <Route path="/User/:id" render={(props) => <User {...props} />} />
      </Switch>
    </div>
  );
}

export default App;

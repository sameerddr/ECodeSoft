import React, { useState } from "react";

import Login from "../Login/Login";
import Home from "../Home/Home";

function Auth() {
  const [loggedInuser, setloggedInuser] = useState(false);

  return (
    <>
      {loggedInuser ? (
        <>
          <Home sets={setloggedInuser} />
        </>
      ) : (
        <Login sets={setloggedInuser} />
      )}
    </>
  );
}

export default Auth;

import React from "react";
import { useState } from "react";
import "./App.css";
import { Button } from "@mui/material";
import GiftCurator from "./components/GiftCurator.tsx";
import axios from "axios";

// Authenticate the user, and get permission to request payments from them:
// const scopes = ["username"];

// Read more about this callback in the SDK reference:
// function onIncompletePaymentFound(payment) { /* ... */ };

function App() {
  // const [username, setUsername] = useState(null);
  // const handleAuth = async () => {
  //   Pi.authenticate(["username"], () => {})
  //     .then(async (auth) => {
  //       console.log(auth)
  //       setUsername(auth.user.username);
  //       const me = await axios.get("https://api.minepi.com/v2/me", {
  //         headers: { Authorization: `Bearer ${auth.accessToken}` },
  //       });

  //       const userDetails = { uid: me.data.uid, username: me.data.username };
  //       const authDetails = {
  //         uid: auth.user.uid,
  //         username: auth.user.username,
  //       };

  //       // console.log({ userDetails, authDetails });

  //       if (
  //         userDetails.uid === authDetails.uid &&
  //         userDetails.username === authDetails.username
  //       ) {
  //         alert("Successfully Authenticated User!");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
        <h1>Test App</h1>
        {/* <Button variant="contained" onClick={handleAuth}>
          Authenticate
        </Button> */}

        {/* <div>
          <h2>Hi {username}</h2>
        </div> */}

        </div>
        
        
      </div>
       <GiftCurator />
    </>
  );
}

export default App;

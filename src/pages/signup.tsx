import React, { useState } from "react";

// material-ui
import { TextField, Button } from "@mui/material";

// firebase
import { app } from "../lib/firebase";
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  console.log(auth);
  const handleRegister = async (e: any) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      console.log(result);
    });
  };

  return (
    <>
      <div>
        <h1>Signin</h1>
        <TextField
          id="filled-basic"
          label="email"
          variant="filled"
          type="text"
          sx={{ display: "block" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="password"
          variant="filled"
          type="password"
          sx={{ mt: "6px" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          onClick={handleRegister}
          sx={{ display: "block" }}
        >
          新規登録
        </Button>
      </div>
    </>
  );
};

export default SignUp;

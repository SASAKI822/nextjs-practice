import React, { useState } from "react";

// material-ui
import { TextField, Button } from "@mui/material";

// firebase
import { app } from "../lib/firebase";
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import Link from "next/link";

const SignUp: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // SignUp登録ボタン
  // mypage へ遷移する

  const handleRegister = async (e: any) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        router.push("/mypage");
        const userObject = result.user;

        // ユーザーネーム
        const name = (userObject.displayName = username);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <h1>SignUp</h1>
        <TextField
          id="filled-basic"
          label="username"
          variant="filled"
          type="text"
          sx={{ display: "block" }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <Link href="/signin">サインインはこちら</Link>
      </div>
    </>
  );
};

export default SignUp;

import React, { useState } from "react";
import { Inter } from "@next/font/google";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { Button, TextField } from "@mui/material";
import { auth } from "../lib/firebase";
import { useRouter } from "next/router";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

const Signin: React.FC = () => {
  const router = useRouter();
  const [usename, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignin = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.push("/mypage");
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  };

  const handleGoogleSignin = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      const credential: any = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(token);
      router.push("/mypage");
    });
  };

  return (
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

      <Button type="submit" onClick={handleSignin} sx={{ display: "block" }}>
        ログイン
      </Button>
      <Button
        type="submit"
        onClick={handleGoogleSignin}
        sx={{ display: "block" }}
      >
        Googleでログイン
      </Button>
      <Link href="/signup">登録はこちら</Link>
    </div>
  );
};

export default Signin;

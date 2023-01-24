import { Button } from "@mui/material";
import { auth } from "../lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import React from "react";
console.log("sd");
const Mypage = () => {
  const router = useRouter();
  const user: any = auth.currentUser;
  const username = user.displayName;

  // サインアウトボタン
  const handleSignout = async (e: any) => {
    signOut(auth).then(() => {
      router.push("/signin");
    });
  };

  return (
    <>
      <div>
        <h1>Mypage</h1>
      </div>
      <div>
        <p>ユーザー</p>
        <span>{user.displayName}</span>
      </div>
      <div>
        <p>最終ログイン</p>
        <span>{user.metadata.lastSignInTime}</span>
      </div>
      <div>
        <p>ユーザーid</p>
        <span>{user.uid}</span>
      </div>

      <Button type="submit" onClick={handleSignout} sx={{ display: "block" }}>
        サインアウト
      </Button>
    </>
  );
};

export default Mypage;

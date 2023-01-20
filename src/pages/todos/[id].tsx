import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

type StatusPageProps = { status: Status };
type Status = {
  id: string;
  title: string;
};
export const getServerSideProps = async (context: any) => {
  const res = await fetch(`http://localhost:3000/todos?id=${context.query.id}`);
  console.log(res);
};

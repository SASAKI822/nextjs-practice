import TodoList from "@/components/TodoList";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Link from "next/link";

type StatusPageProps = { status: Status };
type Status = {
  id: string;
  title: string;
};

const TodoId = () => {
  const router = useRouter();
  const routeDetail = router.query;
  console.log(router.query.id);
  return (
    <>
      <h2>Todo詳細</h2>
      <ul>
        <li>
          <span>{routeDetail.id}</span>
          {routeDetail.ptitle}
        </li>
      </ul>
      <Link href="/todos">todoリスト</Link>
    </>
  );
};

export default TodoId;

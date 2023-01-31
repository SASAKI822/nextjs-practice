import React, { useEffect } from "react";
import { todoListState } from "../atoms/states";
import { useRecoilState } from "recoil";
import Link from "next/link";
import { useRouter } from "next/router";
import { collection, getDocs, QuerySnapshot } from "firebase/firestore";
import { db } from "lib/firebase";

const TodoList = () => {
  const [todoList, setTodoList] = useRecoilState<any>(todoListState);
  const router = useRouter();

  useEffect(() => {
    const getAllDocData = async () => {
      const todoCollectionRef = collection(db, "todo");
      getDocs(todoCollectionRef).then((querySnapshot) => {
        querySnapshot.forEach((docs) => {
          const doc = docs.data();
          console.log(doc);
        });
      });
    };
  }, []);

  return (
    <>
      <h2>TodoList</h2>

      <ul>
        {todoList.map((item: { id: number; title: string }) => (
          <>
            <Link
              href={{
                pathname: `/todos/${item.id}`,
                query: { id: item.id, title: item.title },
              }}
              key={item.id}
            >
              <li>{item.title}</li>
            </Link>
          </>
        ))}
      </ul>
      <Link href="/todos/create">Todo作成する</Link>
    </>
  );
};

export default TodoList;

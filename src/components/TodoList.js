import { useRecoilState, useRecoilValue } from "recoil";
import { todoListState } from "../globalStates/atom";
import { todoListStatsState } from "../globalStates/selector";

function TodoList() {
  const todoList = useRecoilValue(todoListState);
  const totalNum = useRecoilValue(todoListStatsState);
  return (
    <>
      <h1>RecoilによるTodoアプリ</h1>
      <ul>
        <li>Todoの登録数:{totalNum}</li>
      </ul>
      {todoList.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  );
}

export default TodoList;

import { useState } from "react";

const TodoList = () => {
  const [Task, setTask, HandleChange] = useState([
    "Ir ao mercado",
    "Arrumar o quarto",
    "Lavar o carro",
    "Comprar ração dos gatos",
    "Pagar as contas",
  ]);
  let [newTask, setNewTask] = useState("");
  return (
    <>
      <h1>Tarefas</h1>
      <input
        value={newTask}
        onChange={(value) => setNewTask(value.target.value)}
        placeholder="Adicionar Tarefa"
      />
      <button onClick={() => addNewTask()}>Adicionar</button>
      <ul>
        {Task.map((tarefas) => (
          <li key={Task.id}>{tarefas}</li>
        ))}
        <input type="checkbox" value={newTask} onChange={HandleChange} />
        <input type="checkbox" value={newTask} onChange={HandleChange} />
        <input type="checkbox" value={newTask} onChange={HandleChange} />
        <input type="checkbox" value={newTask} onChange={HandleChange} />
        <input type="checkbox" value={newTask} onChange={HandleChange} />
      </ul>
    </>
  );
  function addNewTask() {
    setTask([...Task, newTask]);
  }
};

export { TodoList };

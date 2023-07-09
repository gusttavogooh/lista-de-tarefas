import { useState } from "react";
import './App.css';
import Todo from "./components/Todo";
import Form from "./components/Form";
import Search from "./components/Search";
import Filter from "./components/Filter";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Enviar Relatorio",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Fazer a barba as 14 horas",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Iniciar curso de Java",
      category: "Estudo",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");
  
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Ascendente");

  const addTodo = (text, category) => {
    
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => 
    todo.id === id ? todo.isCompleted = !todo.isCompleted : todo
    );
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo: null
    );
    setTodos(filteredTodos);
  };

  return (
  <div className="app">
    <h1>Lista de Tarefas</h1>
    <Search search={search} setSearch={setSearch} />
    <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
    <div className="todo-list">
      {todos
        .filter((todo) => 
          filter === "All" 
            ? true 
            : filter === "Completed" 
            ? todo.isCompleted 
            : !todo.isCompleted
        )
        .filter((todo) => 
          todo.text.toLowerCase().includes(search.toLocaleLowerCase())
          )
          .sort((a, b) =>
            sort === "Ascendente"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .map((todo) => (
            <Todo 
              key={todo.id} 
              todo={todo} 
              removeTodo={removeTodo} 
              completeTodo={completeTodo} 
            />
          ))}
        </div>
      <Form addTodo={addTodo}/>
    </div>
  );
}

export default App;

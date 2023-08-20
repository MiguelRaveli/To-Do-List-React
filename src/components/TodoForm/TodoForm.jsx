import { useState } from "react";
import "./TodoForm.css";
const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value,category)
    setValue("");
    setCategory("");
  };
  return (
    <div className="divtodo-form">
      <h2>Criar Tarefa</h2>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          value={value}
          type="text"
          name="title"
          id="title"
          placeholder="Digite o título"
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button className="custom-button" type="submit">
          Criar Tarefa
        </button>
      </form>
    </div>
  );
};

export default TodoForm;

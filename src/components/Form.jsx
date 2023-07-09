import { useState } from "react";

const Form = ( {addTodo}) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category) return; 
        // Adicionar todo
        addTodo(value, category);
        // Limpar os campos
        setValue("");
        setCategory("");
    };

  return (
    <div className='todo-form'>
      <h2>Adicionar Tarefa:</h2>
      <form onSubmit = {handleSubmit}>
        <input 
        type="text" 
        placeholder="Adiciona uma nova terefa" 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Selecione uma Categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
        </select>
        <button type='submit'>Criar nova tarefa</button>
      </form>
    </div>
  );
};

export default Form
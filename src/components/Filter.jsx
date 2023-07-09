const Filter = ({ filter, setFilter, setSort}) => {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select velue={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Tarefas Completas</option>
                    <option value="Incomplete">Tarefas Incompletas</option>
                </select>
            </div>
            <div>
                <p>Ordem de Filtragem:</p>
                <button onClick={() => setSort("Ascendente")}>Ascendente</button>
                <button onClick={() => setSort("Descendente")}>Descendente</button>
            </div>
        </div>
    </div>
  );
};

export default Filter
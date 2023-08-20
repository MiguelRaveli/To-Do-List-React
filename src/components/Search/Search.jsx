import "./Search.css"
const Search = ({search, setSearch }) => {
  return (
    <div className="search">
        <h2>Pesquisar</h2>
        <input className="search-input" type="text"  placeholder="Digite para pesquisar" value={search} onChange={(e) => setSearch(e.target.value)}/>
    </div>
  )
}

export default Search
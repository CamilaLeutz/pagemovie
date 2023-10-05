import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom" /*esse cara permite pegar a string da url e utilizada como precisar */ 
import MovieCard from "../components/MovieCard" /**vai aparecer os cards dos filmes individualmente */

const searchURL = import.meta.env.VITE_SEARCH/*inportando o search do .env */
const apiKey = import.meta.env.VITE_API_KEY /*importando a key do arquivo .env */

import "./MovieGrid.css"

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchMovies = async (url) => { /*função assincrona que busca as infos dos topMovies, vai fazer a requisição e esperar uma url a resposta */
  const res =await fetch(url) /*esperar a resposta da url */
  const data = await res.json()

  console.log(data)
  setMovies(data.results)
}

useEffect(() => { /*executa a função em alguns estagios da minha aplicação, a cada mudança do array de dependencias que tem nela os [] ela chama a função */

  const searchWhithQueryURL = `${searchURL}?${apiKey}&query=${query}`

  getSearchMovies(searchWhithQueryURL)/*aqui vai fazer a chamada de fetch e trzer os topMovies */
}, [query])/**aqui usamos uma const no array de dependecia pra que o useEffect atualiza essa função a cada mudança no input */

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}

export default Search
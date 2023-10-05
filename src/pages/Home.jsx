import { useState, useEffect } from "react" /*hooks do react*/ 
import MovieCard from "../components/MovieCard";

import "./MovieGrid.css"

const moviesURL = import.meta.env.VITE_API; /*conts pra guardar a url da api*, aqui essa importação acontece pelo .env, o arquivo que estao essas infos*/
const apiKey = import.meta.env.VITE_API_KEY;/*conts pra guardar a key da api*/


const Home = () => {
  const [topMovies, setTopMovies] = useState([]) /*gerenciamente de estado dos filmes, topMovies a variavel e setTopMovies a função que gerencia o estado */

  const getTopRatedMovies = async (url) => { /*função assincrona que busca as infos dos topMovies, vai fazer a requisição e esperar uma url a resposta */
    const res =await fetch(url) /*esperar a resposta da url */
    const data = await res.json()

    console.log(data)
    setTopMovies(data.results)
  }

  useEffect(() => { /*executa a função em alguns estagios da minha aplicação, a cada mudança do array de dependencias que tem nela os [] ela chama a função */
 
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`

    getTopRatedMovies(topRatedUrl)/*aqui vai fazer a chamada de fetch e trzer os topMovies */
  }, [])

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length > 0 && 
        topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)} {/*length espera mais de um elemento pra renderizar s lista de filmes*/} 
      </div>
    </div>
  )
}

export default Home
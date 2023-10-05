import { Link } from "react-router-dom"

import { FaStar } from "react-icons/fa"

const imageUrl = import.meta.env.VITE_IMG /*importando os dados da url da imagem do arquivo .env */

const MovieCard = ({movie, showLink= true}) => { /*aqui o showLink é a propriedade que mostra um botão pra abrir a page individual  */
   return ( <div className="movie-card">
    <img src={imageUrl + movie.poster_path} alt={movie.title}  /> {/* presta atenção que quando chamamos uma variavel dentro de uma tag ela NÃO USA AS ASPAS, SE NÃO VIRA UMA STRING*/}
   <h2>{movie.title}</h2>
   <p>
    <FaStar/> {movie.vote_average} {/*icone e a nota do filme*/} 
       </p>
   {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
   </div>
  )
}

export default MovieCard
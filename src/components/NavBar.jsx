import { useState } from "react"

import { Link, useNavigate } from "react-router-dom"

import { CiSearch } from "react-icons/ci" /*os dois icones importados do react-icons */
import { BiCameraMovie } from "react-icons/bi"


import "./NavBar.css"


const NavBar = () => {

  const [search, setSearch] = useState("") /**estado pra ser controlado */
  const navigate = useNavigate()/**funções de redirecionamento no meu componente */
 
  const handleSubmit = (e) => {
    e.preventDefault()
   
    if(!search) return
    navigate(`/search?q=${search}`)
    setSearch("")
    
    /*o evento submit é disparado quando o usuário pressionar enter na caixa de pesquisa*/
  }/**mapeando um evento do submit */
 console.log(search)
  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie /> MoviesLib {/*icone importado*/} 
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}/**cada vez que digitar no input acontece a mudança */
          value={search}/**permite manipular valor do campo atraves do meu state tbm */
        />
        <button type="submit">
          <CiSearch /> {/*icone importado*/} 
        </button>
      </form>
    </nav>
  );
};
export default NavBar
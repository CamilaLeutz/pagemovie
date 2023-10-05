import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"

import "./App.css"

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Outlet/> {/*é uma biblioteca padrão para que você consiga fazer o roteamento das páginas da sua aplicação de forma dinâmica*/ }
    </div>
   
  )
}

export default App

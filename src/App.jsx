import { BrowserRouter, Routes , Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import GlobalStyle from "./GlobalStyle"
import FilmDate from "./components/FilmDate"
import Seats from "./components/Seats"
import Success from "./components/Success"

export default function App() {

  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sessoes/:idFilme' element={<FilmDate/>}/>
      <Route path='/assentos/:idSessao' element={<Seats/>}/>
      <Route path='/sucesso/' element={<Success/>}/>
    </Routes>
    </BrowserRouter>
  )
}

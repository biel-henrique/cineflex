import { BrowserRouter, Routes , Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/home"
import GlobalStyle from "./GlobalStyle"
import FilmDate from "./components/FilmDate"

export default function App() {

  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sessoes/:idFilme' element={<FilmDate/>}/>
    </Routes>
    </BrowserRouter>
  )
}

import './Index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './view/home'
import Layout from './layout/layout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout props={<Home/>} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

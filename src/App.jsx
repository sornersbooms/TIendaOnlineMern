import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import BarraNavegacion from './components/BarraNavegacion'
import ListaProductos from './components/ListaProductos'
import NoPagina from './components/NoPagina'
import CarritoDeCompras from './components/CarritoDeCompras'
import Registro from './components/Registro'
import Login from './components/Logjn'

function App() {
  

  return (
    <>


<BrowserRouter>
      <Routes>
        <Route path="/" element={<BarraNavegacion />}>
          <Route index element={<ListaProductos/>} />
          <Route path="*" element={<NoPagina />} />
          <Route path="carrito" element={<CarritoDeCompras />} />
          <Route path="registro" element={<Registro />} />
          <Route path="login" element={<Login/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    
      
    </>
  )
}

export default App

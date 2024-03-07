import{BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <div>
      <BrowserRouter>
     <NavBar/>
     <Routes >
    <Route path='/' element={<ItemListContainer greeting={"Bienvenidos"} />} />
    <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Bienvenidos"} />} />
    <Route path='/item/:itemId' element={<ItemDetailContainer />} />
    <Route path='*' element={<h1>Not found 404</h1>} />
    
    
     </Routes>
  </BrowserRouter>
     </div>
  )
}

export default App

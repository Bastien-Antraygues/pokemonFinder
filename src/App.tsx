import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import { Search } from './pages/Search'
import { Favorites } from './pages/Favorites'
import { Home } from './pages/Home'
import { FavoriteProvider } from './components/FavoritesProvider'

function AppRoute() {

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/search">Recherche</Link>
        <Link to="/favorites">Favoris</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </BrowserRouter>
  )
}

function App(){
  return(
    <FavoriteProvider>
      <AppRoute/>
    </FavoriteProvider>
  )
}
export default App
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Search } from './pages/Search'
import { Favorites } from './pages/Favorites'
import { Home } from './pages/Home'
import { FavoriteProvider } from './components/FavoritesProvider'
import { NavBar } from './components/NavBar'
import { ThemeProvider } from './components/ThemeProvider'
import { PokemonDetail } from './pages/PokemonDetail'

function AppRoute() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/detail/:id' element={<PokemonDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

function App() {
  return (
    <ThemeProvider>
      <FavoriteProvider>
        <AppRoute />
      </FavoriteProvider>
    </ThemeProvider>

  )
}
export default App
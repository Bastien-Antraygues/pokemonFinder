import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Search } from './pages/Search'
import { Favorites } from './pages/Favorites'
import { Home } from './pages/Home'
import { FavoriteProvider } from './components/FavoritesProvider'
import { NavBar } from './components/NavBar'
import { ThemeProvider } from './components/ThemeProvider'
import { PokemonDetail } from './pages/PokemonDetail'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { AuthProvider } from './providers/AuthProvider'

function AppRoute() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/detail/:id' element={<PokemonDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <FavoriteProvider>
          <AppRoute />
        </FavoriteProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}
export default App
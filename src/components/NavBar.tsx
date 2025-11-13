import { Link, useLocation } from "react-router-dom";

export function NavBar(){

    let location = useLocation()
    console.log(location.pathname=='/')
    return(
        <nav className='flex gap-2 p-2 justify-center'>
            <Link to="/" className={location.pathname=='/'?'font-bold':'font-semibold'}  >Accueil</Link>
            <Link to="/search" className={location.pathname=='/search'?'font-bold':'font-semibold'} >Recherche</Link>
            <Link to="/favorites" className={location.pathname=='/favorites'?'font-bold':'font-semibold'}>Favoris</Link>
        </nav>
    )
}
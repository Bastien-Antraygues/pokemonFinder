import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<{
    theme:string,
    setTheme: (theme:string) => void
}>({
    theme:'light',
    setTheme: () => {}
})

export function ThemeProvider({children}:{children:React.ReactNode}){
    // Récupérer le thème depuis localStorage au démarrage, ou utiliser 'light' par défaut
    const [theme, setThemeState] = useState(()=>{
        const savedTheme = localStorage.getItem('theme')
        return savedTheme || 'light'
    })

    // Fonction pour mettre à jour le thème et le sauvegarder
    const setTheme = (newTheme:string) =>{
        setThemeState(newTheme)
        localStorage.setItem('theme',newTheme)
    }

    // Appliquer le thème au document au chargement et lors des changements
    useEffect(()=>{
        document.documentElement.setAttribute('data-theme',theme)
    },[theme])

    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    return useContext(ThemeContext)
}
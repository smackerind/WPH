import { createContext, ReactNode, useState } from "react";


export type Theme = "light" | "dark"


export interface ThemeContextValue {
    theme:Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)


interface ThemeProvideProps {
    children:ReactNode
}

export function ThemeProvider({children}:ThemeProvideProps){

    const [theme, setTheme] = useState<Theme>("light")


    function toggleTheme(){
        setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"))
    }

    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
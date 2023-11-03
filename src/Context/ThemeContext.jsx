import { createContext, useContext,useState } from 'react'

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

export const ThemeContextProvider = ({ children }) => {
    const [theme,setTheme] = useState('light')

    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}
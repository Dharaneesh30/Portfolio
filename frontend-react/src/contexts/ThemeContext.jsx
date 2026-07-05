import React, { createContext, useContext, useEffect, useState } from 'react'

export const ThemeContext = createContext({})

export function ThemeProvider({ children }){
  const [theme, setTheme] = useState('dark')
  const toggleTheme = () => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(){
  return useContext(ThemeContext)
}

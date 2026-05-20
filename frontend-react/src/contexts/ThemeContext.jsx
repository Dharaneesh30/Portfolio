import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext({})

export function ThemeProvider({ children }){
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'obsidian'
    } catch (error) {
      return 'obsidian'
    }
  })

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
    } catch (error) {
      // Ignore storage failures in restrictive browser modes.
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

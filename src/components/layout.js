import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "./theme"
import GlobalStyles from "./global"
import Toggle from "./toggle"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  const [theme, setTheme] = useState("light")
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles/>
      
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header className="global-header">{header}</header>
        <Toggle theme={themeMode} toggleTheme={themeToggler}/>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default Layout

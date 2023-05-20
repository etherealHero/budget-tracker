import {
  Shadows,
  StyledEngineProvider,
  ThemeOptions,
  ThemeProvider,
  createTheme,
} from "@mui/material"
import { useAppSelector } from "./store"
import { useEffect } from "react"
import { Outlet } from "react-router-dom"

import { themeModel } from "../shared"
import { BottomNavbar } from "../widgets"

const Layout = () => {
  const { theme, mode } = useAppSelector(themeModel.state)
  const defaultMuiTheme = createTheme()
  const defaultShadows: ThemeOptions["shadows"] = [...defaultMuiTheme.shadows]

  const muiTheme = createTheme({
    components: {
      MuiButtonBase: { defaultProps: { disableRipple: true } },
    },
    shadows: defaultShadows.map(() => "none") as Shadows,
    palette: {
      mode,
      primary: {
        main: "hsl(var(--p))",
      },
      secondary: {
        main: "hsl(var(--s))",
      },
      error: {
        main: "hsl(var(--er))",
      },
      warning: {
        main: "hsl(var(--wa))",
      },
      info: {
        main: "hsl(var(--in))",
      },
      success: {
        main: "hsl(var(--su))",
      },
    },
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <Outlet />
        <BottomNavbar />
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default Layout

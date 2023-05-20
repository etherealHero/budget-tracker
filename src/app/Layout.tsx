import {
  Shadows,
  StyledEngineProvider,
  ThemeOptions,
  ThemeProvider,
  createTheme,
} from "@mui/material"
import { MainPage } from "../pages"
import { useAppSelector } from "./store"
import { useEffect } from "react"
import { themeModel } from "../shared"

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
        <MainPage />
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default Layout

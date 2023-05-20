import {
  Shadows,
  StyledEngineProvider,
  ThemeOptions,
  ThemeProvider,
  createTheme,
} from "@mui/material"
import { MainPage } from "../pages"
import { useAppSelector } from "./store"
import { themeModel } from "../shared"
import { useEffect } from "react"

const Layout = () => {
  const theme = useAppSelector(themeModel.theme)
  const defaultMuiTheme = createTheme()
  const defaultShadows: ThemeOptions["shadows"] = [...defaultMuiTheme.shadows]

  const muiTheme = createTheme({
    components: {
      MuiButtonBase: { defaultProps: { disableRipple: true } },
    },
    shadows: defaultShadows.map(() => "none") as Shadows,
    palette: {
      primary: {
        main: "hsl(var(--p))",
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

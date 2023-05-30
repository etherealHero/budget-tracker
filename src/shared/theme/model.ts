import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

interface IThemeState {
  mode: "light" | "dark"
  light: string
  dark: string
  theme: string
  dev: boolean
}

const initialState: IThemeState = {
  mode: "light",
  light: "light",
  dark: "dark",
  theme: "light",
  dev: false,
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switch: (state) => {
      const newTheme = state.mode === "light" ? state.dark : state.light

      state.theme = newTheme
      document.documentElement.dataset.theme = newTheme
      state.mode = state.mode === "light" ? "dark" : "light"
    },
    setTheme: (
      state,
      { payload }: PayloadAction<{ theme: string; mode: "light" | "dark" }>
    ) => {
      if (payload.mode === "light") {
        state.light = payload.theme
      } else {
        state.dark = payload.theme
      }

      state.mode = payload.mode
      state.theme = payload.theme
      document.documentElement.dataset.theme = payload.theme
    },
    toggleDevMode: (state) => {
      state.dev = !state.dev
    },
  },
})

export const themeModel = {
  ...themeSlice.actions,
  theme: (state: RootState) => state.theme.theme,
  mode: (state: RootState) => state.theme.mode,
  state: (state: RootState) => state.theme,
}

export default themeSlice.reducer

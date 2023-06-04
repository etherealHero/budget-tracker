import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store"

import { initialState } from "./initialState"
import { reducers } from "./actions"

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers,
})

export const categoryModel = {
  ...categorySlice.actions,
  data: (state: RootState) => state.categories,
}

export default categorySlice.reducer

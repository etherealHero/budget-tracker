import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store"

import { initialState } from "./initialState"

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
})

export const transactionModel = {
  ...transactionSlice.actions,
  data: (state: RootState) => state.transactions,
}

export default transactionSlice.reducer

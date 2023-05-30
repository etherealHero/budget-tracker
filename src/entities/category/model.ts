import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

interface ICategory {
  id: string
  title: string
  subCategories?: string[]
  color: string
}

const initialState: ICategory[] = [
  {
    id: "1",
    title: "Кафе",
    subCategories: ["ресторан", "кафе", "фастфуд"],
    color: "purple",
  },
  {
    id: "2",
    title: "Досуг",
    color: "red",
  },
]

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
})

export const categoryModel = {
  ...categorySlice.actions,
  data: (state: RootState) => state.categories,
}

export default categorySlice.reducer

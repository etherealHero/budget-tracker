import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface ICategory {
  id: string
  title: string
  icon: string
  subCategories?: string[]
  color: string
}

const initialState: ICategory[] = [
  {
    id: "1",
    title: "Кафе",
    icon: "restaurant",
    subCategories: ["ресторан", "кафе", "фастфуд"],
    color: "purple",
  },
  {
    id: "2",
    title: "Досуг",
    icon: "local_movies",
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

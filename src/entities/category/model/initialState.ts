export interface ICategory {
  id: string
  title: string
  icon: string
  subCategories?: string[]
  color: string
}

export const initialState: ICategory[] = [
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

export enum ETransactionType {
  "income",
  "expense",
}

export interface ITransaction {
  id: string
  date: string
  cash: number
  description?: string
  type: ETransactionType
  categoryId: string
}

export const initialState: ITransaction[] = [
  {
    id: "1",
    categoryId: "1",
    date: "2023-05-30T22:40:34+10:00",
    cash: 437,
    type: ETransactionType.expense,
  },
  {
    id: "2",
    categoryId: "1",
    date: "2023-05-30T22:45:34+10:00",
    description: "KFC",
    cash: 1030,
    type: ETransactionType.income,
  },
  {
    id: "3",
    categoryId: "2",
    date: "2023-05-30T13:21:34+10:00",
    cash: 200,
    type: ETransactionType.expense,
  },
]

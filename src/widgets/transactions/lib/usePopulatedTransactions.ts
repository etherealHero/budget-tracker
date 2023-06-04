import { useAppSelector } from "../../../app/store"
import {
  ICategory,
  ITransaction,
  categoryModel,
  transactionModel,
} from "../../../entities"

export const usePopulatedTransactions = () => {
  const transactions = useAppSelector(transactionModel.data)
  const categories = useAppSelector(categoryModel.data)

  interface ITransactionPopulated extends Omit<ITransaction, "categoryId"> {
    categoryId: ICategory | undefined
  }

  const populatedTransactions: ITransactionPopulated[] = [...transactions]
    .sort((t1, t2) => (t1.date > t2.date ? -1 : 1))
    .map((t) => {
      const category = categories.find(
        (c) => c.id === t.categoryId
      )

      return { ...t, categoryId: category }
    })

  return [populatedTransactions]
}

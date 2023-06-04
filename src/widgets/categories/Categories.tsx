import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline"
import { useAppSelector } from "../../app/store"
import {
  ETransactionType,
  categoryModel,
  transactionModel,
} from "../../entities"
import { themeModel } from "../../shared"

const Categories = () => {
  const categories = useAppSelector(categoryModel.data)
  const transactions = useAppSelector(transactionModel.data)

  const { mode } = useAppSelector(themeModel.state)

  return (
    <div className="grid grid-cols-2 gap-2 mt-6">
      {categories.map((c) => {
        const transactionsByCategory = [...transactions].filter(
          (t) => t.categoryId === c.id
        )

        const totalIncome = transactionsByCategory.reduce(
          (income, t) =>
            (income += t.type === ETransactionType.income ? t.cash : 0),
          0
        )

        const totalExpense = transactionsByCategory.reduce(
          (expense, t) =>
            (expense += t.type === ETransactionType.expense ? t.cash : 0),
          0
        )

        return (
          <div
            key={c.id}
            className="grayscale-[20%] rounded-xl p-2 shadow-md bg-base-200"
          >
            <div className="flex gap-x-3 items-center mb-3">
              <span
                className={`inline-flex justify-center items-center w-11 h-11 rounded-full ${
                  mode === "light"
                    ? "opacity-90 grayscale-[20%]"
                    : "grayscale-[60%] opacity-75"
                }`}
                style={{ backgroundColor: c.color }}
              >
                <span className="m-icon text-white">{c.icon}</span>
              </span>
              <div>
                <span>{c.title}</span>
                <p className="text-lg -mt-1 font-medium tracking-wider">
                  {totalIncome - totalExpense} ₽
                </p>
              </div>
            </div>
            <div className="flex no-wrap overflow-scroll gap-x-4">
              <span className="text-success inline-flex items-center rounded-box">
                <ArrowTrendingUpIcon className="w-4 h-4 mr-1" />
                <span className="shrink-0 text-sm">{totalIncome} ₽</span>
              </span>
              <span className="text-error inline-flex items-center rounded-box">
                <ArrowTrendingDownIcon className="w-4 h-4 mr-1" />
                <span className="shrink-0 text-sm">{totalExpense} ₽</span>
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Categories

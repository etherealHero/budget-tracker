import { MotionValue, motion } from "framer-motion"
import { useAppSelector } from "../../app/store"

import {
  ETransactionType,
  categoryModel,
  transactionModel,
} from "../../entities"
import { themeModel } from "../../shared"

// refactor
import { RestaurantRounded } from "@mui/icons-material"
import dayjs from "dayjs"

type Props = {
  marginTop: MotionValue<number>
}

const Transactions = ({ marginTop }: Props) => {
  const transactions = useAppSelector(transactionModel.data)
  const categories = useAppSelector(categoryModel.data)

  const { dev } = useAppSelector(themeModel.state)

  return (
    <motion.div
      style={{ marginTop }}
      className={`p-3 absolute bottom-20 top-[450px] overflow-scroll flex flex-col gap-y-4 w-full ${
        dev && "border-4 border-blue-500"
      }`}
    >
      {transactions.map((t) => {
        return (
          <div className="flex gap-x-3 items-center px-2" key={t.id}>
            <div className="w-12 h-12 rounded-full bg-yellow-200 flex justify-center items-center">
              <RestaurantRounded className="w-7 h-7 text-base-content/90" />
            </div>
            <div className="flex-1">
              <p>{categories.find((c) => c.id === t.categoryId)?.title}</p>
              <span className="text-base-content/70">
                {dayjs(t.date).format("HH:mm")}
              </span>
            </div>
            {t.type === ETransactionType.expense ? (
              <span className="text-lg font-medium">{t.cash}</span>
            ) : (
              <span className="text-lg font-medium text-success">
                +{t.cash}
              </span>
            )}
          </div>
        )
      })}
    </motion.div>
  )
}

export default Transactions

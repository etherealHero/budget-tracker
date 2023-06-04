import { useAppSelector } from "../../../app/store"

import { ETransactionType } from "../../../entities"
import { themeModel } from "../../../shared"

type Props = {
  type: ETransactionType
  cash: number
}

const Cash = ({ type, cash }: Props) => {
  const { mode } = useAppSelector(themeModel.state)

  if (type === ETransactionType.expense) {
    return (
      <span className="text-lg font-medium text-base-content/60">{cash} ₽</span>
    )
  } else {
    return (
      <span
        className={`text-lg font-medium ${
          mode === "light" ? "text-success" : "text-success/60"
        }`}
      >
        +{cash} ₽
      </span>
    )
  }
}

export default Cash

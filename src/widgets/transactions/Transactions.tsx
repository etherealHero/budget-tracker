import { ReactNode } from "react"
import { MotionValue, motion } from "framer-motion"
import { useAppSelector } from "../../app/store"

import { themeModel } from "../../shared"

type Props = {
  marginTop: MotionValue<number>
  children?: ReactNode
}

const Transactions = ({ marginTop, children }: Props) => {
  const { dev } = useAppSelector(themeModel.state)

  return (
    <motion.div
      style={{ marginTop }}
      className={`p-3 absolute bottom-20 top-[450px] overflow-scroll ${
        dev && "border-4 border-blue-500"
      }`}
    >
      {children}
    </motion.div>
  )
}

export default Transactions

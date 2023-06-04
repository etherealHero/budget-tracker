import { MotionValue, motion } from "framer-motion"

import { Cash, Details, Icon } from "./components"
import { usePopulatedTransactions } from "./lib"

type Props = {
  marginTop: MotionValue<number>
}

const Transactions = ({ marginTop }: Props) => {
  const [data] = usePopulatedTransactions()

  return (
    <motion.div
      style={{ marginTop }}
      className={`p-3 absolute bottom-20 top-[450px] overflow-scroll flex flex-col gap-y-5 w-full`}
    >
      {data.map((t) => {
        if (t.categoryId)
          return (
            <div className="flex gap-x-4 items-center px-2" key={t.id}>
              <Icon color={t.categoryId.color} icon={t.categoryId.icon} />
              <Details
                title={t.categoryId.title}
                date={t.date}
                description={t.description}
              />
              <Cash cash={t.cash} type={t.type} />
            </div>
          )
      })}
    </motion.div>
  )
}

export default Transactions

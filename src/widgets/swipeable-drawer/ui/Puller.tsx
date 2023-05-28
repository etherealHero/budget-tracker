import { motion } from "framer-motion"
import { useAppSelector } from "../../../app/store"

import { themeModel } from "../../../shared"

const Puller = () => {
  const { dev } = useAppSelector(themeModel.state)

  return (
    <motion.div
      className={`absolute bottom-0 left-0 right-0 h-8 rounded-b-3xl bg-base-100 flex justify-center items-end ${
        dev && "border-t-2 border-red-500"
      }`}
    >
      <div className="w-12 h-1 bg-base-content/50 rounded-box relative -top-2" />
    </motion.div>
  )
}

export default Puller

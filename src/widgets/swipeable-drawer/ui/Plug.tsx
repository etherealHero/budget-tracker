import { MotionValue, motion } from "framer-motion"
import { useAppSelector } from "../../../app/store"

import { themeModel } from "../../../shared"

type Props = {
  height: MotionValue<number>
}

const Plug = ({ height }: Props) => {
  const { dev } = useAppSelector(themeModel.state)

  return (
    <motion.div
      style={{ height }}
      className={`bg-base-100 absolute w-full ${
        dev && "border-4 border-green-600"
      }`}
    />
  )
}

export default Plug

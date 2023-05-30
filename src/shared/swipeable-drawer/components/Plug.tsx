import { MotionValue, motion } from "framer-motion"

type Props = {
  height: MotionValue<number>
}

const Plug = ({ height }: Props) => (
  <motion.div style={{ height }} className="bg-base-100 absolute w-full" />
)

export default Plug

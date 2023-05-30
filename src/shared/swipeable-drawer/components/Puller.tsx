import { motion } from "framer-motion"

const Puller = () => (
  <motion.div className="absolute bottom-0 left-0 right-0 h-8 rounded-b-3xl bg-base-100 flex justify-center items-end">
    <div className="w-12 h-1 bg-base-content/50 rounded-box relative -top-2" />
  </motion.div>
)

export default Puller

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { useAppSelector } from "../../app/store"

import { themeModel } from "../../shared"
import { useDrawerBehavior } from "./lib"
import { Plug, Puller } from "./ui"

type Props = ReturnType<typeof useDrawerBehavior> & { children?: ReactNode }

const SwipeableDrawer = (props: Props) => {
  const { dragEndHandler, isCollapsed, controls, mv, children } = props

  const { dev } = useAppSelector(themeModel.state)

  return (
    <>
      <Plug height={mv} />
      <motion.div
        style={{ y: mv }}
        drag="y"
        dragConstraints={{ bottom: 0 }}
        dragElastic={{ bottom: 0.1, top: 1 }}
        onDragEnd={dragEndHandler}
        animate={controls}
        initial={isCollapsed ? "hidden" : "visible"}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 400,
        }}
        variants={{
          visible: { y: 0 },
          hidden: { y: -370 },
        }}
        className={`bg-base-100 rounded-b-3xl absolute h-[450px] overflow-scroll ${
          dev && "border-4 border-red-500"
        }`}
      >
        <motion.div className="p-3 pb-0">{children}</motion.div>
        <Puller />
      </motion.div>
    </>
  )
}

export default SwipeableDrawer

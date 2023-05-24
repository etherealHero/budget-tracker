import { PanInfo, motion, useAnimate, useMotionValue } from "framer-motion"
import { useEffect, useState } from "react"

const SwipeableDrawer = () => {
  const y = useMotionValue(0)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [ref, animate] = useAnimate()

  const dragEndHandler = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    console.log(info.offset.y)

    if ((info.offset.y < -200 || info.velocity.y < -500) && !isCollapsed) {
      animate(ref.current, { height: "30vh" })
      setIsCollapsed(true)
    }

    if ((info.offset.y > 200 || info.velocity.y > 500) && isCollapsed) {
      animate(ref.current, { height: "auto" })
      setIsCollapsed(false)
    }
  }

  useEffect(() => {}, [isCollapsed])

  return (
    <>
      <motion.div
        style={{ height: y }}
        className="bg-base-100 absolute w-full"
      />
      <motion.div
        style={{ y }}
        className="bg-base-100 rounded-b-3xl p-3 pb-10 relative overflow-scroll"
        drag="y"
        dragElastic={1}
        dragConstraints={{ top: 0, bottom: 0 }}
        onDragEnd={dragEndHandler}
        ref={ref}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae iure
          corrupti commodi provident ipsum? Dolores obcaecati autem, architecto
          laborum odio possimus harum corporis sequi nam! Voluptate dolore
          recusandae eum harum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae iure
          corrupti commodi provident ipsum? Dolores obcaecati autem, architecto
          laborum odio possimus harum corporis sequi nam! Voluptate dolore
          recusandae eum harum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae iure
          corrupti commodi provident ipsum? Dolores obcaecati autem, architecto
          laborum odio possimus harum corporis sequi nam! Voluptate dolore
          recusandae eum harum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae iure
          corrupti commodi provident ipsum? Dolores obcaecati autem, architecto
          laborum odio possimus harum corporis sequi nam! Voluptate dolore
          recusandae eum harum.
        </p>
        <div className="absolute bottom-0 left-0 right-0 w-full h-6 bg-base-100 flex justify-center items-end">
          <div className="w-12 h-1.5 bg-base-content/50 rounded-box relative -top-2" />
        </div>
      </motion.div>
    </>
  )
}

export default SwipeableDrawer

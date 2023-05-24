import { useEffect, useState } from "react"
import { PanInfo, motion, useAnimate, useMotionValue } from "framer-motion"

const SwipeableDrawer = () => {
  const [scope, animate] = useAnimate<HTMLDivElement>()

  useEffect(() => {
    animate(scope.current, { top: "-30vh", paddingTop: "30vh" })
  }, [scope])

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const offset = info.offset.y
    const velocity = info.velocity.y

    if (offset < -100 || velocity < -500) {
      animate(scope.current, { top: "-70vh" })
    } else if (offset > 100 || velocity > 500) {
      animate(scope.current, { top: "-30vh" })
    }
  }

  return (
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
      consequatur, natus nesciunt itaque alias deserunt deleniti? Odit iusto rem
      amet beatae, facilis dolore quam blanditiis temporibus expedita accusamus
      repellendus voluptas.
    </div>
  )
}

export default SwipeableDrawer

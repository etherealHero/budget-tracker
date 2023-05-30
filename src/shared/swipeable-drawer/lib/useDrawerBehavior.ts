import { PanInfo, useAnimation, useMotionValue } from "framer-motion"
import { useCallback, useState } from "react"

export const useDrawerBehavior = () => {
  const mv = useMotionValue(0)
  const [isCollapsed, setIsCollapsed] = useState(true)
  const controls = useAnimation()

  const dragEndHandler = useCallback(
    (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (isCollapsed) {
        if (
          (info.offset.y > 150 && info.velocity.y > 0) ||
          info.velocity.y > 20
        ) {
          controls.start("visible")
          setIsCollapsed(false)
        } else {
          controls.start("hidden")
        }
      } else {
        if (
          (info.offset.y < -150 && info.velocity.y < 0) ||
          (info.velocity.y < -20 && info.offset.y < 0)
        ) {
          controls.start("hidden")
          setIsCollapsed(true)
        } else {
          controls.start("visible")
        }
      }
    },
    [isCollapsed]
  )

  return { dragEndHandler, isCollapsed, controls, mv }
}

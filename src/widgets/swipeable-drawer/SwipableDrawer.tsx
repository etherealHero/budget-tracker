import { useEffect, useState } from "react"
import { PanInfo, motion, useAnimate, useMotionValue } from "framer-motion"

const SwipableDrawer = () => {
  const [isCollapse, setIsCollapse] = useState(false)
  const pullerY = useMotionValue(0)

  const [scope, animate] = useAnimate<HTMLDivElement>()
  const [scopeContent, animateContent] = useAnimate<HTMLDivElement>()

  useEffect(() => {
    animate(scope.current, { top: "-30vh", paddingTop: "30vh" })
    animateContent(scopeContent.current, {
      height: "70vh",
    })
  }, [scope, scopeContent])

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const offset = info.offset.y
    const velocity = info.velocity.y

    if ((offset < -100 || velocity < -500) && !isCollapse) {
      animate(scope.current, { top: "-70vh", paddingTop: "70vh" })
      animateContent(scopeContent.current, {
        height: "30vh",
      })
      setIsCollapse(true)
    } else if ((offset > 100 || velocity > 500) && isCollapse) {
      animate(scope.current, { top: "-30vh", paddingTop: "30vh" })
      animateContent(scopeContent.current, {
        height: "70vh",
      })
      setIsCollapse(false)
    }
  }

  return (
    <motion.div
      style={{ y: pullerY }}
      className={`bg-base-100 rounded-b-3xl overflow-hidden relative`}
      ref={scope}
    >
      <motion.div ref={scopeContent} className="overflow-scroll px-3 pb-8 pt-3">
        <p className="text-blue-300">Lorem, ipsum. start</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illo
          expedita ipsam eius accusantium quod, aperiam officiis quam ducimus,
          quis corporis soluta, officia facere rerum deleniti ullam nostrum.
          Dicta, nisi!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, ipsum!
          Maiores nesciunt deleniti laborum quasi deserunt iure, magni vitae
          doloremque facilis nihil odio quisquam tenetur tempore ipsam provident
          dolorum mollitia.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, ipsum!
          Maiores nesciunt deleniti laborum quasi deserunt iure, magni vitae
          doloremque facilis nihil odio quisquam tenetur tempore ipsam provident
          dolorum mollitia.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, ipsum!
          Maiores nesciunt deleniti laborum quasi deserunt iure, magni vitae
          doloremque facilis nihil odio quisquam tenetur tempore ipsam provident
          dolorum mollitia.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, ipsum!
          Maiores nesciunt deleniti laborum quasi deserunt iure, magni vitae
          doloremque facilis nihil odio quisquam tenetur tempore ipsam provident
          dolorum mollitia.
        </p>
        <p className="text-red-300">Lorem, ipsum. bottom</p>
      </motion.div>
      <div className="absolute -bottom-1 w-full h-8 bg-base-100 rounded-b-3xl">
        <div className="w-9 h-2 bg-base-content/70 rounded-box mx-auto relative top-3" />
      </div>
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        onDragEnd={handleDragEnd}
        className="absolute -bottom-1 w-full h-12"
        style={{ y: pullerY }}
      ></motion.div>
    </motion.div>
  )
}

export default SwipableDrawer

import { useAppSelector } from "../../../app/store"

import { themeModel } from "../../../shared"

type Props = {
  color: string
  icon: string
}

const Icon = ({ color, icon }: Props) => {
  const { mode } = useAppSelector(themeModel.state)

  return (
    <div
      style={{
        backgroundColor: color || "yellow",
      }}
      className={`w-12 h-12 rounded-full flex justify-center items-center text-white/90 ${
        mode === "light"
          ? "opacity-80 brightness-[1.4] grayscale-[15%] contrast-[2]"
          : "grayscale-[60%] opacity-75"
      }`}
    >
      <span className="m-icon">{icon}</span>
    </div>
  )
}

export default Icon

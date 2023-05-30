import {
  ChartPieIcon,
  CogIcon,
  HomeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline"
import {
  HomeIcon as HomeIconSolid,
  ChartPieIcon as ChartPieIconSolid,
  CogIcon as CogIconSolid,
  UserCircleIcon as UserCircleIconSolid,
} from "@heroicons/react/24/solid"
import { NavLink } from "react-router-dom"

const BottomNavbar = () => {
  const classes = ({ isActive }: { isActive: boolean }) =>
    `${isActive ? "swap-active" : ""}` + " swap p-2 rounded-full bg-base-300"

  // const classes2 = ({ isActive }: { isActive: boolean }) =>
  //   `${isActive ? "text-[hsl(var(--in))] swap-active" : ""}` + " swap p-2"

  return (
    <div className="flex justify-center align-center gap-x-8 w-full text-3xl pt-3 pb-6 absolute bottom-0 text-base-content/50">
      <NavLink to="/" className={classes} style={{ fontSize: "inherit" }}>
        <HomeIconSolid className="w-7 h-7 swap-on" />
        <HomeIcon className="w-7 h-7 swap-off" />
      </NavLink>
      <NavLink
        to="/analytics"
        className={classes}
        style={{ fontSize: "inherit" }}
      >
        <ChartPieIconSolid className="w-7 h-7 swap-on" />
        <ChartPieIcon className="w-7 h-7 swap-off" />
      </NavLink>
      <NavLink
        to="/settings"
        className={classes}
        style={{ fontSize: "inherit" }}
      >
        <CogIconSolid className="w-7 h-7 swap-on" />
        <CogIcon className="w-7 h-7 swap-off" />
      </NavLink>
      <NavLink
        to="/profile"
        className={classes}
        style={{ fontSize: "inherit" }}
      >
        <UserCircleIconSolid className="w-7 h-7 swap-on" />
        <UserCircleIcon className="w-7 h-7 swap-off" />
      </NavLink>
    </div>
  )
}

export default BottomNavbar

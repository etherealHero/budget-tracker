import {
  DataUsageRounded,
  HomeRounded,
  PersonOutlineRounded,
  SettingsRounded,
} from "@mui/icons-material"
import { NavLink } from "react-router-dom"

const BottomNavbar = () => {
  const classes = ({ isActive }: { isActive: boolean }) =>
    `${isActive ? "text-[hsl(var(--a))]" : ""}` + " p-2"

  return (
    <div className="absolute bottom-7 flex justify-center align-center gap-x-8 w-full text-3xl text-base-content/70">
      <NavLink to="/" className={classes} style={{ fontSize: "inherit" }}>
        <HomeRounded sx={{ fontSize: "inherit" }} />
      </NavLink>
      <NavLink
        to="/analytics"
        className={classes}
        style={{ fontSize: "inherit" }}
      >
        <DataUsageRounded sx={{ fontSize: "inherit" }} />
      </NavLink>
      <NavLink
        to="/settings"
        className={classes}
        style={{ fontSize: "inherit" }}
      >
        <SettingsRounded sx={{ fontSize: "inherit" }} />
      </NavLink>
      <NavLink
        to="/profile"
        className={classes}
        style={{ fontSize: "inherit" }}
      >
        <PersonOutlineRounded sx={{ fontSize: "inherit" }} />
      </NavLink>
    </div>
  )
}

export default BottomNavbar

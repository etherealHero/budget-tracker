import { Switch, Typography } from "@mui/material"
import { SelectTheme, SwitchTheme } from "../features"

const MainPage = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <Typography>Select themes:</Typography>
        <SelectTheme />
        <SelectTheme variant="light" />
        <SelectTheme variant="dark" />
      </div>

      <Switch defaultChecked />
      <br />

      <SwitchTheme />
    </>
  )
}

export default MainPage

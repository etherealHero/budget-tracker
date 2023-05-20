import { SelectTheme, SwitchTheme } from "../features"

const MainPage = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <span>Select themes:</span>
        <SelectTheme />
        <SelectTheme variant="light" />
        <SelectTheme variant="dark" />
      </div>

      <br />

      <SwitchTheme />
      <input type="checkbox" className="toggle toggle-primary" />
    </>
  )
}

export default MainPage

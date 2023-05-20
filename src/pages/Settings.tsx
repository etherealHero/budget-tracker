import { SelectTheme, SwitchTheme } from "../features"
import { Palette } from "../shared"

const Settings = () => {
  return (
    <div className="flex flex-col p-2 gap-4">
      <SelectTheme className="w-full" />
      <div className="flex gap-x-2">
        <div className="w-1/2">
          <SelectTheme
            variant="light"
            className="w-full bg-gray-300 text-gray-900"
          />
        </div>
        <div className="w-1/2">
          <SelectTheme
            variant="dark"
            className="w-full bg-gray-900 text-gray-300"
          />
        </div>
      </div>

      <div className="flex items-center gap-x-4">
        Theme mode:
        <SwitchTheme />
      </div>
      <Palette />
    </div>
  )
}

export default Settings

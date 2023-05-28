import { useAppDispatch, useAppSelector } from "../../app/store"
import { themeModel } from "../../shared"

const ToggleDevMode = () => {
  const { dev } = useAppSelector(themeModel.state)
  const dispatch = useAppDispatch()

  return (
    <div className="form-control gap-y-2">
      <label className="cursor-pointer label justify-start gap-x-4">
        <span className="label-text">Dev mode</span>
        <input
          type="checkbox"
          className="toggle toggle-warning"
          onChange={() => dispatch(themeModel.toggleDevMode())}
          checked={dev}
        />
      </label>
    </div>
  )
}

export default ToggleDevMode

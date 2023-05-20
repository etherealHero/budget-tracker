import { useAppDispatch, useAppSelector } from "../../app/store"
import { themeModel } from "../../shared"
import { themes } from "./config"

type Props = {
  variant?: "light" | "dark" | "all"
  className?: string
}

const SelectTheme = ({ variant, className }: Props) => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector((state) => state.theme)
  let themesByVariant = themes

  if (variant === "light") {
    themesByVariant = themesByVariant.filter(({ mode }) => mode === "light")
  }

  if (variant === "dark") {
    themesByVariant = themesByVariant.filter(({ mode }) => mode === "dark")
  }

  return (
    <div className="dropdown dropdown-end w-full">
      <label className="label">
        {(!variant || variant === "all") && (
          <span className="label-text">Choose theme:</span>
        )}
        {variant === "dark" && <span className="label-text">Dark theme:</span>}
        {variant === "light" && (
          <span className="label-text">Light theme:</span>
        )}
      </label>
      <label tabIndex={0} className={`btn btn-sm ${className}`}>
        {(!variant || variant === "all") && theme.theme}
        {variant === "dark" && theme.dark}
        {variant === "light" && theme.light}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu menu-compact shadow bg-base-100 rounded-box max-h-60 overflow-y-scroll flex-nowrap"
      >
        {themesByVariant.map(({ theme, mode }) => (
          <li
            key={theme}
            onClick={() => dispatch(themeModel.setTheme({ theme, mode }))}
          >
            <a>{theme}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SelectTheme

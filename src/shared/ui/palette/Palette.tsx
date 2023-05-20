import { themes } from "./config"

const Palette = () => {
  return (
    <>
      <div className="max-h-52 overflow-scroll max-w-[calc(100%-16px)] m-2 border rounded-lg border-base-content">
        {themes.map((theme) => (
          <div data-theme={theme} className="flex flex-nowrap">
            <span className="uppercase w-24 inline-block shrink-0">
              {theme}
            </span>
            <div className="badge">neutral</div>
            <div className="badge badge-primary">primary</div>
            <div className="badge badge-secondary">secondary</div>
            <div className="badge badge-accent">accent</div>
            <div className="badge badge-info gap-2">info</div>
            <div className="badge badge-success gap-2">success</div>
            <div className="badge badge-warning gap-2">warning</div>
            <div className="badge badge-error gap-2">error</div>
          </div>
        ))}
      </div>
      <h4 className="text-lg font-semibold text-center">theme palette</h4>
    </>
  )
}

export default Palette

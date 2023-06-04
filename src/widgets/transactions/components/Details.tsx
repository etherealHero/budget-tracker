import dayjs from "dayjs"

type Props = {
  title: string
  date: string
  description?: string
}

const Details = (props: Props) => {
  return (
    <div className="flex-1">
      <p className="text-base-content/80">{props.title}</p>
      <span className="text-base-content/40">
        {dayjs(props.date).format("HH:mm")}
      </span>
      {props.description && (
        <span className="text-base-content/40"> | <span className="italic">{props.description}</span></span>
      )}
    </div>
  )
}

export default Details

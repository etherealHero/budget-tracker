import { RestaurantRounded } from "@mui/icons-material"

const Transaction = () => {
  return (
    <div className="flex gap-x-3 items-center px-2">
      <div className="w-12 h-12 rounded-full bg-yellow-200 flex justify-center items-center">
        <RestaurantRounded className="w-7 h-7 text-base-content/90" />
      </div>
      <div className="flex-1">
        <span className="block">Еда</span>
        <span className="text-base-content/70">16:25</span>
      </div>
      <span className="text-lg font-medium">200 ₽</span>
    </div>
  )
}

export default Transaction

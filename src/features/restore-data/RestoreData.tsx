import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/store"
import { categoryModel, transactionModel } from "../../entities"

const RestoreData = () => {
  const data = useAppSelector(categoryModel.data)
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(categoryModel.restoreData())
  }

  useEffect(() => {
    dispatch(transactionModel.restoreData(data.map((c) => c.id)))
  }, [data])

  return (
    <div className="btn btn-sm" onClick={handleClick}>
      Restore Data
    </div>
  )
}

export default RestoreData

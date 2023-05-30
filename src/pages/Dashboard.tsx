import { Transactions } from "../widgets"
import { SwipeableDrawer, useDrawerBehavior } from "../shared"
import { DatePicker } from "../features/date-picker"

const Dashboard = () => {
  const opt = useDrawerBehavior()

  return (
    <>
      <SwipeableDrawer {...opt}>
        <DatePicker />
      </SwipeableDrawer>
      <Transactions marginTop={opt.mv} />
    </>
  )
}

export default Dashboard

import { Categories, Transactions } from "../widgets"
// import { DatePicker } from "../features"
import { SwipeableDrawer, useDrawerBehavior } from "../shared"

const Dashboard = () => {
  const opt = useDrawerBehavior()

  return (
    <>
      <SwipeableDrawer {...opt}>
        {/* <DatePicker /> */}
        <br />
        <Categories />
      </SwipeableDrawer>
      <Transactions marginTop={opt.mv} />
    </>
  )
}

export default Dashboard

import { SwipeableDrawer, Transactions, useDrawerBehavior } from "../widgets"

const Dashboard = () => {
  const opt = useDrawerBehavior()

  return (
    <>
      <SwipeableDrawer {...opt}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
          blanditiis adipisci laboriosam modi quibusdam suscipit voluptas autem
          pariatur sunt consequuntur commodi, non nisi odio quae. Magnam
          consequuntur eaque cum temporibus.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
          blanditiis adipisci laboriosam modi quibusdam suscipit voluptas autem
          pariatur sunt consequuntur commodi, non nisi odio quae. Magnam
          consequuntur eaque cum temporibus.
        </p>
      </SwipeableDrawer>
      <Transactions marginTop={opt.mv}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
          assumenda eaque fugit tempore dolorum, quisquam aperiam numquam, id ut
          voluptatum placeat possimus est nobis provident facilis, dicta
          corporis. Tempore, ad.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
          assumenda eaque fugit tempore dolorum, quisquam aperiam numquam, id ut
          voluptatum placeat possimus est nobis provident facilis, dicta
          corporis. Tempore, ad.
        </p>
      </Transactions>
    </>
  )
}

export default Dashboard

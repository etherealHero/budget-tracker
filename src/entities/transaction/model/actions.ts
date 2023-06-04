import { faker } from "@faker-js/faker"

import { ETransactionType, ITransaction } from "./initialState"
import { PayloadAction } from "@reduxjs/toolkit"
import dayjs from "dayjs"

export const reducers = {
  restoreData: (
    state: ITransaction[],
    { payload: categories }: PayloadAction<string[]>
  ) => {
    state = []
    categories.forEach((c) => {
      Array.from({ length: 7 }, () => {
        state.push({
          id: faker.string.uuid(),
          type: faker.helpers.enumValue(ETransactionType),
          categoryId: c,
          cash: faker.number.int({ min: 40, max: 1500 }),
          date: dayjs(faker.date.recent({ days: 10 })).format(),
        })
      })
    })

    return state
  },
}

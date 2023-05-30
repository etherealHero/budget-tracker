import { ETransactionType, ITransaction } from "./initialState"
import transactionReducer, { transactionModel } from "./slice"

export { transactionModel, transactionReducer, ETransactionType }
export type { ITransaction }

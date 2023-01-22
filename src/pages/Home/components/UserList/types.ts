import { User } from "../../../../types"

export interface IUserListContainerProps {
  endOfUserCatalog?: boolean
}
export interface IStyledUserListProps {
  ref?: any
}

export interface IStyledMessageProps {
  width?: string
}

export interface IMessageProps {
  marginLeft?: string
}

export interface IUserListProps {
  userList: User[]
  setUserList: React.Dispatch<React.SetStateAction<User[]>>
  isSearchActive: boolean
  loadingInitialUserBatch: boolean
  preFetchedUserBatch: User[]
}

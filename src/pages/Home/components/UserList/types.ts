import { User } from "../../../../types"

export interface UserListContainerProps {
  endOfUserCatalog?: boolean
}
export interface StyledMessageProps {
  width?: string
}

export interface MessageProps {
  marginLeft?: string
}

export interface UserListProps {
  userList: User[]
  setUserList: React.Dispatch<React.SetStateAction<User[]>>
  isSearchActive: boolean
  loadingInitialUserBatch: boolean
  preFetchedUserBatch: User[]
}

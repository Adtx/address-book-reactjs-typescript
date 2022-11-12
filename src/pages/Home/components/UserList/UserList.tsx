import React, { useEffect, useRef, useState } from "react"
import { fetchUsers } from "../../../../apiUtils"
import { User } from "../../../../types"
import UserCard from "../UserCard/UserCard"
import {
  StyledUserList,
  UserListContainer,
  LoadingMessage,
  EndOfCatalogMessage,
  UserNotFoundMessage,
} from "./styles"

export const MAX_CATALOG_LENGTH = 1000
const NEW_USER_BATCH_FETCH_DELAY_IN_MS = 200

export default function UserList({
  userList,
  setUserList,
  isSearchActive,
  loadingInitialUserBatch,
  nationalities,
}: {
  userList: User[]
  setUserList: React.Dispatch<React.SetStateAction<User[]>>
  isSearchActive: boolean
  loadingInitialUserBatch: boolean
  nationalities: String[]
}) {
  const [isLoading, setIsLoading] = useState(false)
  const listRef = useRef()
  let loading = false
  const endOfCatalog = userList.length >= MAX_CATALOG_LENGTH
  const userListEmpty = userList.length === 0

  const handleScroll = async () => {
    if (loading || isSearchActive) return
    const moreUsersToLoad = userList.length < MAX_CATALOG_LENGTH
    const lastElement = (listRef.current as any).lastChild
    const pageOffset =
      window.pageYOffset + document.documentElement.clientHeight
    const endOfListReached = lastElement && lastElement.offsetTop < pageOffset

    if (moreUsersToLoad && endOfListReached) {
      loading = true
      setIsLoading(true)
      //Fetch new user batch after a small delay to allow for the 'Loading...' message to be seen
      const newUserBatch = await fetchUsers(
        nationalities,
        NEW_USER_BATCH_FETCH_DELAY_IN_MS
      )
      setUserList((userList) => [...userList, ...newUserBatch!])
      loading = false
      setIsLoading(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [userList, isSearchActive])

  return (
    <UserListContainer endOfUserCatalog={endOfCatalog}>
      <StyledUserList ref={listRef}>
        {userList.map((user) => (
          <UserCard user={user} key={user.login.md5} />
        ))}
      </StyledUserList>
      {!loadingInitialUserBatch && userListEmpty && (
        <UserNotFoundMessage>
          Couldn't find a user by that name.
        </UserNotFoundMessage>
      )}
      {isLoading && <LoadingMessage />}
      {endOfCatalog && <EndOfCatalogMessage />}
    </UserListContainer>
  )
}

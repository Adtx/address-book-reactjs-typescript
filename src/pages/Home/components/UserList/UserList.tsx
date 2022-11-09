import React, { useEffect, useRef, useState } from "react"
import { fetchUsers } from "../../../../apiUtils"
import { User } from "../../../../types"
import UserCard from "../UserCard/UserCard"
import {
  StyledUserList,
  UserListContainer,
  LoadingMessage,
  EndOfCatalogMessage,
} from "./styles"

export const MAX_CATALOG_LENGTH = 1000
const NEW_USER_BATCH_FETCH_DELAY_IN_MS = 200

export default function UserList({
  userList,
  setUserList,
}: {
  userList: User[]
  setUserList: React.Dispatch<React.SetStateAction<User[]>>
}) {
  const [isLoading, setIsLoading] = useState(false)
  const listRef = useRef()
  let loading = false
  const endOfCatalog = userList.length >= MAX_CATALOG_LENGTH

  const handleScroll = async () => {
    if (loading) return
    const moreUsersToLoad = userList.length < MAX_CATALOG_LENGTH
    const lastElement = (listRef.current as any).lastChild
    const pageOffset =
      window.pageYOffset + document.documentElement.clientHeight
    const endOfListReached = lastElement && lastElement.offsetTop < pageOffset

    if (moreUsersToLoad && endOfListReached) {
      loading = true
      setIsLoading(true)
      //Fetch new user batch after a small delay to allow for the 'Loading...' message to be seen
      const newUserBatch = await fetchUsers(NEW_USER_BATCH_FETCH_DELAY_IN_MS)
      setUserList((userList) => [...userList, ...newUserBatch!])
      loading = false
      setIsLoading(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [userList])

  return (
    <UserListContainer endOfUserCatalog={endOfCatalog}>
      <StyledUserList ref={listRef}>
        {userList.map((user) => (
          <UserCard user={user} key={user.login.md5} />
        ))}
      </StyledUserList>
      {isLoading && <LoadingMessage />}
      {endOfCatalog && <EndOfCatalogMessage />}
    </UserListContainer>
  )
}

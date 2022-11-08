import React, { useEffect, useRef } from "react"
import { fetchUsers } from "../../../../apiUtils"
import { User } from "../../../../types"
import UserCard from "../UserCard/UserCard"
import { StyledUserList, UserListContainer } from "./styles"

const MAX_CATALOG_LENGTH = 1000

export default function UserList({
  userList,
  setUserList,
}: {
  userList: User[]
  setUserList: React.Dispatch<React.SetStateAction<User[]>>
}) {
  const listRef = useRef()
  let loading = false

  const handleScroll = async () => {
    if (loading) return
    const moreUsersToLoad = userList.length < MAX_CATALOG_LENGTH
    const lastElement = (listRef.current as any).lastChild
    const pageOffset =
      window.pageYOffset + document.documentElement.clientHeight
    const endOfListReached = lastElement && lastElement.offsetTop < pageOffset

    if (moreUsersToLoad && endOfListReached) {
      loading = true
      const newUserBatch = await fetchUsers()
      setUserList((userList) => [...userList, ...newUserBatch!])
      loading = false
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [userList])

  return (
    <UserListContainer>
      <StyledUserList ref={listRef}>
        {userList.map((user) => (
          <UserCard user={user} key={user.login.md5} />
        ))}
      </StyledUserList>
    </UserListContainer>
  )
}

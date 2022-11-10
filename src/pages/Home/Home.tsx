import { useEffect, useState } from "react"
import { fetchUsers } from "../../apiUtils"
import { User } from "../../types"
import Search from "./components/Search/Search"
import { LoadingMessage } from "./components/UserList/styles"
import UserList from "./components/UserList/UserList"
import { StyledHome } from "./styles"

export default function Home() {
  const [userList, setUserList] = useState<User[]>([])
  const [loadingInitialUserBatch, setLoadingInitialUserBatch] = useState(false)
  const [filteredUserList, setFilteredUserList] = useState<User[] | null>(null)
  const isSearchActive = filteredUserList !== null

  useEffect(() => {
    setLoadingInitialUserBatch(true)
    fetchUsers().then((userList) => {
      setUserList(userList!)
      setLoadingInitialUserBatch(false)
    })
  }, [])

  return (
    <StyledHome>
      <Search userList={userList} setFilteredUserList={setFilteredUserList} />
      <UserList
        userList={filteredUserList || userList}
        setUserList={setUserList}
        isSearchActive={isSearchActive}
      />
      {loadingInitialUserBatch && <LoadingMessage />}
    </StyledHome>
  )
}

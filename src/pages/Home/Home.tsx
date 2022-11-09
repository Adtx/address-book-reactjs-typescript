import { useEffect, useState } from "react"
import { fetchUsers } from "../../apiUtils"
import { User } from "../../types"
import { LoadingMessage } from "./components/UserList/styles"
import UserList from "./components/UserList/UserList"
import { StyledHome } from "./styles"

export default function Home() {
  const [userList, setUserList] = useState<User[]>([])
  const [loadingInitialUserBatch, setLoadingInitialUserBatch] = useState(false)

  useEffect(() => {
    setLoadingInitialUserBatch(true)
    fetchUsers().then((userList) => {
      setUserList(userList!)
      setLoadingInitialUserBatch(false)
    })
  }, [])

  return (
    <StyledHome>
      <UserList userList={userList} setUserList={setUserList} />
      {loadingInitialUserBatch && <LoadingMessage />}
    </StyledHome>
  )
}

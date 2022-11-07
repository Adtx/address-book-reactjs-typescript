import { useEffect, useState } from "react"
import { fetchUsers } from "../../apiUtils"
import { User } from "../../types"
import UserList from "./components/UserList/UserList"
import { StyledHome } from "./styles"

export default function Home() {
  const [userList, setUserList] = useState<User[]>([])

  useEffect(() => {
    fetchUsers().then((userList) => {
      setUserList(userList!)
    })
  }, [])

  return (
    <StyledHome>
      <UserList userList={userList} />
    </StyledHome>
  )
}

import React, { useEffect, useState } from "react"
import { fetchUsers } from "../../apiUtils"
import { User } from "../../types"
import UserList from "./components/UserList/UserList"

export default function Home() {
  const [userList, setUserList] = useState<User[]>([])

  useEffect(() => {
    fetchUsers().then((userList) => {
      setUserList(userList!)
    })
  }, [])

  return <UserList userList={userList} />
}

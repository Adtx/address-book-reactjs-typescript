import { useEffect, useState } from "react"
import { fetchUsers } from "../../apiUtils"
import { Navbar } from "../../components/shared/Navbar/Navbar"
import { User } from "../../types"
import Search from "./components/Search/Search"
import { LoadingMessage } from "./components/UserList/styles"
import UserList from "./components/UserList/UserList"
import { StyledHome } from "./styles"
import { IHomeProps } from "./types"

export default function Home(props: IHomeProps) {
  const [userList, setUserList] = useState<User[]>([])
  const [loadingInitialUserBatch, setLoadingInitialUserBatch] = useState(false)
  const [filteredUserList, setFilteredUserList] = useState<User[] | null>(null)
  const isSearchActive = filteredUserList !== null

  useEffect(() => {
    setLoadingInitialUserBatch(true)
    fetchUsers(props.nationalities).then((userList) => {
      setUserList(userList!)
      setLoadingInitialUserBatch(false)
    })
  }, [props.nationalities])

  return (
    <>
      <Navbar />
      <StyledHome>
        <Search userList={userList} setFilteredUserList={setFilteredUserList} />
        <UserList
          userList={filteredUserList || userList}
          setUserList={setUserList}
          isSearchActive={isSearchActive}
          loadingInitialUserBatch={loadingInitialUserBatch}
          nationalities={props.nationalities}
        />
        {loadingInitialUserBatch && <LoadingMessage />}
      </StyledHome>
    </>
  )
}

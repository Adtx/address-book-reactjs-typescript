import { useEffect, useRef, useState } from "react"
import { fetchUsers } from "../../apiUtils"
import Navbar from "../../components/shared/Navbar/Navbar"
import { User } from "../../types"
import Search from "./components/Search/Search"
import { LoadingMessage } from "./components/UserList/styles"
import UserList from "./components/UserList/UserList"
import { StyledHome } from "./styles"
import { IHomeProps } from "./types"

const Home = ({ nationalities }: IHomeProps) => {
  const [userList, setUserList] = useState<User[]>([])
  const [loadingInitialUserBatch, setLoadingInitialUserBatch] = useState(false)
  const [filteredUserList, setFilteredUserList] = useState<User[] | null>(null)
  const [preFetchedUserBatch, setPreFetchedUserBatch] = useState<User[]>([])
  const isSearchActive = filteredUserList !== null
  const apiResultsPageCount = useRef(1)

  useEffect(() => {
    setLoadingInitialUserBatch(true)
    fetchUsers(nationalities!).then((userList) => {
      setUserList(userList!)
      setLoadingInitialUserBatch(false)
    })
  }, [nationalities])

  //Pre-fetch next batch of users
  useEffect(() => {
    fetchUsers(nationalities, apiResultsPageCount.current).then(
      (preFetchedBatch) => {
        setPreFetchedUserBatch(preFetchedBatch!)
        apiResultsPageCount.current++
      }
    )
  }, [userList])

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
          preFetchedUserBatch={preFetchedUserBatch}
        />
        {loadingInitialUserBatch && <LoadingMessage />}
      </StyledHome>
    </>
  )
}

export default Home

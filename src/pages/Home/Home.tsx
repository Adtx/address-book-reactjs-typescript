import { useEffect, useRef, useState } from "react"
import { fetchUsers } from "../../apiUtils"
import { User } from "../../types"
import Search from "./components/Search"
import { LoadingMessage } from "./components/UserList/UserList"
import UserList from "./components/UserList/UserList"
import styled from "styled-components"

const StyledHome = styled.main`
  align-items: center;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
interface HomeProps {
  nationalities?: String[]
}

const Home = ({ nationalities }: HomeProps) => {
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

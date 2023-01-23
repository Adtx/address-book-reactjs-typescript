import { useEffect, useRef, useState } from "react"
import { User } from "../../../../types"
import UserCard from "../UserCard/UserCard"
import UserDetailsModal from "../UserDetailsModal/UserDetailsModal"
import { nanoid } from "nanoid"
import styled from "styled-components"
import spinner from "./spinner.gif"

const UserListContainer = styled.div<UserListContainerProps>`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => (props.endOfUserCatalog ? "30px" : "0px")};
  position: relative;
  width: 100%;
`

const StyledUserList = styled.section`
  display: inline-flex;
  flex-wrap: wrap;
  width: 70%;

  @media (max-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`

const LoadingMessageContainer = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  bottom: 0;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: 2;
`

const StyledMessage = styled.div<StyledMessageProps>`
  align-items: center;
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  display: flex;
  height: 50px;
  justify-content: center;
  left: 50%;
  margin-left: 2.5%;
  margin-top: 30px;
  position: fixed;
  text-align: center;
  top: 50%;
  transform: translateX(-50%);
  width: ${(props) => props.width ?? "initial"};
`

const SpinnerContainer = styled.div`
  display: inline-block;
  height: 100%;
  overflow: hidden;
`

const Spinner = styled.img`
  height: 100%;
  transform: scale(3.5);
`

const Message = styled.h1<MessageProps>`
  margin-left: ${(props) => props.marginLeft ?? "0"};
`

export const LoadingMessage = () => {
  return (
    <LoadingMessageContainer>
      <StyledMessage width="25%">
        <SpinnerContainer>
          <Spinner src={spinner} alt="Loading..." />
        </SpinnerContainer>
        <Message marginLeft={"10px"}>Loading...</Message>
      </StyledMessage>
    </LoadingMessageContainer>
  )
}

const EndOfCatalogMessage = () => {
  return (
    <StyledMessage width="70%">
      <Message>End of users catalog</Message>
    </StyledMessage>
  )
}

const UserNotFoundMessage = styled.h2`
  position: fixed;
  top: 15%;
`

interface UserListContainerProps {
  endOfUserCatalog?: boolean
}
interface StyledMessageProps {
  width?: string
}

interface MessageProps {
  marginLeft?: string
}

interface UserListProps {
  userList: User[]
  setUserList: React.Dispatch<React.SetStateAction<User[]>>
  isSearchActive: boolean
  loadingInitialUserBatch: boolean
  preFetchedUserBatch: User[]
}

export const MAX_CATALOG_LENGTH = 1000
const NEW_USER_BATCH_FETCH_DELAY_IN_MS = 200

const UserList = ({
  userList,
  setUserList,
  isSearchActive,
  loadingInitialUserBatch,
  preFetchedUserBatch,
}: UserListProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [clickedUser, setClickedUser] = useState<User | null>(null)
  const listRef = useRef<HTMLElement>(null)
  let loading = false
  const endOfCatalog = userList.length >= MAX_CATALOG_LENGTH
  const userListEmpty = userList.length === 0

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [userList, isSearchActive])

  //Disable scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "unset"
  }, [showModal])

  const handleScroll = async () => {
    if (loading || isSearchActive) return
    const moreUsersToLoad = userList.length < MAX_CATALOG_LENGTH
    const lastElement = listRef.current!.lastChild as HTMLElement
    const pageOffset =
      window.pageYOffset + document.documentElement.clientHeight
    const endOfListReached = lastElement && lastElement.offsetTop < pageOffset

    if (moreUsersToLoad && endOfListReached) {
      loading = true
      setIsLoading(true)
      //Wait before adding the pre-fetched user batch to allow for the 'Loading...' message to be seen
      await new Promise((r) => setTimeout(r, NEW_USER_BATCH_FETCH_DELAY_IN_MS))
      setUserList((userList) => [...userList, ...preFetchedUserBatch!])
      loading = false
      setIsLoading(false)
    }
  }

  const displayUserDetailsModal = (user: User) => {
    setShowModal(true)
    setClickedUser(user)
  }

  const closeUserDetailsModal = () => setShowModal(false)

  return (
    <UserListContainer endOfUserCatalog={endOfCatalog}>
      <StyledUserList ref={listRef}>
        {userList.map((user) => (
          <UserCard
            user={user}
            key={nanoid()}
            onClick={() => displayUserDetailsModal(user)}
          />
        ))}
      </StyledUserList>
      {!loadingInitialUserBatch && userListEmpty && (
        <UserNotFoundMessage>
          Couldn't find a user by that name.
        </UserNotFoundMessage>
      )}
      {showModal && (
        <UserDetailsModal user={clickedUser!} onClick={closeUserDetailsModal} />
      )}
      {isLoading && <LoadingMessage />}
      {endOfCatalog && <EndOfCatalogMessage />}
    </UserListContainer>
  )
}

export default UserList

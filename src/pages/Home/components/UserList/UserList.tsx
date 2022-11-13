import { useEffect, useRef, useState } from "react"
import { User } from "../../../../types"
import UserCard from "../UserCard/UserCard"
import UserDetailsModal from "../UserDetailsModal/UserDetailsModal"
import {
  StyledUserList,
  UserListContainer,
  LoadingMessage,
  EndOfCatalogMessage,
  UserNotFoundMessage,
} from "./styles"
import { IUserListProps } from "./types"
import { nanoid } from "nanoid"

export const MAX_CATALOG_LENGTH = 1000
const NEW_USER_BATCH_FETCH_DELAY_IN_MS = 200

const UserList = ({
  userList,
  setUserList,
  isSearchActive,
  loadingInitialUserBatch,
  preFetchedUserBatch,
}: IUserListProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [clickedUser, setClickedUser] = useState<User | null>(null)
  const listRef = useRef()
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
    const lastElement = (listRef.current as any).lastChild
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

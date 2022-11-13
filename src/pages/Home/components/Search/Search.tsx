import React, { useState } from "react"
import { User } from "../../../../types"
import * as S from "./styles"
import { TfiSearch } from "react-icons/tfi"

const Search = ({
  userList,
  setFilteredUserList,
}: {
  userList: User[]
  setFilteredUserList: React.Dispatch<React.SetStateAction<User[] | null>>
}) => {
  const [displayLoadingPausedMessage, setDisplayLoadingPausedMessage] =
    useState(false)

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    if (!inputValue) {
      setFilteredUserList(null)
      setDisplayLoadingPausedMessage(false)
      return
    }

    const filteredUserList = userList.filter((user) => {
      const userFullName = `${user.name.first} ${user.name.last}`

      return userFullName.toLowerCase().includes(inputValue.toLowerCase())
    })

    setFilteredUserList(filteredUserList)
    setDisplayLoadingPausedMessage(true)
  }

  return (
    <>
      <S.SearchInputContainer>
        <S.IconContainer>
          <TfiSearch />
        </S.IconContainer>
        <S.SearchInput
          type="text"
          placeholder="Search users by name"
          onChange={inputChangeHandler}
        />
        {displayLoadingPausedMessage && (
          <S.LoadingPausedMessage>
            User loading has been paused.
          </S.LoadingPausedMessage>
        )}
      </S.SearchInputContainer>
    </>
  )
}

export default Search

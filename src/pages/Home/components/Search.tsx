import React, { useState } from "react"
import { User } from "../../../types"
import { TfiSearch } from "react-icons/tfi"
import styled from "styled-components"

export const SearchInputContainer = styled.div`
  align-items: center;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 32px;
  box-shadow: 0 1px 6px rgba(28, 33, 39, 0.1);
  display: flex;
  margin: 1rem 0;
  padding: 0.375rem 0.75rem;
  position: sticky;
  top: 15px;
  width: 45%;
  z-index: 1;
`

const IconContainer = styled.div`
  padding-left: 0.4rem;
  padding-right: 0.6rem;
`

const SearchInput = styled.input`
  border: 0;
  background-color: #fff;
  background-clip: padding-box;
  color: #495057;
  display: block;
  font-size: 1rem;
  font-weight: 400;
  line-height: 2;
  outline: 0;
  padding: 0;
  width: 75%;
`

const LoadingPausedMessage = styled.p`
  color: #6c757d;
  font-size: 80%;
`

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
      <SearchInputContainer>
        <IconContainer>
          <TfiSearch />
        </IconContainer>
        <SearchInput
          type="text"
          placeholder="Search users by name"
          onChange={inputChangeHandler}
        />
        {displayLoadingPausedMessage && (
          <LoadingPausedMessage>
            User loading has been paused.
          </LoadingPausedMessage>
        )}
      </SearchInputContainer>
    </>
  )
}

export default Search

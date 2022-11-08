import styled from "styled-components"
import { IStyledUserListProps } from "./types"

export const UserListContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const StyledUserList = styled.section<IStyledUserListProps>`
  display: inline-flex;
  flex-wrap: wrap;
  max-width: 70%;
`

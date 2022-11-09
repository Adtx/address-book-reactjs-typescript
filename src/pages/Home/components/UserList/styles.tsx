import styled from "styled-components"
import { IStyledUserListProps } from "./types"
import spinner from "./spinner.gif"

export const UserListContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`

export const StyledUserList = styled.section<IStyledUserListProps>`
  display: inline-flex;
  flex-wrap: wrap;
  max-width: 70%;
`

const LoadingMessageContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`

const StyledLoadingMessage = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 50px;
  text-align: center;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #eaeaea;
`

const SpinnerContainer = styled.div`
  display: inline-block;
  overflow: hidden;
  height: 100%;
`

const Spinner = styled.img`
  height: 100%;
  transform: scale(3.5);
`

const Message = styled.h1`
  margin-left: 10px;
`

export function LoadingMessage() {
  return (
    <LoadingMessageContainer>
      <StyledLoadingMessage>
        <SpinnerContainer>
          <Spinner src={spinner} alt="Loading..." />
        </SpinnerContainer>
        <Message>Loading...</Message>
      </StyledLoadingMessage>
    </LoadingMessageContainer>
  )
}

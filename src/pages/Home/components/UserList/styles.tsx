import styled from "styled-components"
import {
  IMessageProps,
  IStyledMessageProps,
  IStyledUserListProps,
  IUserListContainerProps,
} from "./types"
import spinner from "./spinner.gif"

export const UserListContainer = styled.div<IUserListContainerProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${(props) => (props.endOfUserCatalog ? "30px" : "0px")};
  width: 100%;
`

export const StyledUserList = styled.section<IStyledUserListProps>`
  display: inline-flex;
  flex-wrap: wrap;
  width: 70%;
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
  z-index: 2;
`

const StyledMessage = styled.div<IStyledMessageProps>`
  position: ${(props) => props.position ?? "relative"};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: ${(props) => props.transform ?? "initial"};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 50px;
  text-align: center;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #eaeaea;
  width: ${(props) => props.width ?? "initial"};
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};
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

const Message = styled.h1<IMessageProps>`
  margin-left: ${(props) => props.marginLeft ?? "0"};
`

export function LoadingMessage() {
  return (
    <LoadingMessageContainer>
      <StyledMessage
        position="fixed"
        top="50%"
        left="50%"
        width="25%"
        transform="translateX(-50%)"
      >
        <SpinnerContainer>
          <Spinner src={spinner} alt="Loading..." />
        </SpinnerContainer>
        <Message marginLeft={"10px"}>Loading...</Message>
      </StyledMessage>
    </LoadingMessageContainer>
  )
}

export function EndOfCatalogMessage() {
  return (
    <StyledMessage width="70%" marginTop="30px" marginLeft="2.5%">
      <Message>End of users catalog</Message>
    </StyledMessage>
  )
}

export const UserNotFoundMessage = styled.h2`
  position: fixed;
  top: 15%;
`

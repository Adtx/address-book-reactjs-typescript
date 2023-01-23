import styled from "styled-components"
import * as T from "./types"
import spinner from "./spinner.gif"

export const UserListContainer = styled.div<T.UserListContainerProps>`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => (props.endOfUserCatalog ? "30px" : "0px")};
  position: relative;
  width: 100%;
`

export const StyledUserList = styled.section`
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

const StyledMessage = styled.div<T.StyledMessageProps>`
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

const Message = styled.h1<T.MessageProps>`
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

export const EndOfCatalogMessage = () => {
  return (
    <StyledMessage width="70%">
      <Message>End of users catalog</Message>
    </StyledMessage>
  )
}

export const UserNotFoundMessage = styled.h2`
  position: fixed;
  top: 15%;
`

import styled from "styled-components"
import { IUserDetailsProps } from "./types"

export const UserDetailsContainer = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  bottom: 0;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  width: 100vw;
  z-index: 2;

  @media (max-width: 630px) {
    background-color: #f8f9fa;
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 7%;
    z-index: 1;
  }
`

export const UserDetails = styled.article<IUserDetailsProps>`
  align-items: center;
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: ${(props) => props.left};
  margin-left: ${(props) => props.marginLeft};
  margin-top: ${(props) => props.marginTop};
  min-height: 60vh;
  position: ${(props) => props.position ?? "relative"};
  text-align: center;
  top: ${(props) => props.top};
  transform: ${(props) => props.transform ?? "initial"};
  width: 25%;

  @media (max-width: 1450px) {
    width: 40%;
  }

  @media (max-width: 1025px) {
    width: 55%;
  }

  @media (max-width: 630px) {
    align-items: center;
    position: fixed;
    top: 10%;
    width: 85vw;
    z-index: 1;
  }

  @media (max-height: 625px) {
    top: 5%;
  }
`

export const CloseButtonArea = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4%;
  margin-top: 2%;

  @media (min-width: 631px) {
    display: none;
  }
`

export const CloseButton = styled.div`
  & > * {
    transform: scale(1.5);
  }

  &:hover {
    cursor: pointer;
  }
`

export const Picture = styled.img`
  border-radius: 50%;
  height: 100px;
  margin-top: 5px;
  width: 100px;
`

export const UserName = styled.p`
  color: #6c757d;
  font-size: 80%;
  margin-bottom: 0.4rem;
`

export const ProfileContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 20%;
`

export const Detail = styled.p`
  color: #6c757d;
  font-size: 95%;
  margin-bottom: 5px;
`

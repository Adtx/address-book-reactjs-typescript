import styled from "styled-components"
import { IUserDetailsProps } from "./types"

export const UserDetailsContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;

  @media (max-width: 630px) {
    background-color: #f8f9fa;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    top: 7%;
    z-index: 1;
  }
`

export const UserDetails = styled.article<IUserDetailsProps>`
  position: ${(props) => props.position ?? "relative"};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: ${(props) => props.transform ?? "initial"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  min-height: 60vh;
  text-align: center;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #eaeaea;
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};

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
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 5px;
`

export const UserName = styled.p`
  font-size: 80%;
  color: #6c757d;
  margin-bottom: 0.4rem;
`

export const ProfileContainer = styled.div`
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Detail = styled.p`
  color: #6c757d;
  font-size: 95%;
  margin-bottom: 5px;
`

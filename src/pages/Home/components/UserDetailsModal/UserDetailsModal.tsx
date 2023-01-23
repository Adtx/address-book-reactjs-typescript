import { SlClose } from "react-icons/sl"
import styled from "styled-components"
import { User } from "../../../../types"

const UserDetailsContainer = styled.div`
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

const UserDetails = styled.article`
  align-items: center;
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 50%;
  min-height: 60vh;
  position: fixed;
  text-align: center;
  top: 25%;
  transform: translateX(-50%);
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

const CloseButtonArea = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4%;
  margin-top: 2%;

  @media (min-width: 631px) {
    display: none;
  }
`

const CloseButton = styled.div`
  & > * {
    transform: scale(1.5);
  }

  &:hover {
    cursor: pointer;
  }
`

interface UserDetailsModalProps {
  user: User
  onClick: () => void
}

const Picture = styled.img`
  border-radius: 50%;
  height: 100px;
  margin-top: 5px;
  width: 100px;
`

const UserName = styled.p`
  color: #6c757d;
  font-size: 80%;
  margin-bottom: 0.4rem;
`

const ProfileContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 20%;
`

const Detail = styled.p`
  color: #6c757d;
  font-size: 95%;
  margin-bottom: 5px;
`

const UserDetailsModal = ({ user, onClick }: UserDetailsModalProps) => {
  return (
    <UserDetailsContainer
      data-testid={"userdetailscontainer"}
      onClick={onClick}
    >
      <UserDetails onClick={(e) => e.stopPropagation()}>
        <div>
          <CloseButtonArea>
            <CloseButton onClick={onClick} data-testid="closebutton">
              <SlClose />
            </CloseButton>
          </CloseButtonArea>
          <h2 data-testid="modalfullname">{`${user.name.first} ${user.name.last}`}</h2>
          <Picture src={user.picture.thumbnail} alt="Profile picture" />
          <UserName data-testid="modalusername">{user.login.username}</UserName>
          <ProfileContainer>
            <h4>Email</h4>
            <Detail>{user.email}</Detail>
            <h4>Street</h4>
            <Detail>{user.location.street.name}</Detail>
            <h4>City</h4>
            <Detail>{user.location.city}</Detail>
            <h4>State</h4>
            <Detail>{user.location.state}</Detail>
            <h4>Postcode</h4>
            <Detail>{user.location.postcode}</Detail>
            <h4>Country</h4>
            <Detail data-testid={"usernationality"}>
              {user.location.country}
            </Detail>
            <h4>Phone</h4>
            <Detail>{user.phone}</Detail>
            <h4>Cell</h4>
            <Detail>{user.cell}</Detail>
          </ProfileContainer>
        </div>
      </UserDetails>
    </UserDetailsContainer>
  )
}

export default UserDetailsModal

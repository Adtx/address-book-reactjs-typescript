import styled from "styled-components"
import { User } from "../../../types"

const StyledUserCard = styled.article`
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  display: flex;
  margin: 5px 0 5px 3.33%;
  padding: 1rem;
  width: 30%;

  &:hover {
    cursor: pointer;
    box-shadow: 0 1px 6px 2px rgba(28, 33, 39, 0.1);
  }

  @media (max-width: 1280px) {
    width: 100%;
  }
`
const PictureContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 33%;
`

const Picture = styled.img`
  border-radius: 50%;
  height: 70px;
  width: 70px;
`

const ProfileContainer = styled.div`
  width: 66%;
`

const UserName = styled.p`
  color: #6c757d;
  font-size: 80%;
  margin-bottom: 0.4rem;
`

const Email = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

interface UserCardProps {
  user: User
  onClick: () => void
}

const UserCard = ({ user, onClick }: UserCardProps) => {
  return (
    <StyledUserCard onClick={onClick}>
      <PictureContainer>
        <Picture src={user.picture.thumbnail} alt="Profile picture" />
      </PictureContainer>
      <ProfileContainer>
        <h3 data-testid="fullname">{`${user.name.first} ${user.name.last}`}</h3>
        <UserName data-testid="username">{user.login.username}</UserName>
        <Email>{user.email}</Email>
      </ProfileContainer>
    </StyledUserCard>
  )
}

export default UserCard

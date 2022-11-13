import * as S from "./styles"
import { IUserCardProps } from "./types"

const UserCard = ({ user, onClick }: IUserCardProps) => {
  return (
    <S.StyledUserCard onClick={onClick}>
      <S.PictureContainer>
        <S.Picture src={user.picture.thumbnail} alt="Profile picture" />
      </S.PictureContainer>
      <S.ProfileContainer>
        <h3 data-testid="fullname">{`${user.name.first} ${user.name.last}`}</h3>
        <S.UserName data-testid="username">{user.login.username}</S.UserName>
        <S.Email>{user.email}</S.Email>
      </S.ProfileContainer>
    </S.StyledUserCard>
  )
}

export default UserCard

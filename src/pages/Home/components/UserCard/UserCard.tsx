import { User } from "../../../../types"
import * as S from "./styles"
import { IUserCardProps } from "./types"

export default function UserCard(props: IUserCardProps) {
  return (
    <S.StyledUserCard key={props.user.login.md5} onClick={props.onClick}>
      <S.PictureContainer>
        <S.Picture src={props.user.picture.thumbnail} alt="Profile picture" />
      </S.PictureContainer>
      <S.ProfileContainer>
        <h3 data-testid="fullname">{`${props.user.name.first} ${props.user.name.last}`}</h3>
        <S.UserName data-testid="username">
          {props.user.login.username}
        </S.UserName>
        <S.Email>{props.user.email}</S.Email>
      </S.ProfileContainer>
    </S.StyledUserCard>
  )
}

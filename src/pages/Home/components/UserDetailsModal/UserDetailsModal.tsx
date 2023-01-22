import * as S from "./styles"
import { SlClose } from "react-icons/sl"
import { UserDetailsModalProps } from "./types"

const UserDetailsModal = ({ user, onClick }: UserDetailsModalProps) => {
  return (
    <S.UserDetailsContainer
      data-testid={"userdetailscontainer"}
      onClick={onClick}
    >
      <S.UserDetails onClick={(e) => e.stopPropagation()}>
        <div>
          <S.CloseButtonArea>
            <S.CloseButton onClick={onClick} data-testid="closebutton">
              <SlClose />
            </S.CloseButton>
          </S.CloseButtonArea>
          <h2 data-testid="modalfullname">{`${user.name.first} ${user.name.last}`}</h2>
          <S.Picture src={user.picture.thumbnail} alt="Profile picture" />
          <S.UserName data-testid="modalusername">
            {user.login.username}
          </S.UserName>
          <S.ProfileContainer>
            <h4>Email</h4>
            <S.Detail>{user.email}</S.Detail>
            <h4>Street</h4>
            <S.Detail>{user.location.street.name}</S.Detail>
            <h4>City</h4>
            <S.Detail>{user.location.city}</S.Detail>
            <h4>State</h4>
            <S.Detail>{user.location.state}</S.Detail>
            <h4>Postcode</h4>
            <S.Detail>{user.location.postcode}</S.Detail>
            <h4>Country</h4>
            <S.Detail data-testid={"usernationality"}>
              {user.location.country}
            </S.Detail>
            <h4>Phone</h4>
            <S.Detail>{user.phone}</S.Detail>
            <h4>Cell</h4>
            <S.Detail>{user.cell}</S.Detail>
          </S.ProfileContainer>
        </div>
      </S.UserDetails>
    </S.UserDetailsContainer>
  )
}

export default UserDetailsModal

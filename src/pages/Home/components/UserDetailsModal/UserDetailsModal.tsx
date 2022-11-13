import * as S from "./styles"
import { IUserDetailsModalProps } from "./types"

const UserDetailsModal = ({ user, onClick }: IUserDetailsModalProps) => {
  return (
    <S.UserDetailsContainer
      data-testid={"userdetailscontainer"}
      onClick={onClick}
    >
      <S.UserDetails
        position="fixed"
        top="25%"
        left="50%"
        transform="translateX(-50%)"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
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

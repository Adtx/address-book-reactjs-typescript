import React from "react"
import * as S from "./styles"
import { IUserDetailsModalProps } from "./types"

export function UserDetailsModal(props: IUserDetailsModalProps) {
  return (
    <S.UserDetailsContainer onClick={props.onClick}>
      <S.UserDetails
        position="fixed"
        top="25%"
        left="50%"
        transform="translateX(-50%)"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <h2 data-testid="modalfullname">{`${props.user.name.first} ${props.user.name.last}`}</h2>
          <S.Picture src={props.user.picture.thumbnail} alt="Profile picture" />
          <S.UserName data-testid="modalusername">
            {props.user.login.username}
          </S.UserName>
          <S.ProfileContainer>
            <h4>Email</h4>
            <S.Detail>{props.user.email}</S.Detail>
            <h4>Street</h4>
            <S.Detail>{props.user.location.street.name}</S.Detail>
            <h4>City</h4>
            <S.Detail>{props.user.location.city}</S.Detail>
            <h4>State</h4>
            <S.Detail>{props.user.location.state}</S.Detail>
            <h4>Postcode</h4>
            <S.Detail>{props.user.location.postcode}</S.Detail>
            <h4>Country</h4>
            <S.Detail>{props.user.location.country}</S.Detail>
            <h4>Phone</h4>
            <S.Detail>{props.user.phone}</S.Detail>
            <h4>Cell</h4>
            <S.Detail>{props.user.cell}</S.Detail>
          </S.ProfileContainer>
        </div>
      </S.UserDetails>
    </S.UserDetailsContainer>
  )
}

import { User } from "../../../../types"

export interface IUserDetailsModalProps {
  user: User
}

export interface IUserDetailsProps {
  position?: string
  top?: string
  bottom?: string
  left?: string
  right?: string
  width?: string
  height?: string
  marginTop?: string
  marginLeft?: string
  transform?: string
}

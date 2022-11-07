import { User } from "../../../../types"
import UserCard from "../UserCard/UserCard"
import { StyledUserList, UserListContainer } from "./styles"

export default function UserList({ userList }: { userList: User[] }) {
  return (
    <UserListContainer>
      <StyledUserList>
        {userList.map((user) => (
          <UserCard user={user} key={user.login.md5} />
        ))}
      </StyledUserList>
    </UserListContainer>
  )
}

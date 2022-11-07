import { User } from "../../../../types"
import UserCard from "../UserCard/UserCard"

export default function UserList({ userList }: { userList: User[] }) {
  return (
    <section>
      {userList.map((user) => (
        <UserCard user={user} key={user.login.md5} />
      ))}
    </section>
  )
}

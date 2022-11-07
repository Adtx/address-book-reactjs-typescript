import { User } from "../../../../types"

export default function UserList({ userList }: { userList: User[] }) {
  return (
    <section>
      {userList.map((user) => (
        <article key={user.login.md5}>
          <img src={user.picture.thumbnail} alt="Profile picture" />
          <h3>{`${user.name.first} ${user.name.last}`}</h3>
          <p data-testid="username">{user.login.username}</p>
          <p>{user.email}</p>
        </article>
      ))}
    </section>
  )
}

import React from "react"
import { User } from "../../../../types"

export default function UserCard({ user }: { user: User }) {
  return (
    <article>
      <img src={user.picture.thumbnail} alt="Profile picture" />
      <h3>{`${user.name.first} ${user.name.last}`}</h3>
      <p data-testid="username">{user.login.username}</p>
      <p>{user.email}</p>
    </article>
  )
}

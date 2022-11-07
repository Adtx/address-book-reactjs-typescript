import axios from "axios"
import { User } from "./types"

export const RANDOM_USER_API_BASE_URL = "https://randomuser.me/api/"
const USER_BATCH_SIZE = "50"
const REQUIRED_USER_FIELDS = "id,picture,name,login,email,location,phone,cell"

export const fetchUsers = async (): Promise<User[] | undefined> => {
  const urlParams = {
    results: USER_BATCH_SIZE,
    inc: REQUIRED_USER_FIELDS,
  }

  const apiQueryString = new URLSearchParams(urlParams).toString()

  try {
    const { data } = await axios.get(
      `${RANDOM_USER_API_BASE_URL}?${apiQueryString}`
    )
    const { results: users } = data
    return users
  } catch (error) {
    console.error(error)
  }
}

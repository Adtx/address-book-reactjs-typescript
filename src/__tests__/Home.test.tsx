import "@testing-library/jest-dom"
import { rest } from "msw"
import { setupServer } from "msw/node"
import { render } from "@testing-library/react"
import Home from "../pages/Home/Home"
import { RANDOM_USER_API_MOCK_RESPONSE_ONE_RESULT } from "../testUtils"
import { RANDOM_USER_API_MOCK_RESPONSE_TWO_RESULTS } from "../testUtils"
import { EMAIL_REGEX } from "../testUtils"
import { RANDOM_USER_API_BASE_URL } from "../apiUtils"

const server = setupServer(
  rest.get(RANDOM_USER_API_BASE_URL, (req, res, ctx) => {
    return res(ctx.json(RANDOM_USER_API_MOCK_RESPONSE_TWO_RESULTS))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe("User list related tests", () => {
  test("displays initial batch of users once they are loaded", async () => {
    const { findAllByRole } = render(<Home />)

    const renderedUsers = await findAllByRole("article")

    expect(renderedUsers).toHaveLength(2)

    renderedUsers.forEach((element) => {
      expect(element).toBeVisible()
    })
  })

  test("displays all basic user information", async () => {
    server.use(
      rest.get(RANDOM_USER_API_BASE_URL, (req, res, ctx) => {
        return res(ctx.json(RANDOM_USER_API_MOCK_RESPONSE_ONE_RESULT))
      })
    )

    const { findByRole, findByTestId, findByText } = render(<Home />)

    const userProfilePicture = await findByRole("img")
    const userFullName = await findByRole("heading")
    const username = await findByTestId("username")
    const userEmail = await findByText(EMAIL_REGEX)

    const basicUserInformationElements = [
      userProfilePicture,
      userFullName,
      username,
      userEmail,
    ]

    basicUserInformationElements.forEach((element) => {
      expect(element).toBeVisible()
    })
  })
})

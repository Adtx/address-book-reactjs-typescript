import "@testing-library/jest-dom"
import { rest } from "msw"
import { setupServer } from "msw/node"
import { fireEvent, render } from "@testing-library/react"
import Home from "../pages/Home/Home"
import {
  RANDOM_USER_API_MOCK_RESPONSE_FIFTY_RESULTS,
  RANDOM_USER_API_MOCK_RESPONSE_ONE_RESULT,
  RANDOM_USER_API_MOCK_RESPONSE_TWO_RESULTS,
  EMAIL_REGEX,
} from "../testUtils"
import { RANDOM_USER_API_BASE_URL } from "../apiUtils"
import { MAX_CATALOG_LENGTH } from "../pages/Home/components/UserList/UserList"

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

  // This test fails because jsdom doesn't support layout which is needed for scrolling
  test("displays next user batch when scroll reaches end of list", async () => {
    server.use(
      rest.get(RANDOM_USER_API_BASE_URL, (req, res, ctx) => {
        return res(ctx.json(RANDOM_USER_API_MOCK_RESPONSE_FIFTY_RESULTS))
      })
    )
    const initialDisplayListSize = 50
    const newUserBatchSize = 50

    const { findAllByRole } = render(<Home />)

    //wait for the initial batch of users to render before scrolling
    await findAllByRole("article")

    //scroll to the bottom of the page
    fireEvent.scroll(window, {
      target: {
        scrollTop: document.documentElement.clientHeight - window.innerHeight,
      },
    })
    //wait for new user batch to be rendered
    await new Promise((r) => setTimeout(r, 1000))

    let renderedUsers = await findAllByRole("article")

    expect(renderedUsers).toHaveLength(
      initialDisplayListSize + newUserBatchSize
    )
  })

  test("displays loading message while loading initial users batch", async () => {
    server.use(
      rest.get(RANDOM_USER_API_BASE_URL, (req, res, ctx) => {
        return res(ctx.json(RANDOM_USER_API_MOCK_RESPONSE_FIFTY_RESULTS))
      })
    )

    const { findByText } = render(<Home />)

    const loadingMessage = await findByText(/Loading\.{3}/i)

    expect(loadingMessage).toBeVisible()
  })

  // This test fails because jsdom doesn't support layout which is needed for scrolling
  test("displays loading message while loading next users batch", async () => {
    server.use(
      rest.get(RANDOM_USER_API_BASE_URL, (req, res, ctx) => {
        return res(ctx.json(RANDOM_USER_API_MOCK_RESPONSE_FIFTY_RESULTS))
      })
    )

    const { findAllByRole, findByText } = render(<Home />)

    //wait for the initial batch of users to render before scrolling
    await findAllByRole("article")

    //scroll to the bottom of the page
    fireEvent.scroll(window, {
      target: {
        scrollTop: document.documentElement.clientHeight - window.innerHeight,
      },
    })

    const loadingMessage = await findByText(/Loading\.{3}/i)

    expect(loadingMessage).toBeVisible()
  })

  // This test fails because jsdom doesn't support layout which is needed for scrolling
  test("displays end of user catalog message when there are no more users to load", async () => {
    server.use(
      rest.get(RANDOM_USER_API_BASE_URL, (req, res, ctx) => {
        return res(ctx.json(RANDOM_USER_API_MOCK_RESPONSE_FIFTY_RESULTS))
      })
    )
    const newUserBatchSize = 50
    const numberOfScrollsUntilEndOfUsersCatalog =
      MAX_CATALOG_LENGTH / newUserBatchSize

    const { findAllByRole, getByText } = render(<Home />)

    //wait for the initial batch of users to render before scrolling
    await findAllByRole("article")

    //repeatedly scroll to the bottom of the page until reaching the end of the users catalog
    for (let i = 0; i < numberOfScrollsUntilEndOfUsersCatalog; i++) {
      //scroll to the bottom of the page
      fireEvent.scroll(window, {
        target: {
          scrollTop: document.documentElement.clientHeight - window.innerHeight,
        },
      })
      if (i < numberOfScrollsUntilEndOfUsersCatalog - 1) {
        //wait for new user batch to be rendered
        await new Promise((r) => setTimeout(r, 1500))
      }
    }

    const endofUsersCatalogMessage = await getByText(/end of users catalog/i)

    expect(endofUsersCatalogMessage).toBeVisible()
  })

  // This test passes despite using jsdom because the scroll events don't happen(because of jsdom)
  test("does not display more than one thousand users", async () => {
    server.use(
      rest.get(RANDOM_USER_API_BASE_URL, (req, res, ctx) => {
        return res(ctx.json(RANDOM_USER_API_MOCK_RESPONSE_FIFTY_RESULTS))
      })
    )
    const newUserBatchSize = 50
    const numberOfScrollsUntilEndOfUsersCatalog =
      MAX_CATALOG_LENGTH / newUserBatchSize

    const { findAllByRole } = render(<Home />)

    //wait for the initial batch of users to render before scrolling
    await findAllByRole("article")

    //repeatedly scroll to the bottom of the page until reaching the end of the users catalog
    for (let i = 0; i < numberOfScrollsUntilEndOfUsersCatalog; i++) {
      //scroll to the bottom of the page
      fireEvent.scroll(window, {
        target: {
          scrollTop: document.documentElement.clientHeight - window.innerHeight,
        },
      })
      if (i < numberOfScrollsUntilEndOfUsersCatalog - 1) {
        //wait for new user batch to be rendered
        await new Promise((r) => setTimeout(r, 1500))
      }
    }

    let renderedUsers = await findAllByRole("article")

    expect(renderedUsers.length).not.toBeGreaterThan(1000)
  })
})

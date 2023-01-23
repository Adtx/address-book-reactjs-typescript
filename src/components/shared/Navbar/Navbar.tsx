import { FiSettings } from "react-icons/fi"
import { GrHomeRounded } from "react-icons/gr"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Header = styled.header`
  height: 7%;
  display: flex;
  justify-content: center;
  background-color: #f8f9fa;
`

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f8f9fa;
  height: 100%;
  width: 90%;
  justify-content: space-between;
`

const StyledLink = styled(Link)`
  height: 32px;
  width: 114.625px;
  text-decoration: none;
`

const NavLink = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f8f9fa;
  box-shadow: 0 1px 6px rgba(28, 33, 39, 0.1);
  height: 25%;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #eaeaea;
  padding: 15px 10px;
  color: black;

  &:hover {
    cursor: pointer;
  }
`

const NavLinkText = styled.h3`
  margin-left: 5px;
`

const ROOT_URL =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? ""
    : "/address-book-reactjs-typescript"

export const NAVIGATION_PATHS = {
  HOME: `${ROOT_URL}/`,
  SETTINGS: `${ROOT_URL}/settings`,
}

const Navbar = () => {
  const { pathname: currentPage } = useLocation()

  return (
    <Header>
      <StyledNavbar>
        <h1>Address Book</h1>
        {currentPage === NAVIGATION_PATHS.HOME && (
          <StyledLink to={NAVIGATION_PATHS.SETTINGS}>
            <NavLink>
              <FiSettings />
              <NavLinkText>Settings</NavLinkText>
            </NavLink>
          </StyledLink>
        )}
        {currentPage === `${NAVIGATION_PATHS.SETTINGS}` && (
          <StyledLink to={NAVIGATION_PATHS.HOME}>
            <NavLink>
              <GrHomeRounded />
              <NavLinkText>Home</NavLinkText>
            </NavLink>
          </StyledLink>
        )}
      </StyledNavbar>
    </Header>
  )
}

export default Navbar

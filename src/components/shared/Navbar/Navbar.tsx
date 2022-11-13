import { FiSettings } from "react-icons/fi"
import { GrHomeRounded } from "react-icons/gr"
import { useLocation } from "react-router-dom"
import {
  Header,
  StyledNavbar,
  NavLink,
  NavLinkText,
  StyledLink,
} from "./styles"

const NAVIGATION_PATHS = {
  HOME: "/",
  SETTINGS: "settings",
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
        {currentPage === `/${NAVIGATION_PATHS.SETTINGS}` && (
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

import { FiSettings } from "react-icons/fi"
import { GrHomeRounded } from "react-icons/gr"
import { useLocation } from "react-router-dom"
import { Header, StyledNavbar, NavLink, NavLinkText } from "./styles"

const NAVIGATION_PATHS = {
  HOME: "/",
  SETTINGS: "/settings",
}

export function Navbar() {
  const { pathname: currentPage } = useLocation()

  return (
    <Header>
      <StyledNavbar>
        <h1>Address Book</h1>
        {currentPage === NAVIGATION_PATHS.HOME && (
          <NavLink href={NAVIGATION_PATHS.SETTINGS}>
            <FiSettings />
            <NavLinkText>Settings</NavLinkText>
          </NavLink>
        )}
        {currentPage === NAVIGATION_PATHS.SETTINGS && (
          <NavLink href={NAVIGATION_PATHS.HOME}>
            <GrHomeRounded />
            <NavLinkText>Home</NavLinkText>
          </NavLink>
        )}
      </StyledNavbar>
    </Header>
  )
}

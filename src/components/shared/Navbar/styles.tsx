import styled from "styled-components"

export const Header = styled.header`
  height: 7%;
  display: flex;
  justify-content: center;
  background-color: #f8f9fa;
`

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f8f9fa;
  height: 100%;
  width: 90%;
  justify-content: space-between;
`
export const NavLink = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f8f9fa;
  /* border: 1px solid #ced4da; */
  /* border-radius: 5px; */
  box-shadow: 0 1px 6px rgba(28, 33, 39, 0.1);
  height: 25%;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #eaeaea;
  padding: 15px 10px;
  color: black;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`

export const NavLinkText = styled.h3`
  margin-left: 5px;
`

import styled from "styled-components"

export const StyledUserCard = styled.article`
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  display: flex;
  margin: 5px 0 5px 3.33%;
  padding: 1rem;
  width: 30%;

  &:hover {
    cursor: pointer;
    box-shadow: 0 1px 6px 2px rgba(28, 33, 39, 0.1);
  }

  @media (max-width: 1280px) {
    width: 100%;
  }
`
export const PictureContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 33%;
`

export const Picture = styled.img`
  border-radius: 50%;
  height: 70px;
  width: 70px;
`

export const ProfileContainer = styled.div`
  width: 66%;
`

export const UserName = styled.p`
  color: #6c757d;
  font-size: 80%;
  margin-bottom: 0.4rem;
`

export const Email = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

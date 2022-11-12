import styled from "styled-components"

export const StyledUserCard = styled.article`
  display: flex;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #eaeaea;
  padding: 1rem;
  margin: 5px 0 5px 3.33%;
  width: 30%;

  &:hover {
    cursor: pointer;
    box-shadow: 0 1px 6px 2px rgba(28, 33, 39, 0.1);
  }
`
export const PictureContainer = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Picture = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`

export const ProfileContainer = styled.div`
  width: 66%;
`

export const UserName = styled.p`
  font-size: 80%;
  color: #6c757d;
  margin-bottom: 0.4rem;
`

export const Email = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

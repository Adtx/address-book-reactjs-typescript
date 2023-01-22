import styled from "styled-components"

export const StyledSettings = styled.main`
  align-items: center;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  height: 93%;
`

export const SettingsContainer = styled.section`
  align-items: center;
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  box-shadow: 0 1px 6px rgba(28, 33, 39, 0.1);
  display: flex;
  flex-direction: column;
  height: 70%;
  margin-top: 40px;
  padding: 1rem;
  width: 30%;

  @media (max-width: 1200px) {
    width: 40%;
  }

  @media (max-width: 900px) {
    width: 45%;
  }

  @media (max-width: 800px) {
    width: 55%;
  }

  @media (max-width: 650px) {
    width: 85%;
  }
`

export const Title = styled.h4`
  margin-top: 15%;
`

import styled from "styled-components"

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 45%;
  margin: 1rem 0;
  border: 1px solid #ced4da;
  border-radius: 32px;
  padding: 0.375rem 0.75rem;
  background-color: #fff;
  position: sticky;
  top: 15px;
  z-index: 1;
  box-shadow: 0 1px 6px rgba(28, 33, 39, 0.1);
`

export const IconContainer = styled.div`
  padding-left: 0.4rem;
  padding-right: 0.6rem;
`

export const SearchInput = styled.input`
  display: block;
  width: 75%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 2;
  color: #495057;
  border: 0;
  background-color: #fff;
  background-clip: padding-box;
  padding: 0;
  outline: 0;
`

export const LoadingPausedMessage = styled.p`
  font-size: 80%;
  color: #6c757d;
`

import styled from "styled-components"
import Select, { StylesConfig } from "react-select"
import { IsMulti, IStyledSelectProps, OptionType } from "./types"

export const StyledSettings = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f8f9fa;
  height: 100%;
`

export const SettingsContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 30%;
  height: 70%;
  margin-top: 40px;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #eaeaea;
  padding: 1rem;
  box-shadow: 0 1px 6px rgba(28, 33, 39, 0.1);
`

const customStyles: StylesConfig<OptionType, IsMulti> = {
  control: (provided) => ({
    ...provided,
    width: "300px",
    marginTop: "50px",
  }),
}

export const StyledSelect = (props: IStyledSelectProps) => {
  return (
    <Select
      options={props.options}
      styles={customStyles}
      placeholder={"Select nationalities..."}
      isMulti
    />
  )
}

export const Title = styled.h4`
  margin-top: 15%;
`

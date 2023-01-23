import Select, { MultiValue, StylesConfig } from "react-select"
import {
  getSettingsFromLocalStorage,
  saveSettingsToLocalStorage,
} from "../localStorageUtils"
import styled from "styled-components"

const StyledSettings = styled.main`
  align-items: center;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  height: 93%;
`

const SettingsContainer = styled.section`
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

const Title = styled.h4`
  margin-top: 15%;
`

export type OptionType = { label: string; value: string }

interface SettingsProps {
  setNationalities: React.Dispatch<React.SetStateAction<String[]>>
}

const countryCodeNameMapping = [
  { value: "CH", label: "Switzerland" },
  { value: "ES", label: "Spain" },
  { value: "FR", label: "France" },
  { value: "GB", label: "United Kingdom" },
]

const selectCustomStyles: StylesConfig<OptionType, true> = {
  control: (provided) => ({
    ...provided,
    width: "300px",
    marginTop: "50px",
  }),
}

const Settings = ({ setNationalities }: SettingsProps) => {
  const handleSelection = (selectedOptions: MultiValue<OptionType>) => {
    const selectedCountryCodes = selectedOptions.map((option) => option.value)
    setNationalities(selectedCountryCodes)
    saveSettingsToLocalStorage(selectedOptions)
  }

  return (
    <>
      <StyledSettings>
        <SettingsContainer>
          <h1>Settings</h1>
          <Title>Select which nationalities to filter users by:</Title>
          <Select
            options={countryCodeNameMapping}
            styles={selectCustomStyles}
            placeholder={"Select nationalities..."}
            isMulti
            defaultValue={getSettingsFromLocalStorage()}
            onChange={handleSelection}
          />
        </SettingsContainer>
      </StyledSettings>
    </>
  )
}

export default Settings

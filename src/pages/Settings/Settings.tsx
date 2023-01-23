import { SettingsProps, OptionType } from "./types"
import Select, { MultiValue, StylesConfig } from "react-select"
import { SettingsContainer, StyledSettings, Title } from "./styles"
import {
  getSettingsFromLocalStorage,
  saveSettingsToLocalStorage,
} from "../../localStorageUtils"

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

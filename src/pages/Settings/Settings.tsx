import { ISettingsProps, IsMulti, OptionType } from "./types"
import Select, { StylesConfig } from "react-select"
import { Navbar } from "../../components/shared/Navbar/Navbar"
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

const selectCustomStyles: StylesConfig<OptionType, IsMulti> = {
  control: (provided) => ({
    ...provided,
    width: "300px",
    marginTop: "50px",
  }),
}

export default function Settings(props: ISettingsProps) {
  const handleSelection = (selectedOptions: any) => {
    const selectedCountryCodes = selectedOptions.map(
      (option: any) => option.value
    )
    props.setNationalities(selectedCountryCodes)
    saveSettingsToLocalStorage(selectedOptions)
  }

  return (
    <>
      <Navbar />
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

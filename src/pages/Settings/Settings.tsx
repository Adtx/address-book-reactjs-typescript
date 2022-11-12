import React, { useState } from "react"
import { IsMulti, OptionType } from "./types"
import Select, { StylesConfig } from "react-select"
import { Navbar } from "../../components/shared/Navbar/Navbar"
import { SettingsContainer, StyledSettings, Title } from "./styles"

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

const LOCAL_STORAGE_KEY = "settings"

const readSettingsFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]")

export default function Settings() {
  const [selectValue, setSelectValue] = useState(() =>
    readSettingsFromLocalStorage()
  )

  const handleSelection = (selectedOptions: any) => {
    setSelectValue(selectedOptions)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(selectedOptions))
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
            value={selectValue}
            onChange={handleSelection}
          />
        </SettingsContainer>
      </StyledSettings>
    </>
  )
}

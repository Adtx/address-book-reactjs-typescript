import React from "react"
import { Navbar } from "../../components/shared/Navbar/Navbar"
import {
  SettingsContainer,
  StyledSettings,
  Title,
  StyledSelect,
} from "./styles"

const countryCodeNameMapping = [
  { value: "CH", label: "Switzerland" },
  { value: "ES", label: "Spain" },
  { value: "FR", label: "France" },
  { value: "GB", label: "United Kingdom" },
]

export default function Settings() {
  return (
    <>
      <Navbar />
      <StyledSettings>
        <SettingsContainer>
          <h1>Settings</h1>
          <Title>Select which nationalities to filter users by:</Title>
          <StyledSelect options={countryCodeNameMapping} />
        </SettingsContainer>
      </StyledSettings>
    </>
  )
}

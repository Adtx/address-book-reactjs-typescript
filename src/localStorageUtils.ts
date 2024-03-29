import { OptionType } from "./pages/Settings"

const LOCAL_STORAGE_KEY = "settings"

export const getSettingsFromLocalStorage = (): OptionType[] =>
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]")

export const saveSettingsToLocalStorage = (
  selectedNationalities: readonly OptionType[]
) =>
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(selectedNationalities))

export const getCountryCodeArrayFromLocalStorage = () => {
  const savedSettings = getSettingsFromLocalStorage()
  const countryCodes = savedSettings.map((setting) => setting.value)
  return countryCodes
}

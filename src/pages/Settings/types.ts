export type IsMulti = true

export type OptionType = { label: string; value: string }

export interface SettingsProps {
  setNationalities: React.Dispatch<React.SetStateAction<String[]>>
}

const LOCAL_STORAGE_KEY = "settings"

export const readSettingsFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]")

export const saveSettingsToLocalStorage = (selectedOptions: any) =>
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(selectedOptions))

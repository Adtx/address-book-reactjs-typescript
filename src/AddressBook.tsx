import { useState } from "react"
import Home from "./pages/Home/Home"
import Settings from "./pages/Settings/Settings"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { getCountryCodeArrayFromLocalStorage } from "./localStorageUtils"
import Navbar, { NAVIGATION_PATHS } from "./components/shared/Navbar/Navbar"

const AddressBook = () => {
  const [nationalities, setNationalities] = useState<String[]>(
    getCountryCodeArrayFromLocalStorage
  )

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path={NAVIGATION_PATHS.HOME}
          element={<Home nationalities={nationalities} />}
        />
        <Route
          path={NAVIGATION_PATHS.SETTINGS}
          element={<Settings setNationalities={setNationalities} />}
        />
      </Routes>
    </Router>
  )
}

export default AddressBook

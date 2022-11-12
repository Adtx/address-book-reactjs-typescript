import React, { useState, useEffect } from "react"
import Home from "./pages/Home/Home"
import Settings from "./pages/Settings/Settings"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { getCountryCodeArrayFromLocalStorage } from "./localStorageUtils"

export default function AddressBook() {
  const [nationalities, setNationalities] = useState<String[]>(
    getCountryCodeArrayFromLocalStorage
  )

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home nationalities={nationalities} />} />
        <Route
          path="/settings"
          element={<Settings setNationalities={setNationalities} />}
        />
      </Routes>
    </Router>
  )
}

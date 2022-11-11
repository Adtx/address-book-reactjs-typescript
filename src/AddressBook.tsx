import React from "react"
import Home from "./pages/Home/Home"
import Settings from "./pages/Settings/Settings"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

export default function AddressBook() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  )
}

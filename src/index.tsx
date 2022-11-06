import React from "react"
import ReactDOM from "react-dom/client"
import AddressBook from "./AddressBook"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <AddressBook />
  </React.StrictMode>
)

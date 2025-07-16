import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App.jsx"
import "./index.css"
import "./App.css"
import { BrowserRouter } from "react-router-dom"

const container = document.getElementById("root")
if (container) {
  const root = ReactDOM.createRoot(container)
  root.render(
	<BrowserRouter>
	  <App />
	</BrowserRouter>
  )
}

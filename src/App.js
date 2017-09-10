import React, { Component } from "react"
import styled from "styled-components"
import BatmanHero from "./components/BatmanHero"
import Timeline from "./components/Timeline"
import BatmanHistory from "./components/BatmanHistory"
import "./App.css"

class App extends Component {
	render() {
		return (
			<div className="App">
				<BatmanHero style={{ gridArea: "hero" }} />
				<BatmanHistory style={{ gridArea: "history" }} />
				<footer className="footer" style={{ gridArea: "footer" }}>
          			To learn more about <a href="#">Batman</a>
				</footer>
			</div>
		)
	}
}

export default App

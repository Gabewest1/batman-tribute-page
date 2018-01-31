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
				<Footer className="footer">
					<p>
						To learn more about <a href="https://en.wikipedia.org/wiki/Batman" alt="batman wiki page" target="_blank"> Batman</a>
					</p>
				</Footer>
			</div>
		)
	}
}

const Footer = styled.footer`
	grid-area: footer;
	height: 150px;
	background: #2d2d2d;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 32px;
	font-family: JusticeLeague;

	@media (min-width: 768px) {
		font-size: 48px;
	}
`

export default App

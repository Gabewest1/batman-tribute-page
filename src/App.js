import React, { Component } from "react"
import styled from "styled-components"
import HeroVideo from "./components/HeroVideo"
import Timeline from "./components/Timeline"
import BatmanHistory from "./components/BatmanHistory"
import "./App.css"

const Header = styled.h1`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2.5em;
	grid-area: header;
	font-family: JusticeLeague;
	margin: 0;
`
class App extends Component {
	render() {
		const src = window.innerWidth < 600
			? "/videos/batman-hero-mobile.mp4"
			: "/videos/batman-hero.mp4"
		const headerStyles = {
			fontFamily: "JusticeLeague",
			gridArea: "header",
			margin: 0,

		}
		return (
			<div className="App">
				<Header style={{ gridArea: "header" }}>The Dark Knight</Header>
				<HeroVideo style={{ gridArea: "hero" }} src={ src } />
				<BatmanHistory style={{ gridArea: "history" }} />
				<footer className="footer" style={{ gridArea: "footer" }}>
          To learn more about <a href="#">Batman</a>
				</footer>
			</div>
		)
	}
}

export default App

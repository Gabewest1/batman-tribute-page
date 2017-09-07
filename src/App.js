import React, { Component } from "react"
import HeroVideo from "./components/HeroVideo"
import Navbar from "./components/Navbar"
import Timeline from "./components/Timeline"
import "./App.css"

class App extends Component {
	render() {
		const src = window.innerWidth < 600
			? "/videos/batman-hero-mobile.mp4"
			: "/videos/batman-hero.mp4"

		const heightOfNavbar = "20vmin"

		return (
			<div className="App">
				<Navbar height={ heightOfNavbar } />
				<HeroVideo src={ src } style={{ marginTop: heightOfNavbar }} />
				<Timeline />
				<footer className="footer">
          To learn more about <a href="#">Batman</a>
				</footer>
			</div>
		)
	}
}

export default App

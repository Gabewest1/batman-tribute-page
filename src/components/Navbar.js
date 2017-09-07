import React from "react"
import styled from "styled-components"

const Nav = styled.div`
    // position: fixed;
    background: black;
    grid-area: nav;
    display: flex;
    flex-direction: column;
    padding: 15px;
    box-sizing: border-box;
    top: 0;
    width: 100%;
    z-index: 1;
    width: ${({ height }) => height || "auto"};
    height: 100%;
`
const BatmanLogo = styled.img`
    max-height: 100%;
    max-width: 100%;   
    position: relative;
    top: ${({ left }) => left || "0px"}; 
    transform: 
        translateY(${({ progress }) => progress})
        rotate(${({ progress }) => progress.replace("px", "deg")});
    z-index: 1;
`
const Timeline = styled.ul`
    padding: 0;
    margin: 0;
    position: absolute;
    width: 3px;
    height: 100%;
    background: silver;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const TimelineContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;    
    align-items: center;
    height: 100%;    
`
const Bullet = styled.li`
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: black;
    border: solid silver 3px;
    transform: translateX(-45%);
`

class Navbar extends React.Component {
    constructor() {
        super()
        this.state = {
            startingLeftPosition: 0,
            bulletsCenterPositions: [],
            progress: "0px",
        }
    }
    componentDidMount() {
        console.log("STATE B4:", this.state)
        this.getCenterOfBullets()
        setTimeout(() => {
            console.log("STATE AFTER:", this.state)
            this.moveLogoToFirstBullet(this.state.bulletsCenterPositions[0])
        }, 1)

        document.addEventListener("scroll", (e) => {
            const timelineWidth = this.timeline.getBoundingClientRect().height
            const maxScrollAmount = document.body.scrollHeight - window.innerHeight
            const amountScrolled = window.scrollY

            const x = (amountScrolled * timelineWidth) / maxScrollAmount
            this.setState({ progress: `${x}px` })
        })
    }
    getCenterOfBullets() {
        const bullets = Array.from(this.timeline.children)
        console.log("BULLETS:", bullets)

        const positions = bullets.map((bullet) => {
            const { top, width } = bullet.getBoundingClientRect()
            const style = bullet.currentStyle || window.getComputedStyle(bullet)
            const margin = parseFloat(style.marginTop) + parseFloat(style.marginBottom)
            const padding = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom)
            const border = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth)

            console.log(top, width, margin, padding, border, width + margin + padding + border)
            const realWidth = width + margin + padding + border
            const center = top + (realWidth / 2)

            return center
        })

        this.setState({
            bulletsCenterPositions: positions,
        })
    }
    moveLogoToFirstBullet(newCenter) {
        const { top, height } = this.logo.getBoundingClientRect()
        const currentCenter = top + (height / 2)
        const delta = `${newCenter - currentCenter}px`
        console.log("Moving Logo To:", newCenter)
        this.setState({
            startingLeftPosition: delta,
        })
    }
	render() {
        const { startingLeftPosition, progress } = this.state

		return (
			<Nav { ...this.props }>
                <TimelineContainer>
                    <BatmanLogo
                        innerRef={ el => this.logo = el }
                        src="/images/batman-logo.png"
                        left={ startingLeftPosition }
                        progress={ progress } />
                    <Timeline innerRef={ el => this.timeline = el }>
                        <Bullet />
                        <Bullet />
                        <Bullet />
                        <Bullet />
                    </Timeline>
                </TimelineContainer>
			</Nav>
		)
	}
}

export default Navbar

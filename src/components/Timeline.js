import React from "react"
import styled from "styled-components"

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
const Timeline1 = styled.ul`
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
    position: absolute;
    ${({ position }) => {
        console.log("POSITION:", position)
        return position
    }};
`

class Timeline extends React.Component {
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

        if (this.state.progress === "0px") {
            this.setState({ progress: `${this.getScrollProgress()}px` })
        }

        document.addEventListener("scroll", (e) => {
            this.setState({ progress: `${this.getScrollProgress()}px` })
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
    getScrollProgress() {
        const startingPosition = this.timeline.getBoundingClientRect().top + 20
        const timelineLength = this.timeline.getBoundingClientRect().height
        const maxScrollAmount = document.body.scrollHeight - window.innerHeight - startingPosition
        const amountScrolled = Math.max(0, (window.scrollY - startingPosition))

        return (amountScrolled * timelineLength) / maxScrollAmount
    }
	render() {
        const { startingLeftPosition, progress } = this.state

		return (
            <TimelineContainer { ...this.props }>
                <BatmanLogo
                    innerRef={ el => this.logo = el }
                    src="/images/batman-logo.png"
                    left={ startingLeftPosition }
                    progress={ progress } />
                <Timeline1 innerRef={ el => this.timeline = el }>
                    <Bullet position={ "top: 0" } />
                    {this.props.bullets.map(bullet => (
                        <Bullet key={ bullet } position={ bullet } />
                    ))}
                    <Bullet position={ "top: 100%" } />
                </Timeline1>
            </TimelineContainer>
		)
	}
}

export default Timeline

import React from "react"
import styled from "styled-components"
import $ from "jquery"

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
    background: ${({ position, progress }) => {
        position = position ? parseFloat(position.replace(/(px)|(%)/g, "")) : position
        progress = progress ? parseFloat(progress.replace(/(px)|(%)/g, "")) : progress
        return progress >= position ? "yellow" : "black"}
    };
    border: solid silver 3px;
    transform: translateX(-45%);
    position: absolute;
    top: ${({ position }) => position};
`

class Timeline extends React.Component {
    constructor() {
        super()
        this.state = {
            startingPosition: 0,
            progress: "0px",
        }
    }
    componentDidMount() {
        this.setState({ progress: `${this.getScrollProgress()}px` })

        document.addEventListener("scroll", (e) => {
            this.setState({ progress: `${this.getScrollProgress()}px` })
        })
    }
    getScrollProgress() {
        const startingPosition = $(this.timeline).position().top
        const timelineLength = this.timeline.getBoundingClientRect().height
        const maxScrollAmount = document.body.scrollHeight - window.innerHeight - startingPosition
        const amountScrolled = Math.max(0, (window.scrollY - startingPosition))

        return (amountScrolled * timelineLength) / maxScrollAmount
    }

	render() {
        const { startingPosition, progress } = this.state

		return (
            <TimelineContainer { ...this.props }>
                <BatmanLogo
                    innerRef={ el => this.logo = el }
                    src="/images/batman-logo.png"
                    left={ startingPosition }
                    progress={ progress } />
                <Timeline1 innerRef={ el => this.timeline = el }>
                    <Bullet position={ "0" } />
                    {this.props.bullets.map(bullet => (
                        <Bullet key={ bullet } position={ bullet } progress={ progress } />
                    ))}
                    <Bullet position={ "100%" } />
                </Timeline1>
            </TimelineContainer>
		)
	}
}

export default Timeline

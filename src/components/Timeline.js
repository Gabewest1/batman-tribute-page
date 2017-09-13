import React from "react"
import styled from "styled-components"
import $ from "jquery"

const BatmanLogo = styled.img`
    max-height: 100%;
    max-width: 100%;   
    position: relative;
    top: ${({ progress }) => Math.min(progress, 100)};
    transform: 
        rotate(${({ progress }) => {
            progress = parseFloat(progress.replace(/(px)|(%)/g, ""))
            rotationAmount = (progress * 360) / 100
            return `${rotationAmount}deg`
        }};
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
	render() {
        const { progress } = this.props

		return (
            <TimelineContainer { ...this.props }>
                <BatmanLogo
                    src="/images/batman-logo.png"
                    progress={ progress } />
                <Timeline1>
                    <Bullet position={ "0%" } />
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

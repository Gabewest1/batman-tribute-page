import React from "react"
import styled from "styled-components"
import Timeline from "./Timeline"
import $ from "jquery"

let TimelineItem = styled.div`
    box-sizing: border-box;
    display: grid;
    grid-row-gap: 1em;
    position: relative;
    transition: .5s;
    grid-template-areas: 
        "year"
        "image"
        "desc" !important;

    ${({ position, progress }) => {
        position = position ? parseFloat(position.replace(/(px)|(%)/g, "")) : position
        progress = progress ? parseFloat(progress.replace(/(px)|(%)/g, "")) : progress
        return progress >= position ? "transform: translateX(0) !important;" : ""
    }};
        
    @media (max-width: 480px) {
        font-size: 8px;
    }
    // @media (max-width: 768px) {
    //     grid-template-areas:
    //         "year year"
    //         "image desc" !important; //Important is needed because the Container that holds
    //                                 //these timelineItems sets their grid-template-areas
    //                                 //with a very specific selector that trumps @media.
    // }
`
let Container = styled.div`
    display: grid;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 auto;
    position: relative;
    grid-template-columns: auto 100px auto;
    grid-row-gap: 100px;
    grid-template-areas:
        ".     timeline ."
        ".     timeline item1"
        "item2 timeline ."
        ".     timeline .";
    
    > ${TimelineItem}:nth-child(odd) {
        transform: translateX(-100%);
        grid-template-areas:
            "image year"
            "image desc";
    }
    
    > ${TimelineItem}:nth-child(even) {
        transform: translateX(100%);        
        grid-template-areas:
            "year image"
            "desc image";
    }
                        
`
let Image = styled.img`
    max-width: 100%;
    background: white;
    box-sizing: border-box;
    padding: 5px;
    box-shadow: 0 0 5px 2px;
    grid-area: image;
`
let Year = styled.h1`
    font-family: BatFont;
    font-size: 3em;
    margin: 0;
    grid-area: year;
`
let Description = styled.p`
    font-family: JusticeLeague;
    grid-area: desc;
    margin: 0;
`


class BatmanHistory extends React.Component {
    constructor() {
        super()
        this.state = {
            timelineItemsPositions: [],
            progress: "0px"
        }

        this.timelineItems = []
    }
    componentDidMount() {
        setTimeout(() => {
            console.log(this.timelineItems)
            const positions = this.timelineItems.map(item => `${item.item.offsetTop}px`)
            console.log("TOP VALUES:", positions)
            this.setState({ timelineItemsPositions: positions })
        }, 1)
        document.addEventListener("scroll", (e) => {
            this.setState({ progress: `${this.getScrollProgress()}px` })
        })

        this.setState({ progress: `${this.getScrollProgress()}px` })
    }
    getScrollProgress() {
        const startingPosition = $(this.timeline).position().top
        const timelineLength = this.timeline.getBoundingClientRect().height
        const maxScrollAmount = document.body.scrollHeight - window.innerHeight - startingPosition
        const amountScrolled = Math.max(0, (window.scrollY - startingPosition))

        return (amountScrolled * timelineLength) / maxScrollAmount
    }
    addTimelineItem({ id, item }) {
        if (this.timelineItems.filter(el => el.id === id).length === 0) {
            this.timelineItems.push({ id, item })
        }
    }
    render() {
        const { progress, timelineItemsPositions } = this.state
        console.log(progress, timelineItemsPositions)
        return (
            <Container>
                <Timeline
                    style={{ gridArea: "timeline" }}
                    bullets={ this.state.timelineItemsPositions }
                    innerRef={ (el) => this.timeline = el } />
                <TimelineItem 
                    innerRef={ (el) => this.addTimelineItem({ id: 0, item: el }) }
                    style={{ gridArea: "item1" }}
                    progress={ progress }
                    position={ timelineItemsPositions[0] }>
                    <Image src="/images/batman1.jpg" />
                    <Year>1920</Year>
                    <Description>
                        Bruce and his family were leaving the theater
                        after a night of festivites. On their way down
                        a back ally, they were held up at gun point.
                        Bruces dad, Jared, took a bullet to the skull, leaving
                        bruce as a bastard child.
                    </Description>
                </TimelineItem>

                <TimelineItem
                    innerRef={ (el) => this.addTimelineItem({ id: 1, item: el }) }
                    style={{ gridArea: "item2" }}
                    progress={ progress }
                    position={ timelineItemsPositions[1] }>
                    <Image src="/images/batman1.jpg" />
                    <Year>1920</Year>
                    <Description>
                        Bruce and his family were leaving the theater
                        after a night of festivites. On their way down
                        a back ally, they were held up at gun point.
                        Bruces dad, Jared, took a bullet to the skull, leaving
                        bruce as a bastard child.
                    </Description>
                </TimelineItem>
            </Container>
        )
    }
}

export default BatmanHistory

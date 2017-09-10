import React from "react"
import styled from "styled-components"
import Timeline from "./Timeline"

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
        grid-template-areas:
            "image year"
            "image desc";
    }
    
    > ${TimelineItem}:nth-child(even) {
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
            timelineItemsPositions: []
        }

        this.timelineItems = []
    }
    componentDidMount() {
        setTimeout(() => {
            console.log(this.timelineItems)
            const positions = this.timelineItems.map(item => `top: ${item.offsetTop}px`)
            console.log("TOP VALUES:", positions)
            this.setState({ timelineItemsPositions: positions })

        }, 1)
    }
    render() {
        return (
            <Container>
                <Timeline style={{ gridArea: "timeline" }} bullets={ this.state.timelineItemsPositions } />
                <TimelineItem innerRef={ (el) => this.timelineItems.push(el) }style={{ gridArea: "item1" }}>
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

                <TimelineItem innerRef={ (el) => this.timelineItems.push(el) }style={{ gridArea: "item2" }}>
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

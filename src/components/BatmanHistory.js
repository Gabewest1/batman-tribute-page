import React from "react"
import styled from "styled-components"
import Timeline from "./Timeline"
import $ from "jquery"

let TimelineItem = styled.div`
    box-sizing: border-box;
    display: grid;
    grid-row-gap: 1em;
    max-width: 400px;
    justify-self: center;
    opacity: 0;
    position: relative;
    transition: transform .5s ease-in-out, opacity .7s linear;
    grid-template-areas: 
        "year"
        "image"
        "desc" !important;

    ${({ position, progress }) => {
        position = position ? parseFloat(position.replace(/(px)|(%)/g, "")) : position
        progress = progress ? parseFloat(progress.replace(/(px)|(%)/g, "")) : progress
        return progress >= position ? "transform: translateX(0%) !important; opacity: 1;" : ""
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
    padding: 2em 0;
    position: relative;
    grid-template-columns: auto 100px auto;
    grid-row-gap: 100px;
    grid-template-areas:
        ".     timeline ."
        ".     timeline item1"
        "item2 timeline ."
        ".     timeline item3"
        "item4 timeline ."
        ".     timeline item5"
        ".     timeline ."
        "item6 timeline .";
    
    > ${TimelineItem}:nth-child(odd) {
        transform: translateX(-30%);
        grid-template-areas:
            "image year"
            "image desc";
    }
    
    > ${TimelineItem}:nth-child(even) {
        transform: translateX(30%);        
        grid-template-areas:
            "year image"
            "desc image";
    }
                        
`
let Image = styled.img`
    background: white;
    box-sizing: border-box;
    box-shadow: 0 0 5px 2px;
    max-width: 100%;
    max-height: 300px;
    margin: 0 auto;
    padding: 5px;
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
            progress: "0%"
        }

        this.timelineItems = []
    }
    componentDidMount() {
        setTimeout(() => {
            const positions = this.timelineItems.map(({ item }) => {
                const parentHeight = $(item.parentNode).outerHeight()
                const itemTop = item.offsetTop
                const itemTopAsPercentageOfParentsHeight = (itemTop / parentHeight) * 100
                return `${itemTopAsPercentageOfParentsHeight}%`
            })
            this.setState({ timelineItemsPositions: positions })
        }, 1)

        document.addEventListener("scroll", (e) => {
            this.setState({ progress: `${this.getScrollProgress()}` })
        })

        this.setState({ progress: `${this.getScrollProgress()}` })
    }
    getScrollProgress() {
        const startingPosition = $(this.timeline).offset().top - 100
        const maxScrollAmount = document.body.scrollHeight - window.innerHeight - startingPosition
        const amountScrolled = Math.max(0, (window.scrollY - startingPosition))
        const percentComplete = (amountScrolled / maxScrollAmount) * 100

        return `${percentComplete}%`
    }
    addTimelineItem({ id, item }) {
        if (this.timelineItems.filter(el => el.id === id).length === 0) {
            this.timelineItems.push({ id, item })
        }
    }
    render() {
        const { progress, timelineItemsPositions } = this.state

        return (
            <Container>
                <Timeline
                    style={{ gridArea: "timeline" }}
                    progress={ progress }
                    bullets={ this.state.timelineItemsPositions }
                    innerRef={ (el) => this.timeline = el } />

                <TimelineItem 
                    innerRef={ (el) => this.addTimelineItem({ id: 0, item: el }) }
                    style={{ gridArea: "item1" }}
                    progress={ progress }
                    position={ timelineItemsPositions[0] }>
                    <Image src="/images/detective_comics.jpg" />
                    <Description>
                        Batman made his debut in issue twenty-seven of Detective Comics as Bruce Wayne.
                    </Description>
                </TimelineItem>

                <TimelineItem
                    innerRef={ (el) => this.addTimelineItem({ id: 1, item: el }) }
                    style={{ gridArea: "item2" }}
                    progress={ progress }
                    position={ timelineItemsPositions[1] }>
                    <Image src="/images/batman_family.jpg" />
                    <Description>
                        Bruce is brought up in Wayne Manor, and leads a happy and privileged life with his father thomas and mother Martha.
                    </Description>
                </TimelineItem>

                <TimelineItem
                    innerRef={ (el) => this.addTimelineItem({ id: 2, item: el }) }
                    style={{ gridArea: "item3" }}
                    progress={ progress }
                    position={ timelineItemsPositions[2] }>
                    <Image src="/images/batman_family_dead.jpg" />
                    <Description>
                        While on their way home from the movie theater, his parents are killed by a small-time criminal named Joe Chill.
                    </Description>
                </TimelineItem>

                <TimelineItem
                    innerRef={ (el) => this.addTimelineItem({ id: 3, item: el }) }
                    style={{ gridArea: "item4" }}
                    progress={ progress }
                    position={ timelineItemsPositions[3] }>
                    <Image src="/images/batman_training.jpg" />
                    <Description>
                        Bruce Wayne swears an oath to spend his life fighting crime. 
                        He engages in intense intellectual and physical training; however, he realizes that these skills alone would not be enough.
                    </Description>
                </TimelineItem>

                <TimelineItem
                    innerRef={ (el) => this.addTimelineItem({ id: 4, item: el }) }
                    style={{ gridArea: "item5" }}
                    progress={ progress }
                    position={ timelineItemsPositions[4] }>
                    <Image src="/images/batman_discovery.jpg" />
                    <Description>
                        Bruce wanted to design a disguise that would strike terror into the hearts of criminals. He must be a creature of the night, black, terrible.
                        <br />
                        A bat suddenly flies through the window, inspiring Bruce to craft the Batman persona.
                    </Description>
                </TimelineItem>

                <TimelineItem
                    innerRef={ (el) => this.addTimelineItem({ id: 5, item: el }) }
                    style={{ gridArea: "item6" }}
                    progress={ progress }
                    position={ timelineItemsPositions[5] }>
                    <Image src="/images/batman_costume.png" />
                    <Description>
                        Thus, marking the beginning of the man, the myth, the legend... <strong>BATMAN!</strong>
                    </Description>
                </TimelineItem>

            </Container>
        )
    }
}

export default BatmanHistory

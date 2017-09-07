import React from "react"
import styled from "styled-components"

let TimelineItem = styled.div`
    padding: 40px 0;
    transition: .5s;
    box-sizing: border-box;
    display: grid;
    position: relative;
    grid-column-gap: 1em;

    // @media (max-width: 768px) {
    //     grid-template-areas:
    //         "year year"
    //         "image desc" !important; //Important is needed because the Container that holds
    //                                 //these timelineItems sets their grid-template-areas
    //                                 //with a very specific selector that trumps @media.
    // }
`
let Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    flex-wrap: wrap;
    max-width: 700px;
    position: relative;
    grid-area: timeline;
    
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
class Timeline extends React.Component {
    render() {
        return (
            <Container>
                <TimelineItem>
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

                <TimelineItem>
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

export default Timeline

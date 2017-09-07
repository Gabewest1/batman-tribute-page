import React from "react"
import styled from "styled-components"

let Container = styled.div`
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    flex-direction: column;
    max-width: 700px;
    position: relative;
    grid-area: timeline;
`
let TimelineItem = styled.div`
    // padding: 40px 0;
    // opacity: .3;
    // filter: blur(2px);
    transition: .5s;
    box-sizing: border-box;
    // width: calc(50% - 40px);
    display: flex;
    position: relative;
    // transform: translateY(-80px);
`
let TimelineContent = styled.div`

`
let Image = styled.img`
    width: 400px;

    @media (max-width: 600px) {
        width: 200px;
    }
`
let Title = styled.h2`

`
let Description = styled.p`

`
class Timeline extends React.Component {
    render() {
        return (
            <Container>
                <TimelineItem>
                    <TimelineContent>
                        <Image src="/images/batman1.jpg" />
                        <Title>1920</Title>
                        <Description>
                            Bruce and his family were leaving the theater
                            after a night of festivites. On their way down
                            a back ally, they were held up at gun point.
                            Bruces dad, Jared, took a bullet to the skull, leaving
                            bruce as a bastard child.
                        </Description>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineContent>
                        <Image src="/images/batman1.jpg" />
                        <Title>1920</Title>
                        <Description>
                            Bruce and his family were leaving the theater
                            after a night of festivites. On their way down
                            a back ally, they were held up at gun point.
                            Bruces dad, Jared, took a bullet to the skull, leaving
                            bruce as a bastard child.
                        </Description>
                    </TimelineContent>
                </TimelineItem>
            </Container>
        )
    }
}

export default Timeline

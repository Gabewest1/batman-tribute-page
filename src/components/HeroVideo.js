import React from "react"
import styled from "styled-components"

let Video = styled.video`
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    display: block;
`
let VideoWrapper = styled.div`
    position: relative;
`
let Container = styled.div`
    position: relative;
`
let TintedOverlay = styled.div`
    background: rgba(0,0,0,.7);
    position: absolute;
    height: 100%;
    width: 100%;
`
let Title = styled.h1`
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translate(-50%, -100%);
    font-family: JusticeLeague;
    font-size: 10vw;
    white-space: nowrap;
    margin: 0;
`
class HeroVideo extends React.Component {
    render() {
        let { src } = this.props

        return (
            <Container { ...this.props }>
                <VideoWrapper>
                    <TintedOverlay />
                    <Video
                      innerRef={ el => el.playbackRate = .9 }
                      src={ src }
                      autoPlay
                      muted
                      loop />

                </VideoWrapper>
            </Container>
        )
    }
}

export default HeroVideo

import React from "react"
import styled from "styled-components"

const Container = styled.div`
    position: relative;
    height: 100%;
    max-width: 100%;
    background: url(/images/batman-hero1.jpg) no-repeat center / cover;
`
const TintedOverlay = styled.div`
    background: rgba(0,0,0,.6);
    position: absolute;
    height: 100%;
    width: 100%;
`
const Title = styled.h1`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-family: JusticeLeague;
    font-size: 3em;
    white-space: nowrap;
    margin: 0;
`

class BatmanHero extends React.Component {
    render() {
        const TitleComponent = window.innerWidth < 662
            ? (<Title>History<br/> of the<br/> Arkham Knight</Title>)
            : (<Title>History of the Arkam Knight</Title>)

        return (
            <Container { ...this.props }>
                <TintedOverlay />
                { TitleComponent }
                {/* <Image src="/images/batman-hero1.jpg" /> */}

            </Container>
        )
    }
}

export default BatmanHero

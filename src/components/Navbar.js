import React from "react"
import styled from "styled-components"

const Nav = styled.div`
    position: fixed;
    background: black;
    grid-area: nav;
    display: flex;
    align-items: center;
    padding: 15px 10px;
    box-sizing: border-box;
    top: 0;
    width: 100%;
    z-index: 1;
    height: ${({ height }) => height || "15vmin"};
`
const BatmanLogo = styled.img`
    max-height: 100%;
    max-width: 10%;
`
const Timeline = styled.ul`
    padding: 0;
    margin: 0;
    height: 3px;
    width: 100%;
    background: silver;
    list-style: none;
    display: flex;
    justify-content: space-between;
`
const Bullet = styled.li`
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: black;
    border: solid silver 3px;
    transform: translateY(-45%);
`

class Navbar extends React.Component {
	render() {
		return (
			<Nav { ...this.props }>
				<BatmanLogo src="/images/batman-logo.png" />
				<Timeline>
					<Bullet />
					<Bullet />
					<Bullet />
					<Bullet />
					<Bullet />
					<Bullet />
					<Bullet />
				</Timeline>
			</Nav>
		)
	}
}

export default Navbar

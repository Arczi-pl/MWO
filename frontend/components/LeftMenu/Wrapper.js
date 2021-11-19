import styled from 'styled-components'

const Wrapper = styled.nav`
    height: 100vh;
    padding-top: calc(80px + 24px); /*80px - nav h*/
    width: 240px;
    overflow: scroll;
    background-color: #fff;
    position: fixed;
    float: left;
    z-index: 1;
    box-shadow: 0px 6px 5px #000;
    ul {
        list-style-type: none;
    }
`

export default Wrapper

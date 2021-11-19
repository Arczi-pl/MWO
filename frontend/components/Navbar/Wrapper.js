import styled from 'styled-components'

const Wrapper = styled.header`
    position: fixed;
    top: ${props => `${props.top}`};
    transition: top 0.3s;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    background-color: #fff;
    height: 80px;
    box-shadow: 0px 0px 5px #000;

`
export default Wrapper
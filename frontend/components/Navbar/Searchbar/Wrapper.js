import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 720px;
    align-items: center;
    margin: 10px;
    background-color: #fff;
    border-radius: 32px;
    box-shadow: 1px 1px 3px #000 inset;

    svg {
        width: 24px;
        margin: 10px;
    }

    input {
        background: none;
        margin-right: 10px;
        border: none;
        width: 100%;
        height: 32px;
        outline: 0;
    }
    
`

export default Wrapper
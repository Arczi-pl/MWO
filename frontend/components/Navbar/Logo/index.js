import Wrapper from './Wrapper'

const Logo = (props) => {
    return(
        <Wrapper>
            {props.children?props.children:"PLACEHOLDER"}
        </Wrapper>
    )
}

export default Logo
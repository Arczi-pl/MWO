import Link from 'next/link'
import Wrapper from './Wrapper'

const Logo = (props) => {
    return(
        <Link href="/" passHref={true}>
            <Wrapper>
                {props.children}
            </Wrapper>
        </Link>
    )
}

export default Logo

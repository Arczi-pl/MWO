import Link from 'next/link'
import Wrapper from './Wrapper'

const LeftMenuLink = (props) => {
    return (
        <Wrapper>
            <Link href={props.href}>
                <a>
                    {props.text}
                </a>
            </Link>
        </Wrapper>
    )
}

export default LeftMenuLink

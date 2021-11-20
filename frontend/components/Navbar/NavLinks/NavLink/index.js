import Link from 'next/link'
import Wrapper from './Wrapper'

const NavLink = (props) => (
  <Wrapper>
    <Link href={props.href}>
        <a>
            {props.children}
        </a>
    </Link>
  </Wrapper>
)

export default NavLink
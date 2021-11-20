import NavLink from './NavLink'
import Wrapper from './Wrapper'
import AccountIcon from '../../../icons/Account'
import CartIcon from '../../../icons/Cart'

const NavLinks = () => {
    return(
        <Wrapper>
            <NavLink href="#">
                <AccountIcon />
                <span className="navbarLink">Account</span>
            </NavLink>
            <NavLink href="#">
                <CartIcon />
                <span className="navbarLink">Cart</span>
            </NavLink>
        </Wrapper>
    )
}

export default NavLinks
import NavLink from './NavLink'
import Wrapper from './Wrapper'
import AccountIcon from '../../../icons/Account'
import CartIcon from '../../../icons/Cart'

const NavLinks = () => {
    return(
        <Wrapper>
            <NavLink href="/account">
                <AccountIcon />
                <span className="navbarLink">Account</span>
            </NavLink>
            <NavLink href="/cart">
                <CartIcon />
                <span className="navbarLink">Cart</span>
            </NavLink>
        </Wrapper>
    )
}

export default NavLinks
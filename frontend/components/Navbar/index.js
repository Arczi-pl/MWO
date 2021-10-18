import NavLinks from './NavLinks'
import Searchbar from './Searchbar'
import Logo from './Logo'
import Wrapper from './Wrapper'

const Navbar = () => {
  return (
    <Wrapper>
      <Logo />
      <Searchbar />
      <NavLinks />
    </Wrapper>
  )
}
export default Navbar;
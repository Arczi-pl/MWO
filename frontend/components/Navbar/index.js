import NavLinks from './NavLinks'
import Searchbar from './Searchbar'
import Logo from './Logo'
import Wrapper from './Wrapper'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [top, setTop] = useState(0);

  useEffect(() => {
    var prevScrollPos = window.pageYOffset;

    function handleScroll(){
      var currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) 
        setTop(0)
      else
        setTop(-80)
    }

    window.addEventListener('scroll', handleScroll)
  });

  return (
    <Wrapper top={`${top}px`}>
      <Logo />
      <Searchbar />
      <NavLinks />
    </Wrapper>
  )
}


export default Navbar;
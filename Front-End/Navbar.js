import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
		<NavLink to='/events' activeStyle>
			Season
		</NavLink>
		<NavLink to='/annual' activeStyle>
			Garden Planning
		</NavLink>
		<NavLink to='/team' activeStyle>
			Remainders
		</NavLink>
		<NavLink to='/blogs' activeStyle>
			Garden Journal
		</NavLink>
		<NavLink to='/sign-up' activeStyle>
			My Profile
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/createac'>Sign Up</NavBtnLink>
		</NavBtn>
	</Nav>

);
};

export default Navbar;
import { useState } from 'react';
import Link from './Link';
import Router from 'next/router';
import NProgress from 'nprogress';
import ContainerStyles from './styles/ContainerStyles';
import NavStyles from './styles/NavStyles';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};




const Nav = () => {

  const [openNav, setOpenNav] = useState(false)
  const mobileNav = () => {
    setOpenNav(prev => prev = !prev);
    console.log(openNav)
  }

  return (
    <NavStyles>
      <ContainerStyles>
        <div className="header-wrap">
            <div className="header-wrap--logo-section">
            <Link href="/"><a><img src="/static/logo-white.png" alt="" /></a></Link>
            </div>
            <div className="header-wrap--link-section">
                <ul>
                    <li className="hide-on-mobile"><Link activeClassName='active' href="/"><a>Home</a></Link></li>
                    <li className="hide-on-mobile"><Link activeClassName='active' href="/about"><a>About Us</a></Link></li>
                    <li className="hide-on-mobile"><Link activeClassName='active' href="/services"><a>Services</a></Link></li>
                    <li className="hide-on-mobile"><Link activeClassName='active' href="/contactus"><a>Contact Us</a></Link></li>
                    {/* <li className="hide-on-mobile"><Link href="https://afrohub.typeform.com/to/rgfeMI"><a className="button button-header" target="_blank">Join the Waitlist</a></Link></li> */}
                    <li className="bugger-menu hide-on-desktop" onClick={mobileNav}>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </li>
                </ul>
                {openNav && <div className="mobile-nav hide-on-desktop">
                  <i onClick={mobileNav} className="fa fa-times" aria-hidden="true"></i>
                  <ul>
                      <li onClick={mobileNav}><Link activeClassName='active' href="/"><a>Home</a></Link></li>
                      <li onClick={mobileNav}><Link activeClassName='active' href="/about"><a>About Us</a></Link></li>
                      <li onClick={mobileNav}><Link activeClassName='active' href="/services"><a>Services</a></Link></li>
                      <li onClick={mobileNav}><Link activeClassName='active' href="/contactus"><a>Contact Us</a></Link></li>
                  </ul>
                </div>}
                
            </div>
        </div>
      </ContainerStyles>
    </NavStyles>
  )
}


export default Nav;
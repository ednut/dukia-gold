import { useState } from 'react';
import Link from 'next/link';
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
  const [openNav, setOpenNav] = useState(false);
  const mobileNav = () => {
    setOpenNav((prev) => (prev = !prev));
    console.log(openNav);
  };

  return (
    <NavStyles>
      <ContainerStyles>
        <div className="header-wrap">
          <div className="top-nav">
            <ul className="first-links">
              <li>
                <Link href="/">
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span>Careers</span>
                </Link>
              </li>
            </ul>
            <ul className="account">
              <li>
                <Link href="/">
                  <div className="link-wrap">
                    <span className="icon">
                      <i class="fa fa-user-plus" aria-hidden="true"></i>
                    </span>
                    <span className="text">Create Account</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <div className="link-wrap">
                    <span className="icon">
                      <i class="fa fa-user" aria-hidden="true"></i>
                    </span>
                    <span className="text">Login</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="logo-section">
            <div className="logo-sec">
              <Link href="/">
                <a>
                  <img src="/static/Logo.png" alt="Logo" />
                </a>
              </Link>
            </div>
            <div className="sarch-wrap">
              <div className="input-wrap">
                <i class="fa fa-search" aria-hidden="true"></i>
                <input type="text" placeholder="Search Products & Content" />
              </div>
              <button>Search</button>
            </div>
          </div>
        </div>
      </ContainerStyles>
      <div className="data-sec">
        <ContainerStyles>
          <ul className="data">
            <li>
              <span className="title">Gold:</span>
              <span className="cost">$1,747.25</span>
              <span className="trend">
                <i class="fa fa-caret-down" aria-hidden="true"></i>
                32.83
              </span>
            </li>
            <li>
              <span className="title">Silver:</span>
              <span className="cost">$47.25</span>
              <span className="trend">
                <i class="fa fa-caret-down" aria-hidden="true"></i>
                0.83
              </span>
            </li>
            <li>
              <span className="title">Platinum:</span>
              <span className="cost">$1,147.25</span>
              <span className="trend">
                <i class="fa fa-caret-down" aria-hidden="true"></i>
                0.83
              </span>
            </li>
            <li>
              <span className="title">Palladium:</span>
              <span className="cost">$2,147.25</span>
              <span className="trend">
                <i class="fa fa-caret-down" aria-hidden="true"></i>
                0.83
              </span>
            </li>
          </ul>
        </ContainerStyles>
      </div>
      <div className="cart-sec">
        <ContainerStyles>
          <div className="flex-wrapper">
            <ul className="extra-link">
              <li>
                <Link href="/">
                  <span>Gold Monetization Scheme</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span>Trading </span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span>Refining </span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span>Mining </span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span>Vaulting </span>
                </Link>
              </li>
            </ul>
            <ul className="cart-wrap">
              <li>
                <Link href="/">
                  <div>
                    {' '}
                    <span className="icon">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    </span>
                    <span className="text">My Cart</span>
                    <span className="count">12</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </ContainerStyles>
      </div>
    </NavStyles>
  );
};

export default Nav;

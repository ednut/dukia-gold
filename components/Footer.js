import Link from 'next/link';
import ContainerStyles from './styles/ContainerStyles';
import FooterStyle from './styles/FooterStyle';

const Footer = () => (
  <>
    <FooterStyle>
      <ContainerStyles>
        <div className="footer--wrap">
          <div className="footer--wrap__link-section">
            <div className="links">
              <div className="title">About Us</div>
              <ul>
                <li>
                  <Link href="/">Team</Link>
                </li>
                <li>
                  <Link href="/">Contact us</Link>
                </li>
              </ul>
            </div>
            <div className="links">
              <div className="title">Services</div>
              <ul>
                <li>
                  <Link href="/">Trading</Link>
                </li>
                <li>
                  <Link href="/">Refining</Link>
                </li>
                <li>
                  <Link href="/">Mining</Link>
                </li>
                <li>
                  <Link href="/">Vaulting</Link>
                </li>
              </ul>
            </div>
            <div className="links">
              <div className="title">Services</div>
              <ul>
                <li>
                  2A Idowu Olaitan Street, Gbagada Phase 2, Lagos, Nigeria
                </li>
                <li>
                  <a href="mailto:info@dukiagoldrefinery.co">
                    info@dukiagoldrefinery.co
                  </a>
                </li>
                <li>+234 8051885917</li>
              </ul>
            </div>
          </div>
          <div className="footer--wrap__info-section">
            <div className="title">
              Dukia Gold & Precious Metal Refinesy Company Limited
            </div>
            <div className="copywrite">
              &copy; Dukia Gold 2021. All Right Reserved
            </div>
            <ul>
              <li>
                <Link href="/">Copyright Notice</Link>
              </li>
              <li>
                <Link href="/">Terms of use</Link>
              </li>
              <li>
                <Link href="/">Privacy policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </ContainerStyles>
    </FooterStyle>
  </>
);

export default Footer;

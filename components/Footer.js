import Link from 'next/link';
import ContainerStyles from './styles/ContainerStyles';
import FooterStyle from './styles/FooterStyle';

const Footer = () => (
    <>
        <FooterStyle>
            <ContainerStyles>
                <div className="footer--wrap">
                    <div className="footer--logo-section">
                        <div className="footer--logo-section__logo">
                            <img src="/static/logo-white.png" />
                        </div>
                        <div className="footer--logo-section__caption">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                        </div>
                        <div className="footer--logo-section__social">
                            <ul>
                                <li>
                                    <a href="/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="/"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="/"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer--link-section">
                        <div className="footer--link-section__quick-links">
                            <ul>
                                <li className="title">
                                    Quick Links
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>How it works</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>Login</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>Register</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>Contact Us</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>About Us</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer--link-section__customer-care">
                            <ul>
                                <li className="title">
                                    Customer Care
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>Terms & Conditions</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a> Privacy & Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>FAQ</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer--subscription-section">
                    <div className="footer--subscription-section__title">
                        Subscribe Newsletter
                    </div>
                    <div className="footer--subscription-section__caption">
                        Let’s stay updated on the latest news and offers
                    </div>
                    <div className="footer--subscription-section__form">
                        <form>
                            <input type="text" placeholder="Enter your email..." />
                            <button>Subscribe</button>
                        </form>
                        
                    </div>
                </div>
                </div>
            </ContainerStyles>
        </FooterStyle>
    </>
)


export default Footer
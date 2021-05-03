import ContainerStyles from './styles/ContainerStyles';
import AboutStyle from './styles/AboutStyle';

const About = () => (
  <>
    <AboutStyle>
      <ContainerStyles>
        <div className="content-wrap">
          <div className="image"></div>
          <div className="content">
            <div className="title">About Dukia Gold</div>
            <div className="cont">
              Dukia Gold was incorporated on march 4, 2019 with RC 1564963 as a
              Special Purpose Company with the sole responsibility of
              manufacturing, refining, minting as well as trading in Gold and
              Precious Metal Bullion, Bars and Coins.
            </div>
            <div className="cont">
              Dukia Gold obtained its license as a Refinery May 15, 2019 and
              spent the intervening perioud to assemble the necessary right of
              way, plant, mechinery and equipment including every other activity
              essential for the commencement of profitable and sustainable
              operations
            </div>
            <a className="readmore" href="#">
              Read More <i class="fa fa-caret-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </ContainerStyles>
    </AboutStyle>
  </>
);

export default About;

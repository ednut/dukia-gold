import ContainerStyles from './styles/ContainerStyles';
import BannerStyle from './styles/BannerStyle';

const Banner = () => (
  <>
    <BannerStyle>
      <div className="overlay">
        <ContainerStyles>
          <div className="title">Dukia Gold</div>
          <div className="card-wrap">
            <div className="card">
              <div className="card-title">Who We Are</div>
              <div className="card-cont">
                Sourcing, supplying, refining and trading precious metals
                accross all Sub Saharan Africa
              </div>
              <div className="link">
                <a href="/"> More</a>
              </div>
            </div>
            <div className="card">
              <div className="card-title">Trade With Us</div>
              <div className="card-cont">
                Sourcing, supplying, refining and trading precious metals
                accross all Sub Saharan Africa
              </div>
              <div className="link">
                <a href="/"> More</a>
              </div>
            </div>
            <div className="card">
              <div className="card-title">Media and Market</div>
              <div className="card-cont">
                Sourcing, supplying, refining and trading precious metals
                accross all Sub Saharan Africa
              </div>
              <div className="link">
                <a href="/"> More</a>
              </div>
            </div>
          </div>
        </ContainerStyles>
      </div>
    </BannerStyle>
  </>
);

export default Banner;

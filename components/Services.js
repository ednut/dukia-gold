import ContainerStyles from './styles/ContainerStyles';
import ServicesStyle from './styles/ServicesStyle';

const Services = () => (
  <>
    <ServicesStyle>
      <ContainerStyles>
        <div className="service-wrap">
          <div className="card">
            <div
              className="image"
              style={{
                backgroundImage: "url('https://i.ibb.co/2FzM8cP/trading.png')"
              }}
            ></div>
            <div className="title">Trading Services</div>
            <div className="content">
              Dukia Gold has set up Buying Centres around Nigeria where miners
              of raw gold and urban gold traders such as owners of previously
              refined jewellery and electronic scrap sellers can trade their
              precious metals
            </div>
            <a className="readmore" href="#">
              Read More <i class="fa fa-caret-right" aria-hidden="true"></i>
            </a>
          </div>

          <div className="card">
            <div
              className="image"
              style={{
                backgroundImage:
                  "url('https://i.ibb.co/djBcLLP/gold-refinery.png')"
              }}
            ></div>
            <div className="title">Refining Solution</div>
            <div className="content">
              We offer worldwide refining and related services for minded dore
              (For which restrictions apply as per our supply chain due
              diligence policies). As a refinery, we process of precious metals
              for evelaution and refining from high-end industries, bank,
              recyclers, and reputable mining companies
            </div>
            <a className="readmore" href="#">
              Read More <i class="fa fa-caret-right" aria-hidden="true"></i>
            </a>
          </div>

          <div className="card">
            <div
              className="image"
              style={{
                backgroundImage: "url('https://i.ibb.co/W68cPb4/mining.png')"
              }}
            ></div>
            <div className="title">Mining Services</div>
            <div className="content">
              Dukia Gold & Precious Metal Refining Co. Limited formally launched
              its Gold markrting and raw materials' purchasing programme on
              Tuesday June 9, 2020 with necessary support from the Federal
              Government of Nigeria{' '}
            </div>
            <a className="readmore" href="#">
              Read More <i class="fa fa-caret-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </ContainerStyles>
    </ServicesStyle>
  </>
);

export default Services;

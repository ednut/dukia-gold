import styled from 'styled-components';

const AboutStyle = styled.div`
  width: 100%;
  height: 70rem;
  clip-path: polygon(
    20% 0%,
    80% 0%,
    100% 0,
    100% 66%,
    50% 100%,
    50% 100%,
    0 68%,
    0 0
  );
  background-color: #fff8eb;
  padding: 10rem 0;
  @media (max-width: 991px) {
    width: 100%;
    height: auto;
    clip-path: none;
    padding: 5rem 0;
  }
  .content-wrap {
    display: flex;
    flex-wrap: nowrap;
    color: #d38a36;
    @media (max-width: 991px) {
      flex-wrap: wrap;
    }
    .image {
      background-image: url('https://i.ibb.co/kXcc4XY/gold-bar.png');
      width: 40%;
      height: 30rem;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      margin-right: 4rem;
      @media (max-width: 991px) {
        width: 100%;
        height: 20rem;
        margin-bottom: 2rem;
      }
    }
    .content {
      width: 60%;
      @media (max-width: 991px) {
        width: 100%;
      }
      .title {
        font-size: 2.5rem;
        text-transform: uppercase;
        font-weight: 500;
        width: 25%;
        line-height: 3.3rem;
        margin-bottom: 2rem;
        @media (max-width: 991px) {
          width: 100% !important;
        }
      }
      .cont {
        color: #8b572a;
        line-height: 2.3rem;
        font-size: 1.7rem;
        margin-bottom: 2rem;
      }

      a.readmore {
        color: #d3b836;
        font-size: 1.7rem;
      }
    }
  }
`;

export default AboutStyle;

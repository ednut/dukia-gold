import styled from 'styled-components';

const ServicesStyle = styled.div`
  width: 100%;
  padding: 10rem 0;
  .service-wrap {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .card {
      width: 30%;
      @media (max-width: 991px) {
        width: 100%;
        margin-bottom: 3rem;
      }
      .image {
        width: 100%;
        height: 20rem;
        margin-bottom: 2rem;
      }
      .title {
        font-size: 2.5rem;
        text-transform: uppercase;
        font-weight: 500;
        width: 25%;
        line-height: 3.3rem;
        margin-bottom: 2rem;
        color: #d38a36;
        @media (max-width: 991px) {
          width: 100% !important;
        }
      }
      .content {
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
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export default ServicesStyle;

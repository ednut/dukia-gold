import styled from 'styled-components';

const BannerStyle = styled.footer`
  width: 100%;
  height: 60rem;
  background-image: url('https://i.ibb.co/NtVPxb8/sean-pollock-Ph-Yq704ffd-A-unsplash.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  @media (max-width: 991px) {
    height: 85rem;
  }
  .overlay {
    background-color: #c6ae3645;
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 5rem 4rem;
    .title {
      font-size: 9rem;
      text-transform: uppercase;
      font-weight: 600;
      background: linear-gradient(
        173deg,
        rgba(162, 129, 31, 1) 0%,
        rgba(162, 129, 31, 1) 35%,
        rgba(228, 214, 47, 1) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      @media (max-width: 991px) {
        font-size: 5rem;
      }
    }
    .card-wrap {
      margin-top: 3rem;
      display: flex;
      justify-content: space-between;
      flex-wrap: nowrap;
      @media (max-width: 991px) {
        flex-wrap: wrap;
      }
      .card {
        width: 30%;
        height: 25rem;
        color: #fff;
        border: 2px solid #8e802b;
        background: #cab4515c;
        text-align: left;
        padding: 2rem;
        @media (max-width: 991px) {
          width: 100%;
          height: 20rem;
          margin-bottom: 1.5rem;
        }
        .card-title {
          text-transform: uppercase;
          font-weight: 500;
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        .card-cont {
          line-height: 2rem;
          font-size: 1.6rem;
          font-weight: 300;
          margin-bottom: 8rem;
          @media (max-width: 991px) {
            margin-bottom: 1rem !important;
          }
        }
        .link {
          color: #e5d51f;
          font-size: 1.7rem;
          a {
            color: #e5d51f;
          }
        }
      }
    }
  }
`;

export default BannerStyle;

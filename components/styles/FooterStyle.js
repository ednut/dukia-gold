import styled from 'styled-components';

const FooterStyle = styled.footer`
  width: 100%;
  min-height: 40rem;
  position: relative;
  background-color: ${(props) => props.theme.footerColor};
  color: rgba(255, 255, 255, 0.72);
  font-weight: 300;
  font-size: 1.4rem;
  .footer {
    &--wrap {
      padding: 10rem 0;
      @media (max-width: 991px) {
        flex-direction: column;
      }
      &__link-section {
        display: flex;
        flex-wrap: wrap;
        .links {
          width: 20%;
          @media (max-width: 991px) {
            width: 100%;
          }
          .title {
            color: ${(props) => props.theme.brandColor};
            font-weight: 500;
            text-transform: uppercase;
            position: relative;
            margin-bottom: 1.5rem;
            font-size: 1.5rem;
            &::after {
              content: '';
              position: absolute;
              width: 2rem;
              border-top: 2px solid #7c5b34;
              bottom: 0;
              left: 0;
            }
          }
          ul {
            margin: 0;
            padding: 0;
            li {
              display: block;
              margin-bottom: 1rem;
              font-weight: 500;
              color: #fff;
              line-height: 2rem;
              a {
                color: #fff;
                font-weight: 500;
              }
            }
          }
        }
      }
      &__info-section {
        border-top: 2px solid #51575c;
        width: 100%;
        margin-top: 4rem;
        .title {
          margin-top: 2rem;
          color: ${(props) => props.theme.brandColor};
          font-size: 1.5rem;
          font-weight: 500;
        }
        .copywrite {
          display: inline;
          color: #fff;
        }
        ul {
          margin: 0;
          padding: 0;
          display: inline-block;
          li {
            display: inline;
            margin-left: 2rem;
            a {
              color: #fff;
            }
          }
        }
      }
    }
  }
`;

export default FooterStyle;

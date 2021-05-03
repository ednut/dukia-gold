import styled from 'styled-components';

const NavStyles = styled.div`
  min-height: ${(props) => props.theme.headerHeight};
  width: 100%;
  z-index: 100;
  background: rgb(198, 212, 255);
  background: linear-gradient(
    0deg,
    rgba(198, 212, 255, 1) 0%,
    rgba(232, 238, 255, 1) 35%,
    rgba(255, 255, 255, 1) 100%
  );
  display: flex;
  flex-wrap: wrap;
  .header-wrap {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    height: 100%;
    width: 100%;
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.17);
    .top-nav {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      flex-wrap: wrap;
      padding: 1rem 0;
      font-size: 1.5rem;
      @media (max-width: 991px) {
        text-align: center;
      }
      .first-links {
        margin: 0;
        padding: 0;
        margin-right: 6rem;
        @media (max-width: 991px) {
          width: 100%;
        }
        li {
          display: inline;
          margin-left: 3rem;
          color: #5183c1;
          position: relative;
          &::after {
            content: '';
            position: absolute;
            width: 2px;
            height: 100%;
            border-left: 2px solid;
            top: 0;
            right: -14px;
          }
          &:last-child {
            &::after {
              content: none;
            }
          }
          a {
            display: inline;
            color: #5183c1;
            cursor: pointer;
          }
        }
      }
      .account {
        margin: 0;
        padding: 0;
        @media (max-width: 991px) {
          width: 100%;
        }
        li {
          display: inline;
          margin-left: 2rem;
          color: #5183c1;
          @media (max-width: 991px) {
            margin-right: 2rem;
          }
          div {
            display: inline;
          }
          i {
            display: inline-block;
            padding-right: 0.5rem;
          }
          a {
            color: #5183c1;
            cursor: pointer;
          }
        }
      }
    }
    .logo-section {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .logo-sec {
        padding-bottom: 1rem;
        a {
          img {
            width: 35rem;
            @media (max-width: 991px) {
              width: 35rem;
            }
          }
        }
        @media (max-width: 991px) {
          width: 100%;
        }
      }
      .sarch-wrap {
        display: flex;
        align-items: center;
        @media (max-width: 991px) {
          width: 100%;
          margin-bottom: 2rem;
        }
        .input-wrap {
          background-color: #fff;
          height: 5rem;
          width: 35rem;
          border-radius: 0.3rem;
          display: flex;
          flex-wrap: nowrap;
          box-shadow: 0 2px 5px 1px rgb(64 60 67 / 5%);
          @media (max-width: 991px) {
            width: 70%;
          }
          i {
            width: 10%;
            text-align: center;
            display: inline-block;
            line-height: 4.9rem;
          }
          input {
            width: 90%;
            outline: none;
            height: 100%;
            border: none;
            color: #999;
            font-size: 1.5rem;
          }
        }
        button {
          background-color: ${(props) => props.theme.brandColor2};
          color: #fff;
          outline: none;
          border: none;
          margin-left: 0.4rem;
          border-radius: 0.3rem;
          width: 10rem;
          height: 5rem;
          font-size: 1.5rem;
          @media (max-width: 991px) {
            width: 30%;
          }
        }
      }
    }
  }
  .data-sec {
    width: 100%;
    background-color: ${(props) => props.theme.brandColor};
    padding: 0.2rem 0;
    @media (max-width: 991px) {
      text-align: center;
    }
    .data {
      margin: 0;
      padding: 0;
      li {
        display: inline-block;
        margin-right: 3rem;
        cursor: pointer;
        .title {
          font-weight: 300;
          padding-right: 0.5rem;
        }
        .cost {
          padding-right: 0.3rem;
        }
        .trend {
          color: #c9190e;
          font-size: 0.8rem;
          i {
          }
        }
      }
    }
  }
  .cart-sec {
    width: 100%;
    background-color: ${(props) => props.theme.brandColor2};
    .flex-wrapper {
      display: flex;
      width: 100%;
      flex-wrap: nowrap;
      justify-content: space-between;
      @media (max-width: 991px) {
        flex-wrap: wrap;
        text-align: center;
      }
    }
    .extra-link {
      margin: 0;
      padding: 0;
      @media (max-width: 991px) {
        width: 100%;
      }
      li {
        display: inline-block;
        color: #fff;
        margin-right: 3rem;
        cursor: pointer;
        line-height: 5rem;
        a {
          color: #fff;
          cursor: pointer;
        }
      }
    }
    .cart-wrap {
      margin: 0;
      padding: 0;
      @media (max-width: 991px) {
        width: 100%;
      }
      li {
        display: inline-block;
        color: #fff;
        cursor: pointer;
        a {
          color: #fff;
          cursor: pointer;
        }
        .icon {
          padding-right: 0.5rem;
          i {
          }
        }
        .text {
          padding-right: 0.5rem;
        }
        .count {
          background-color: #095cb2;
          display: inline-block;
          height: 100%;
          padding: 1rem 1.5rem;
        }
      }
    }
  }
  .mobile-nav {
    position: absolute;
    background: #fff;
    width: 100%;
    z-index: 100;
    left: 0;
    right: 0;
    top: 0;
    i {
      position: absolute;
      font-size: 3rem;
      right: 2rem;
      top: 1rem;
      color: ${(props) => props.theme.brandColor};
      z-index: 100;
    }
    ul {
      height: auto;
      position: relative;
      text-align: center;
      margin: 0;
      padding: 5rem 0;
      li {
        display: block;
        margin: 0;
        padding: 0;
        a {
          color: ${(props) => props.theme.black};
          font-size: 1.6rem;
          display: block;
          line-height: 1rem;
          font-weight: 600;
          display: inline-block;
          &.active {
            position: relative;
            &::after {
              content: '';
              position: absolute;
              background: #000;
              width: 100%;
              bottom: -2.8rem;
              height: 0.2rem;
              left: 0;
              top: 1.7rem;
            }
          }
        }
      }
    }
  }
`;

export default NavStyles;

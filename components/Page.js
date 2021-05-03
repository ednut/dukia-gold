import React, { Component } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Nav from './Nav';
import Meta from './Meta';
import Footer from '../components/Footer'

const theme = {
  headerHeight: '8rem',
  brandColor: '#3188DD',
  black: '#051441',
  white: '#ffffff',
  captionFont: "1.8rem",
  titleFont: "3rem",
  footerColor: '#001329'
};


const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Roboto', sans-serif;
    color: #051441;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }

  .hide-on-mobile{
      display: inline-block!important;
      @media (max-width: 991px){
          display: none!important;
      }
  }
  .hide-on-desktop{
      display: none!important;
      @media (max-width: 991px){
          display: inline-block!important;
      }
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
          <Meta />
          <GlobalStyle />
          <Nav />
          {this.props.children}
          <Footer/>
      </ThemeProvider>
    );
  }
}

export default Page;
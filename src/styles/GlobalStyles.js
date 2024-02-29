import styled, { createGlobalStyle } from 'styled-components';
import fontObject from './fonts';

const { regular, medium, semibold, bold } = fontObject;

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Inter';
  src: url(${regular}), url(${medium}), url(${semibold}), url(${bold});
  font-weight: 400 500 600 700;
  font-display: swap;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  background: #F3F3F3;
}

p:last-child {
  margin-bottom: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

button {
  cursor: pointer;
  border: none;
  color: inherit;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;

export const Container = styled.div`
  padding-left: 128px;
  padding-right: 128px;
`;

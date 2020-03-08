import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Odibee+Sans&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #ff8533;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  input {
    padding: 10px 5px;
    margin:5px;
    border-radius: 5px;
    border: 1px solid #777;
  }

  button {
  background-color: #000066;
  border: none;
  margin:5px;
  color: white;
  border-radius: 5px;
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
}

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;

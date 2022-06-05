import React from "react";
import { Link } from "react-router-dom";

const Choices = () => {
  return (
    <div>
      <h1>My choices for web development tools</h1>
      <ol>
        <li>Code Editors</li>
        <ul>
          <li>
            <Link to={{ pathname: "https://atom.io/" }}  style={{textDecoration:'none', color: '#ccc'}} target="_blank">
              Atom
            </Link>
          </li>
          <li>
            <Link
              to={{ pathname: "https://code.visualstudio.com/" }}  style={{textDecoration:'none', color: '#ccc'}}
              target="_blank"
            >
              VS code
            </Link>
          </li>
          <li>
            <Link
              to={{ pathname: "https://www.sublimetext.com/" }}  style={{textDecoration:'none', color: '#ccc'}}
              target="_blank"
            >
              Sublime
            </Link>
          </li>
        </ul>
        <li>Version Control Systems</li>
        <ul>
          <li>
            <Link to={{ pathname: "https://git-scm.com/" }}  style={{textDecoration:'none', color: '#ccc'}} target="_blank">
              Git
            </Link>
          </li>
          <li>
            <Link
              to={{ pathname: "https://subversion.apache.org/" }}  style={{textDecoration:'none', color: '#ccc'}}
              target="_blank"
            >
              SVN
            </Link>
          </li>
        </ul>
        <li>Version end asset</li>
        <ul>
          <li>
            <Link
              to={{ pathname: "https://fonts.google.com/" }}  style={{textDecoration:'none', color: '#ccc'}}
              target="_blank"
            >
              Google Fonts
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "https://fontawesome.com/" }}   style={{textDecoration:'none', color: '#ccc'}}target="_blank">
              Font Awesome
            </Link>
          </li>
        </ul>
        <li>Front end frameworks</li>
        <ul>
          <li>
            <Link
              to={{ pathname: "https://getbootstrap.com/" }}  style={{textDecoration:'none', color: '#ccc'}}
              target="_blank"
            >
              Bootstrap
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "https://mui.com/" }}   style={{textDecoration:'none', color: '#ccc'}}target="_blank">
              Material UI
            </Link>
          </li>
        </ul>
        <li>CSS preprocessor</li>
        <ul>
          <li>
            <Link to={{ pathname: "https://sass-lang.com/" }}   style={{textDecoration:'none', color: '#ccc'}}target="_blank">
              SASS
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "https://lesscss.org/" }}  style={{textDecoration:'none', color: '#ccc'}} target="_blank">
              LESS
            </Link>
          </li>
        </ul>
        <li>Javascript Frameworks / Libraries</li>
        <ul>
          <li>
            <Link to={{ pathname: "https://reactjs.org/" }}  style={{textDecoration:'none', color: '#ccc'}} target="_blank">
              React
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "https://angularjs.org/" }}   style={{textDecoration:'none', color: '#ccc'}}target="_blank">
              Angular
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "https://vuejs.org/" }}  style={{textDecoration:'none', color: '#ccc'}} target="_blank">
              Vue.js
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "https://jquery.com/" }}  style={{textDecoration:'none', color: '#ccc'}} target="_blank">
              jQuery
            </Link>
          </li>
        </ul>
        <li>Developer Tools</li>
        <ul>
          <li>
            <Link
              to={{ pathname: "https://developer.chrome.com/docs/devtools/" }}  style={{textDecoration:'none', color: '#ccc'}}
              target="_blank"
            >
              Chrome Dev Tools
            </Link>
          </li>
          <li>Firefox Web Inspector</li>
          <li>Safari Web Inspector</li>
        </ul>
        <li>Online Coding Environments</li>
        <ul>
          <li>
            <Link
              to={{ pathname: "https://codepen.io/your-work" }}  style={{textDecoration:'none', color: '#ccc'}}
              target="_blank"
            >
              Codepen
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "https://replit.com/~" }}  style={{textDecoration:'none', color: '#ccc'}} target="_blank">
              Repl
            </Link>
          </li>
        </ul>
        <li>Other Tools:</li>
        <ul>
          <li>Terminal</li>
          <li>Github</li>
        </ul>
      </ol>
    </div>
  );
};

export default Choices;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h3>About Me</h3>
      <ul  style={{listStyle:'none'}}>
        <li>
          <Link to="./"  style={{textDecoration:'none', color: '#ccc'}}>Homepage</Link>
        </li>
        <li>
          <Link to="./tools"  style={{textDecoration:'none', color: '#ccc'}}>Tools</Link>
        </li>
        <li>
          <Link to="./choices"  style={{textDecoration:'none', color: '#ccc'}}>My choices</Link>
        </li>
        <li>
          <Link to="./websites"  style={{textDecoration:'none', color: '#ccc'}}>Websites to follow</Link>
        </li>
        <li>
          <Link to={{pathname: "https://www.seytech.co/"}} target='_blank'  style={{textDecoration:'none', color: '#ccc'}} >Seytech</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

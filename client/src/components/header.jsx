import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { RiHomeGearFill } from 'react-icons/ri';
import NavBar from './navBar.jsx';


var Header = () => {
  const [isHeaderHovered, setHeaderIsHovered] = useState(false);

  const toggleHoverHeader = () => {
    setHeaderIsHovered(!isHeaderHovered);
  }

  var headerLinkStyle = isHeaderHovered ? {textAlign: 'center', color: '#e0edff', cursor: 'pointer', padding: '0px 10px'} : {textAlign: 'center', color: 'white', padding: '0px 10px'}


  return (
    <div style={{position: 'sticky', top: '0', zIndex: '1'}}>
      <div style={{padding: '2.0em', backgroundColor: '#2485D0', color: 'white', textAlign: 'center'}}>
      <Link
        to="/"
        style={headerLinkStyle}
        onMouseEnter = {() => toggleHoverHeader()}
        onMouseLeave = {() => toggleHoverHeader()}
        >
        <RiHomeGearFill style={{fontSize: '300%'}} />
        <div style={{ fontSize: '200%'}}>Mutuo Facile</div>
        <div style={{paddingTop: '0.5em', fontStyle: 'italic'}}>Calcola la rata del mutuo</div>
      </Link>
      </div>
      <NavBar/>
    </div>
  )
}

export default Header;
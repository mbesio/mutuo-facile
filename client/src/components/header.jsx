import React from 'react';
import { RiHomeGearFill } from 'react-icons/ri';
import NavBar from './navBar.jsx';

var Header = () => {
  return (
    <div style={{position: 'sticky', top: '0', zIndex: '1'}}>
      <div style={{padding: '2.0em', backgroundColor: '#2485D0', color: 'white', textAlign: 'center'}}>
        <RiHomeGearFill style={{fontSize: '300%'}} />
        <div style={{ fontSize: '200%'}}>Mutuo Facile</div>
        <div style={{paddingTop: '0.5em', fontStyle: 'italic'}}>Calcola la rata del mutuo</div>
      </div>
      <NavBar/>
    </div>
  )
}

export default Header;
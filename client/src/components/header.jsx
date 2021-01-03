import React from 'react';
import { RiHomeGearFill } from 'react-icons/ri';

var Header = () => {
  return (
    <div>

      <div style={{padding: '2.0em', backgroundColor: '#2485D0', color: 'white', textAlign: 'center', position: 'sticky', top: '0', zIndex: '1'}}>
        <RiHomeGearFill style={{fontSize: '300%'}} />

        <div style={{ fontSize: '200%'}}>Mutuo Facile</div>
        <div style={{paddingTop: '0.5em', fontStyle: 'italic'}}>Calcola la rata del mutuo</div>
      </div>

    </div>

  )
}

export default Header;
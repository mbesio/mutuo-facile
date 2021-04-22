import React, { useState} from 'react';

const NavBar = () => {
  const [isBancheHovered, setBancheIsHovered] = useState(false);
  const [isTassiHovered, setTassiIsHovered] = useState(false);

  const toggleHoverBanche = () => {
    setBancheIsHovered(!isBancheHovered);
  }

  const toggleHoverTassi = () => {
    setTassiIsHovered(!isTassiHovered);
  }

  var feedbackBancheLinkStyle = isBancheHovered ? {textAlign: 'center', color: '#e0edff', cursor: 'pointer', padding: '0px 10px', fontSize: '1.5em'} : {textAlign: 'center', color: 'white', padding: '0px 10px', fontSize: '1.5em'}

  var feedbackTassiLinkStyle = isTassiHovered ? {textAlign: 'center', color: '#e0edff', cursor: 'pointer', padding: '0px 10px', fontSize: '1.5em'} : {textAlign: 'center', color: 'white', padding: '0px 10px', fontSize: '1.5em'}


  return(
    <div style={{display: 'flex', justifyContent: 'center', backgroundColor: '#2485D0', borderStyle: 'solid', borderWidth: '5px 0px 5px 0px', borderColor: 'white', color: 'white', padding: '0.5em'}}>
      <div
        style={feedbackBancheLinkStyle}
        onMouseEnter = {() => toggleHoverBanche()}
        onMouseLeave = {() => toggleHoverBanche()}
        > Banche
      </div>
      <div
        style={feedbackTassiLinkStyle}
          onMouseEnter = {() => toggleHoverTassi()}
          onMouseLeave = {() => toggleHoverTassi()}
        > Tassi
      </div>
    </div>
  )
}

export default NavBar;
import React from 'react';
import { RiHomeGearFill } from 'react-icons/ri';

class Footer extends React.Component{
  constructor(props) {
    super(props)
    this.state ={
      isHover: false
    }
  }
  render() {
    return (
      <div style={{padding: '1.0em', backgroundColor: 'black', color: 'white', position: 'sticky', bottom: '0', zIndex: '1'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{paddingRight: '0.75em'}}>©</div>
            <RiHomeGearFill style={{fontSize: '100%'}} />
            <div style={{ fontSize: '100%', paddingLeft: '0.5em'}}>Mutuo Facile</div>
          </div>
        <a target={"_blank"} rel={"noopener noreferrer"} style={{textAlign: 'center', color: 'white'}} href={"https://forms.gle/pGj8ZZv3P9NEfV8E9"}>Feedback e suggerimenti</a>
        <div style={{alignItems: 'right'}}>Versione Beta</div>
        </div>
      </div>
    )
  }
}

export default Footer;

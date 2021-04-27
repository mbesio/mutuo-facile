import React from 'react';

const BankLink = ({bank}) => {
  return(
    <div style={{ display: "flex", alignItems: "center", padding: "20px"}}>
      <img style={{ paddingRight: "10px"}} width="200px" src={bank.logo} />
      <a href={bank.link} target="_blank" rel="noopener noreferrer">Esplora i mutui di {bank.name}</a>
    </div>
  )
}

export default BankLink;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BankLink from './bankLink.jsx';

const BankLinks = () => {
  const [banks, setBanks] = useState([]);


  useEffect(() => {
    axios.get('/banklinks')
      .then( (banks) => {
        setBanks(banks.data);
      })
      .catch((err) => {
        console.log('there was an error');
      })
  }, [])

  return (
    <div>
      {
        banks.map( (bank) => (
          <BankLink  key={bank._id} bank={bank}/>
         )
        )
      }
    </div>
  )
}

export default BankLinks;
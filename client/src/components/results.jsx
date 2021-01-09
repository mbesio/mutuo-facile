import React from 'react'
import { Grid } from 'semantic-ui-react';
import { AiFillBank, AiOutlinePercentage } from 'react-icons/ai';
import { ImCalendar } from 'react-icons/im';
import NumberFormat from 'react-number-format';


import monthlyInstallment from '../lib/installment.js';

var Results = (props) => {

  var installment = monthlyInstallment(props.mutuo.importo, props.mutuo.tasso, props.mutuo.durata);
  var totalCost = installment * 12 * props.mutuo.durata;
  var interestPercentage = (totalCost - props.mutuo.importo) / totalCost * 100;

  var totalCostDisplay = totalCost.toFixed(2);
  var interestPercentageDisplay = interestPercentage.toFixed(1);



  return (
    <div style={{ width: '30%'}}>
      <div style={{ width: '100%', height:'80%', paddingTop: '5px', paddingLeft: '5%', paddingRight: '5%', backgroundColor: '#e0edff'}}>
        <div style={{fontSize: '200%', paddingBottom: '10%', marginTop: '0.5em'}}>Riepilogo</div>
        <div style={{height:'80%', marginTop: '0', display: 'flex', flexDirection: 'row'}}>
            <div style={{display:'flex', flexDirection: 'column', justifyContent: 'flex-start',marginTop: '1%', marginBottom: '1%', marginRight: '10%'}}>
              <div style={{fontSize: '150%', marginBottom: '15px'}}>Parametri</div>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <AiFillBank style={{margin: '0.4em'}} />
                <NumberFormat value={props.mutuo.importo} displayType={'text'} thousandSeparator={true} prefix={'€'} />
              </div>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <AiOutlinePercentage style={{margin: '0.4em'}} />
                <div>{props.mutuo.tasso}%</div>
              </div>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <ImCalendar style={{margin: '0.4em'}}/>
                <div>{props.mutuo.durata} anni</div>
              </div>
            </div>
            <div style={{display:'flex', flexDirection: 'column', justifyContent: 'flex-start', marginTop: '1%', marginBottom: '1%', marginRight: '2%'}}>
              <div style={{fontSize: '150%', marginBottom: '15px'}}>Risultato</div>
              <div style={{display: 'flex', justifyContent: 'space-between',alignItems: 'center'}}>
                <div style={{margin: '0.4em'}}>Rata:</div>
                <NumberFormat style={{fontSize: '200%'}} value={installment} displayType={'text'} thousandSeparator={true} prefix={'€'} />
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between',alignItems: 'center'}}>
                <div style={{margin: '0.4em'}}>
                  <div>Costo totale</div>
                  <div style={{fontSize: '75%'}}>(Capitale + Interessi)</div>
                </div>
                <NumberFormat value={totalCostDisplay} displayType={'text'} thousandSeparator={true} prefix={'€'} />
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between',alignItems: 'center'}}>
                <div style={{margin: '0.4em'}}>
                  <div> Quota interessi</div>
                  <div style={{fontSize: '75%'}}>(% totale costo mutuo)</div>
                </div>
                <div>{interestPercentageDisplay}%</div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Results;
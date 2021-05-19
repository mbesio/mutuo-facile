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
    <div className="home-results-wrapper">
      <div className="home-results-inner-wrapper">
        <div className="home-results-title">Riepilogo</div>
        <div className="home-results-inner-inner-wrapper">
          <div className="home-results-column-wrapper">
            <div className="home-results-subtitle">Parametri</div>
            <div className="home-results-parameters">
                <AiFillBank style={{margin: '0.4em'}} />
                <NumberFormat value={props.mutuo.importo} displayType={'text'} thousandSeparator={true} prefix={'€'} />
              </div>
              <div className="home-results-parameters">
                <AiOutlinePercentage style={{margin: '0.4em'}} />
                <div>{props.mutuo.tasso}%</div>
              </div>
              <div className="home-results-parameters">
                <ImCalendar style={{margin: '0.4em'}}/>
                <div>{props.mutuo.durata} anni</div>
              </div>
            </div>
            <div className="home-results-column-wrapper">
              <div className="home-results-subtitle">Risultato</div>
              <div className="home-results-parameters">
                <div style={{margin: '0.4em'}}>Rata:</div>
                <NumberFormat style={{fontSize: '200%'}} value={installment} displayType={'text'} thousandSeparator={true} prefix={'€'} />
              </div>
              <div className="home-results-parameters">
                <div style={{margin: '0.4em'}}>
                  <div>Costo totale</div>
                  <div style={{fontSize: '75%'}}>(Capitale + Interessi)</div>
                </div>
                <NumberFormat value={totalCostDisplay} displayType={'text'} thousandSeparator={true} prefix={'€'} />
              </div>
              <div className="home-results-parameters">
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
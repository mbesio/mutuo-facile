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

  var totalCostDisplay = Math.round(totalCost);
  var interestPercentageDisplay = interestPercentage.toFixed(1);



  return (
    <div>
      <Grid divided='vertically' style={{marginTop: '1em', marginRight: '4em', marginLeft: '4em'}}>
      <div style={{fontSize: '250%'}}>Riepilogo e risultati</div>
        <Grid.Row columns={2}>
          <Grid.Column>
            <div style={{fontSize: '150%'}}>Riepilogo parametri mutuo</div>
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
          </Grid.Column>
          <Grid.Column>
            <div style={{fontSize: '150%'}}>Risultato</div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <div style={{margin: '0.4em'}}>Rata:</div>
              <NumberFormat value={installment} displayType={'text'} thousandSeparator={true} prefix={'€'} />
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <div style={{margin: '0.4em'}}>Costo totale (Capitale + Interessi)</div>
              <NumberFormat value={totalCostDisplay} displayType={'text'} thousandSeparator={true} prefix={'€'} />
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <div style={{margin: '0.4em'}}>Quota interessi (% totale costo mutuo)</div>
              <div>{interestPercentageDisplay}%</div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default Results;
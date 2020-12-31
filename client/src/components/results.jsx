import React from 'react'
import { Grid } from 'semantic-ui-react';
import { AiFillBank, AiOutlinePercentage } from 'react-icons/ai';
import { ImCalendar } from 'react-icons/im';

import monthlyInstallment from '../lib/installment.js';

var Results = (props) => {

  var installment = monthlyInstallment(props.mutuo.importo, props.mutuo.tasso, props.mutuo.durata);
  var totalCost = installment * 12 * props.mutuo.durata;
  var interestPercentage = (totalCost - props.mutuo.importo) / totalCost;



  return (
    <div>
      <Grid divided='vertically' style={{marginTop: '1em', marginRight: '4em', marginLeft: '4em'}}>
      <div style={{fontSize: '250%'}}>Riepilogo e risultati</div>
        <Grid.Row columns={2}>
          <Grid.Column>
            <div style={{fontSize: '150%'}}>Riepilogo parametri mutuo</div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <AiFillBank style={{margin: '0.4em'}} />
              <div>{props.mutuo.importo}</div>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <AiOutlinePercentage style={{margin: '0.4em'}} />
              <div>{props.mutuo.tasso}</div>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <ImCalendar style={{margin: '0.4em'}}/>
              <div>{props.mutuo.durata}</div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div style={{fontSize: '150%'}}>Risultato</div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <div style={{margin: '0.4em'}}>Rata</div>
              <div>{installment}</div>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <div style={{margin: '0.4em'}}>Costo totale (Capitale + Interessi)</div>
              <div>{totalCost}</div>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <div style={{margin: '0.4em'}}>Quota interessi (% totale costo mutuo)</div>
              <div>{interestPercentage}</div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default Results;
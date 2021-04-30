import React from 'react'
import { Table } from 'semantic-ui-react';
import NumberFormat from 'react-number-format';

import monthlyInstallment from '../lib/installment.js';

var SummaryTable = (props) => {
  var importo = props.mutuo.importo;
  var durata = props.mutuo.durata;
  var midTasso = props.mutuo.tasso;
  var years = [15, 20, 25, 30, 35, 40];
  var tassi = [
    midTasso - 0.5,
    midTasso - 0.4,
    midTasso - 0.3,
    midTasso - 0.2,
    midTasso - 0.1,
    midTasso,
    midTasso + 0.1,
    midTasso + 0.2,
    midTasso + 0.3,
    midTasso + 0.4,
    midTasso + 0.5
  ]

  return (
    <div style={{marginRight: '4em', marginLeft: '2.8em', paddingLeft: '10em', paddingRight: '10em'}}>
    <div style={{fontSize: '150%', marginBottom:'1em'}}>Simulazione rata: Durata vs. Tasso</div>
     <Table definition style={{ marginTop: '1em', marginRight: '4em', marginLeft: '4em'}}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          {years.map( (year) => {
            return <Table.HeaderCell key={year}>{`${year} anni`}</Table.HeaderCell>
          })}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {
          tassi.map( (tassi) => {
            return (
              <Table.Row key = {tassi}>
                <Table.Cell>{(tassi).toFixed(2) + '%' }</Table.Cell>
                {years.map( (year) => {
                  return <Table.Cell key={year}><NumberFormat value={Math.round(monthlyInstallment(importo, tassi, year))} displayType={'text'} thousandSeparator={true} prefix={'€'} /></Table.Cell>
                })}
            </Table.Row>
            )

          })}
      </Table.Body>
    </Table>
    <div style={{padding: '1.0em', backgroundColor: 'white'}}></div>
  </div>
  )
}

export default SummaryTable;
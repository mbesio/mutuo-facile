import React from 'react'
import { Table } from 'semantic-ui-react';


var SummaryTable = () => {
  return (
    <div>
    <div style={{fontSize: '200%', paddingBottom: '15px'}}>Simulazione rata: Durata vs. Tasso</div>
     <Table definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>15 anni</Table.HeaderCell>
          <Table.HeaderCell>20 anni</Table.HeaderCell>
          <Table.HeaderCell>25 anni</Table.HeaderCell>
          <Table.HeaderCell>30 anni</Table.HeaderCell>
          <Table.HeaderCell>35 anni</Table.HeaderCell>
          <Table.HeaderCell>40 anni</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>1.0%</Table.Cell>
          <Table.Cell>1000</Table.Cell>
          <Table.Cell>1100</Table.Cell>
          <Table.Cell>1200</Table.Cell>
          <Table.Cell>1300</Table.Cell>
          <Table.Cell>1400</Table.Cell>
          <Table.Cell>1500</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>1.2%</Table.Cell>
          <Table.Cell>1000</Table.Cell>
          <Table.Cell>1100</Table.Cell>
          <Table.Cell>1200</Table.Cell>
          <Table.Cell>1300</Table.Cell>
          <Table.Cell>1400</Table.Cell>
          <Table.Cell>1500</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>1.4%</Table.Cell>
          <Table.Cell>1000</Table.Cell>
          <Table.Cell>1100</Table.Cell>
          <Table.Cell>1200</Table.Cell>
          <Table.Cell>1300</Table.Cell>
          <Table.Cell>1400</Table.Cell>
          <Table.Cell>1500</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>1.6%</Table.Cell>
          <Table.Cell>1000</Table.Cell>
          <Table.Cell>1100</Table.Cell>
          <Table.Cell>1200</Table.Cell>
          <Table.Cell>1300</Table.Cell>
          <Table.Cell>1400</Table.Cell>
          <Table.Cell>1500</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>1.8%</Table.Cell>
          <Table.Cell>1000</Table.Cell>
          <Table.Cell>1100</Table.Cell>
          <Table.Cell>1200</Table.Cell>
          <Table.Cell>1300</Table.Cell>
          <Table.Cell>1400</Table.Cell>
          <Table.Cell>1500</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>2.0%</Table.Cell>
          <Table.Cell>1000</Table.Cell>
          <Table.Cell>1100</Table.Cell>
          <Table.Cell>1200</Table.Cell>
          <Table.Cell>1300</Table.Cell>
          <Table.Cell>1400</Table.Cell>
          <Table.Cell>1500</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>

  )
}

export default SummaryTable;










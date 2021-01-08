import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

import Results from './results.jsx';
import SummaryTable from './summaryTable.jsx';

import inputValidation from '../lib/inputvalidation.js';

class Modulo extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      importo: 200000,
      tasso: 2.5,
      durata: 30,
      tempImporto: 200000,
      tempTasso: 2.50,
      tempDurata: 30,
      errorMessage: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(e) {
    this.setState({
      errorMessage: ''
    })
    e.preventDefault();
    if( !inputValidation.isInputValid(this.state.tempImporto) ||
        !inputValidation.isInputValid(this.state.tempTasso) ||
        !inputValidation.isInputValid(this.state.tempDurata) ) {

      this.setState({
        errorMessage: 'Tutti i parametri devono essere numerici'
      })
    } else {
      this.setState({
        importo: this.state.tempImporto,
        tasso: this.state.tempTasso,
        durata: this.state.tempDurata
      })
    }
  }

  handleInputChange(e) {
    var updatedInputStepOne = inputValidation.parseInput(e.target.value);
    var updatedInput = inputValidation.parsePercentage(updatedInputStepOne);

    this.setState({
      [e.target.name]: parseFloat(updatedInput)
    })
  }

  render() {
    return(
      <div>
        <div style={{paddingTop: '1.0em', backgroundColor: 'white'}}></div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div style={{width: '30%', marginRight: '10%'}}>
            <div style={{fontSize: '200%', paddingBottom: '5px', marginRight: '1%', marginTop: '0.5em'}}>Modifica parametri mutuo</div>
            <Form style={{marginTop: '1.5em', marginBottom: '4em', marginRight: '5%'}} onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Importo (€)</label>
                  <input
                    name='tempImporto'
                    defaultValue={this.state.tempImporto}
                    onChange={this.handleInputChange}/>
              </Form.Field>
              <Form.Field>
                <label>Tasso d'interesse (%)</label>
                  <input
                    defaultValue={this.state.tempTasso}
                    name='tempTasso'
                    onChange={this.handleInputChange}/>
              </Form.Field>
              <Form.Field>
                <label>Durata (anni)</label>
                  <input
                    defaultValue={this.state.tempDurata}
                    name='tempDurata'
                    onChange={this.handleInputChange}/>
              </Form.Field>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <Button content='Calcola Rata' primary type='submit'/>
                <div style={{color: 'red'}}>{this.state.errorMessage}</div>
              </div>
            </Form>
          </div>
          <Results mutuo={this.state}/>
        </div>
        <SummaryTable mutuo = {this.state}/>
      </div>
    )
  }
}

export default Modulo
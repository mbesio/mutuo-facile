import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

import Results from './results.jsx';

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
        <Form style={{margin: '4em', marginRight: '20em'}} onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Importo (Amount) (€)</label>
              <input
                name='tempImporto'
                defaultValue={this.state.tempImporto}
                onChange={this.handleInputChange}/>
          </Form.Field>
          <Form.Field>
            <label>Tasso d'interesse (Interest Rate) (%)</label>
              <input
                defaultValue={this.state.tempTasso}
                name='tempTasso'
                onChange={this.handleInputChange}/>
          </Form.Field>
          <Form.Field>
            <label>Durata (Duration) (Anni)</label>
              <input
                defaultValue={this.state.tempDurata}
                name='tempDurata'
                onChange={this.handleInputChange}/>
          </Form.Field>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <Button content='Calcola Mutuo' primary type='submit'/>
            <div style={{color: 'red'}}>{this.state.errorMessage}</div>
          </div>
        </Form>
        <Results mutuo={this.state}/>
      </div>
    )
  }
}

export default Modulo
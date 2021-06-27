import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

import Results from './results.jsx';
import SummaryTable from './summaryTable.jsx';
import ResponsiveFrom from './responsiveFrom.jsx';

import inputValidation from '../lib/inputvalidation.js';

class Modulo extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      isEditingImporto: false,
      isEditingTasso: false,
      importo: 200000,
      tasso: 2.5,
      durata: 30,
      tempImporto: '',
      tempTasso: 2.50,
      tempDurata: 30,
      errorMessage: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputChangeImporto = this.handleInputChangeImporto.bind(this);
    this.toggleEditingImporto = this.toggleEditingImporto.bind(this);
    this.toCurrency = this.toCurrency.bind(this);
    this.toFormattedNumber = this.toFormattedNumber.bind(this);
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

  toggleEditingImporto() {
    this.setState({ isEditingImporto: !this.state.isEditingImporto });
  }

  handleInputChangeImporto(e) {
    // var updatedInputStepOne = inputValidation.parseInput(e.target.value);
    // var updatedInput = inputValidation.parsePercentage(updatedInputStepOne);
    let formattedNumber = e.target.value.replace(/\D/g,'');

    // set the maximum input to 10 million
    if(formattedNumber > 10000000) {
      formattedNumber = 10000000;
    }

    this.setState({
      [e.target.name]: formattedNumber
    })
  }

  handleInputChange(e) {
    let formattedNumber = e.target.value.replace(/\D/g,'');

    if(formattedNumber > 10000000) {
      formattedNumber = 10000000;
    }

    this.setState({
      [e.target.name]: formattedNumber
    })
  }

  toFormattedNumber(number) {
    const formatter = new Intl.NumberFormat("it-IT", {
      minimumFractionDigits: 0
    });
    return formatter.format(number);

  }

  toCurrency(number) {
    const formatter = new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0
    });
    return formatter.format(number);
  }

  render() {
    return(
      <div>
        <div className="home-heading"></div>
        <div className="home-wrapper">
          <div className="home-form-wrapper">
            <div className="home-form-header">Calcola la rata del tuo mutuo</div>
            <Form className="home-form-body"
            onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Importo (€)</label>
                  { this.state.isEditingImporto ? (
                    <input
                      type = "text"
                      name='tempImporto'
                      value={this.state.tempImporto === '' ? '' : this.toFormattedNumber(this.state.tempImporto)}
                      onChange={this.handleInputChangeImporto}
                      onBlur={this.toggleEditingImporto}
                    />
                  ) : (
                    <input
                      type = "text"
                      name='tempImporto'
                      placeholder = "200.000 €"
                      value={this.state.tempImporto === '' ? '' : this.toCurrency(this.state.tempImporto)}
                      onFocus={this.toggleEditingImporto}
                      readOnly
                    />
                  )}
              </Form.Field>
              <Form.Field>
                <label>Tasso d'interesse (%)</label>
                  <input

                    name='tempTasso'
                    defaultValue={this.state.tempTasso}
                    onChange={this.handleInputChange}/>
              </Form.Field>
              <Form.Field>
                <label>Durata (anni)</label>
                  <input

                    name='tempDurata'
                    defaultValue={this.state.tempDurata}
                    onChange={this.handleInputChange}/>
              </Form.Field>
              <div className="home-form-button">
                <Button content='Calcola Rata' primary type='submit'/>
                <div style={{color: 'red'}}>{this.state.errorMessage}</div>
              </div>
            </Form>
          </div>
          <Results mutuo={this.state}/>
        </div>
        {/* <SummaryTable mutuo = {this.state}/> */}
        <ResponsiveFrom/>
      </div>
    )
  }
}

export default Modulo
import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

import Results from './results.jsx';
import SummaryTable from './summaryTable.jsx';
import ResponsiveFrom from './responsiveFrom.jsx';

import inputValidation from '../lib/inputvalidation.js';
import { convertPercentageNumberFormatFromEuToUs } from '../lib/inputvalidation.js'

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
      tempTasso: '',
      tempDurata: 30,
      errorMessage: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputChangeImporto = this.handleInputChangeImporto.bind(this);
    this.handleInputChangeTasso = this.handleInputChangeTasso.bind(this);
    this.toggleEditingImporto = this.toggleEditingImporto.bind(this);
    this.toggleEditingTasso = this.toggleEditingTasso.bind(this);
    this.toCurrency = this.toCurrency.bind(this);
    this.toPercentage = this.toPercentage.bind(this);
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

      console.log('this.state.tempImporto ', this.state.tempImporto)
      console.log('this.state.tempTasso ', this.state.tempTasso)
      console.log('this.state.tempDurata ', this.state.tempDurata)


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

  toggleEditingTasso() {
    this.setState({ isEditingTasso: !this.state.isEditingTasso });
  }

  handleInputChangeImporto(e) {
    let formattedNumber = e.target.value.replace(/\D/g,'');

    if(formattedNumber > 10000000) {
      formattedNumber = 10000000;
    }

    this.setState({
      [e.target.name]: formattedNumber
    })
  }

  handleInputChangeTasso(e) {
    let formattedNumber = e.target.value.replace(/[^\d,]/g,'');

    formattedNumber = formattedNumber.split("").filter((item, index, array) => {
      return(item !== ','|| (item === ',' && array.indexOf(item) === index) )
      }).join("")

    let indexOfComma = formattedNumber.indexOf(',')
    let lengthOfFormattedNumeber = formattedNumber.length
    let formattedNumberBeforeComma = ''
    let formattedNumberAfterComma = ''
    if (indexOfComma === -1) {
      formattedNumberBeforeComma = formattedNumber.substring(0,2)
      formattedNumber = `${formattedNumberBeforeComma}`

    } else if(indexOfComma === lengthOfFormattedNumeber-1) {
      formattedNumber = `${formattedNumber}`

    } else {
      if (indexOfComma >= 2) {
        formattedNumberBeforeComma = formattedNumber.substring(0,2)
      } else if (indexOfComma === 1) {
        formattedNumberBeforeComma = formattedNumber.substring(0,1)
      } else if(indexOfComma === 0) {
        formattedNumberBeforeComma = '0'
      }

      formattedNumberAfterComma = formattedNumber.substring(indexOfComma+1, indexOfComma +3)

      formattedNumber = `${formattedNumberBeforeComma},${formattedNumberAfterComma}`

    }

    this.setState({
      [e.target.name]: formattedNumber
    })
  }

  handleInputChange(e) {
    let formattedNumber = e.target.value.replace(/\D/g,'');

    if(formattedNumber > 50) {
      formattedNumber = 50;
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

  toPercentage(number) {
    let numberPercentage = parseFloat(number.replace(',', '.'))/100;
    const formatter = new Intl.NumberFormat("it-IT", {
      style: 'percent',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    console.log('number ', numberPercentage)
    console.log('formatted ', formatter.format(numberPercentage))

    return formatter.format(numberPercentage);
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
                { this.state.isEditingTasso ? (
                    <input
                      type = "text"
                      name='tempTasso'
                      value={this.state.tempTasso === '' ? '' : this.state.tempTasso}
                      onChange={this.handleInputChangeTasso}
                      onBlur={this.toggleEditingTasso}
                    />
                  ) : (
                    <input
                      type = "text"
                      name='tempTasso'
                      placeholder = "2,5 %"
                      value={this.state.tempTasso === '' ? '' : this.toPercentage(this.state.tempTasso)}
                      onFocus={this.toggleEditingTasso}
                      readOnly
                    />
                  )}
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
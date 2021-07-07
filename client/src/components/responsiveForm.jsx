import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

import Results from './results.jsx';
import SummaryTable from './summaryTable.jsx';

import inputValidation from '../lib/inputvalidation.js';
import { convertPercentageNumberFormatFromEuToUs } from '../lib/inputvalidation.js'


var ResponsiveForm = () => {
  const [isEditingImporto, setIsEditingImporto] = useState(false)
  const [isEditingTasso, setIsEditingTasso] = useState(false)
  const [isEditingDurata, setIsEditingDurata] = useState(false)

  const [importo, setImporto] = useState(200000)
  const [tasso, setTasso] = useState(2.5)
  const [durata, setDurata] = useState(30)

  const [tempImporto, setTempImporto] = useState('')
  const [tempTasso, setTempTasso] = useState('')
  const [tempDurata, setTempDurata] = useState('')

  const [displayImporto, setDisplayImporto] = useState(0)
  const [displayTasso, setDisplayTasso] = useState(0)
  const [displayDurata, setDisplayDurata] = useState(0)

  const [isInvalidImportoInput, setIsInvalidImportoInput] = useState(false)
  const [isInvalidTassoInput, setIsInvalidTassoInput] = useState(false)
  const [isInvalidDurataInput, setIsInvalidDurataInput] = useState(false)


  const [errorMessage, setErrorMessage] = useState('')
  const [errorMessageImporto, setErrorMessageImporto] = useState('')
  const [errorMessageTasso, setErrorMessageTasso] = useState('')
  const [errorMessageDurata, setErrorMessageDurata] = useState('')


  const handleSubmit = (e) => {

    setErrorMessage('')

    e.preventDefault();
    if (!inputValidation.isInputValid(tempImporto) ||
      !inputValidation.isInputValid(displayTasso) ||
      !inputValidation.isInputValid(tempDurata)) {
      setErrorMessage('Tutti i parametri devono essere numerici')

      console.log('tempImporto ', tempImporto)
      console.log('displayTasso ', displayTasso)
      console.log('tempDurata ', tempDurata)

    } else {
      setImporto(tempImporto)
      setTasso(displayTasso)
      setDurata(tempDurata)
    }
  }

  const toggleEditingImporto = () => {
    setIsEditingImporto(!isEditingImporto)
  }

  const toggleEditingTasso = () => {
    setIsEditingTasso(!isEditingTasso)
  }

  const toggleEditingDurata = () => {
    setIsEditingDurata(!isEditingDurata)
  }

  const handleInputChangeImporto = (e) => {
    let currentImportoInput = e.target.value
    setTempImporto(currentImportoInput)

    const validDigitRegex = new RegExp(/^[0-9]*$/)
    let isValidInput = validDigitRegex.test(currentImportoInput)

    if (isValidInput) {
      setIsInvalidImportoInput(false)
    }

    if (!isValidInput || currentImportoInput[0] === '0') {
      setIsInvalidImportoInput(true)
      setDisplayImporto(currentImportoInput)
      setErrorMessageImporto('Inserire un valore numerico valido per l\'importo')
      return
    }

    const currentNumericImportoInput = parseInt(currentImportoInput)

    setDisplayImporto(currentNumericImportoInput)

    if (currentNumericImportoInput > 50000000) {
      setIsInvalidImportoInput(true)
      setErrorMessageImporto('Inserire un valore per l\'importo inferiore a 50 milioni')
    }
  }

  const handleInputChangeTasso = (e) => {
    let currentTassoInput = e.target.value
    setTempTasso(currentTassoInput)

    const validDigitRegex = new RegExp(/^[-,0-9]+$/)
    let numberOfCommas = currentTassoInput.split(",").length - 1

    let isValidInput = validDigitRegex.test(currentTassoInput)
    if (numberOfCommas > 1) {
      isValidInput = false
    }

    if (currentTassoInput.length === 0) {
      setIsInvalidTassoInput(false)
      return
    }

    if (!isValidInput || currentTassoInput[0] === '0') {
      setIsInvalidTassoInput(true)
      setDisplayTasso(currentTassoInput)
      setErrorMessageTasso('Inserire un valore numerico valido per il tasso')
      return
    }

    if (isValidInput) {
      setIsInvalidTassoInput(false)
    }

    const currentNumericTassoInput = parseFloat(currentTassoInput.replace(/,/g, '.'))
    setDisplayTasso(currentNumericTassoInput)

    if (currentNumericTassoInput > 20) {
      setIsInvalidTassoInput(true)
      setErrorMessageTasso('Inserire un valore per il tasso inferiore a 20%')
    }
  }

  const handleInputChangeDurata = (e) => {
    let currentDurataInput = e.target.value
    setTempDurata(currentDurataInput)

    const validDigitRegex = new RegExp(/^[0-9]*$/)
    let isValidInput = validDigitRegex.test(currentDurataInput)

    if (isValidInput) {
      setIsInvalidDurataInput(false)
    }

    if (!isValidInput || currentDurataInput[0] === '0') {
      setIsInvalidDurataInput(true)
      setDisplayDurata(currentDurataInput)
      setErrorMessageDurata('Inserire un valore numerico valido per la durata')
      return
    }

    const currentNumericDurataInput = parseInt(currentDurataInput)

    setDisplayDurata(currentNumericDurataInput)

    if (currentNumericDurataInput > 40) {
      setIsInvalidDurataInput(true)
      setErrorMessageDurata('Inserire un valore per la durata non superiore a 40 anni')
    }
  }




  const handleInputChange = (e) => {
    let formattedNumber = e.target.value.replace(/\D/g, '');

    if (formattedNumber > 50) {
      formattedNumber = 50;
    }

    setTempDurata(formattedNumber)
  }

  const toFormattedNumber = (numberString) => {
    const numberNumeric = numberString.replace(/\./g, '')

    const formatter = new Intl.NumberFormat("it-IT", {
      minimumFractionDigits: 0
    });
    return formatter.format(numberNumeric);
  }

  const toCurrency = (number) => {
    const formatter = new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0
    });
    return formatter.format(number);
  }

  const toPercentage = (number) => {
    let numberPercentage = parseFloat(number.replace(',', '.')) / 100;
    const formatter = new Intl.NumberFormat("it-IT", {
      style: 'percent',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    return formatter.format(numberPercentage);
  }

  return (
    <div>
      <div className="home-heading"></div>
      <div className="home-wrapper">
        <div className="home-form-wrapper">
          <div className="home-form-header">Calcola la rata del tuo mutuo</div>
          <Form className="home-form-body"
            onSubmit={handleSubmit}>
            <Form.Field>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <label>Importo (€)</label>
                {isInvalidImportoInput && <span style={{ color: 'red' }}>{errorMessageImporto}</span>}
              </div>
              {isEditingImporto ? (
                <input
                  style={{ borderColor: isInvalidImportoInput ? "red" : "" }}
                  type="text"
                  name='tempImporto'
                  value={tempImporto}
                  onChange={handleInputChangeImporto}
                  onBlur={toggleEditingImporto}
                  readOnly={false}
                />
              ) : (
                <input
                  style={{ borderColor: isInvalidImportoInput ? "red" : "" }}
                  type="text"
                  name='tempImporto'
                  placeholder="200.000 €"
                  value={(isInvalidImportoInput || tempImporto === '') ? tempImporto : toCurrency(displayImporto)}
                  onFocus={toggleEditingImporto}
                  readOnly={true}
                />
              )}
            </Form.Field>
            <Form.Field>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <label>Tasso d'interesse (%)</label>
                {isInvalidTassoInput && <span style={{ color: 'red' }}>{errorMessageTasso}</span>}
              </div>
              {isEditingTasso ? (
                <input
                  style={{ borderColor: isInvalidTassoInput ? "red" : "" }}
                  type="text"
                  name='tempTasso'
                  value={tempTasso}
                  onChange={handleInputChangeTasso}
                  onBlur={toggleEditingTasso}
                  readOnly={false}
                />
              ) : (
                <input
                  style={{ borderColor: isInvalidTassoInput ? "red" : "" }}
                  type="text"
                  name='tempTasso'
                  placeholder="2,5 %"
                  value={(isInvalidTassoInput || tempTasso === '') ? tempTasso : toPercentage(tempTasso)}
                  onFocus={toggleEditingTasso}
                  readOnly={true}
                />
              )}
            </Form.Field>
            <Form.Field>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <label>Durata (anni)</label>
                {isInvalidDurataInput && <span style={{ color: 'red' }}>{errorMessageDurata}</span>}
              </div>
              {isEditingDurata ? (
                <input
                  style={{ borderColor: isInvalidDurataInput ? "red" : "" }}
                  type="text"
                  name='tempDurata'
                  value={tempDurata}
                  onChange={handleInputChangeDurata}
                  onBlur={toggleEditingDurata}
                  readOnly={false}
                />
              ) : (
                <input
                  style={{ borderColor: isInvalidDurataInput ? "red" : "" }}
                  type="text"
                  name='tempDurata'
                  placeholder="30 anni"
                  value={(isInvalidDurataInput || tempDurata === '') ? tempDurata : `${tempDurata} anni`}
                  onFocus={toggleEditingDurata}
                  readOnly={true}
                />
              )}
            </Form.Field>
            <div className="home-form-button">
              <Button content='Calcola Rata' primary type='submit' />
              <div style={{ color: 'red' }}>{errorMessage}</div>
            </div>
          </Form>
        </div>
        <Results importo={importo} tasso={tasso} durata={durata} />
      </div>
    </div>
  )
}

export default ResponsiveForm;
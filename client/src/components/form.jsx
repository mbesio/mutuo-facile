import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

import Results from './results.jsx';

class Modulo extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      importo: 200000,
      tasso: 2.0,
      durata: 30,
      tempImporto: 0,
      tempTasso: 0,
      tempDurata: 0,
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

    // input validation
    // check for European number format
    if (this.state.tempImporto.indexOf(',') > -1) {
      this.setState({
        tempImporto: this.state.tempImporto.splice(this.state.tempImporto.indexOf(','), 1 , '.')
      })
    }
    if (this.state.tempTasso.indexOf(',') > -1) {
      var currentInput = this.state.tempTasso;
      var currentInputArray = currentInput.split('');
      console.log('currentInputArray ', currentInputArray)
      currentInputArray.splice(this.state.tempTasso.indexOf(','), 1 ,'.')
      var newInput = currentInputArray.join('');
      console.log('newInput ', newInput)
      console.log('this.state.tempTasso ', this.state.tempTasso)
      console.log('hello1 ')
      this.setState({
        errorMessage: 'hi from here',
        tempTasso: 100
      })
      console.log('hello2 ')
      console.log('this.state', this.state);
    }
    if (this.state.tempDurata.indexOf(',') > -1) {
      this.setState({
        tempDurata: this.state.tempDurata.splice(this.state.tempDurata.indexOf(','), 1 ,'.')
      })
    }
    // check if not a number has been inputted
    if ( isNaN(this.state.tempImporto) || isNaN(this.state.tempTasso) || isNaN(this.state.tempDurata) ) {
      console.log('Not a number')
      this.setState({
        errorMessage: 'tutti gli input devono essere numerici'
      })
    }
    // check if numbers have been included with comma decimals
      else {


        // now update everything and render
        this.setState({
          importo: this.state.tempImporto,
          tasso: this.state.tempTasso,
          durata: this.state.tempDurata
        })
      }




    console.log('this.state', this.state);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name] : e.target.value
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
                placeholder='200.000'
                onChange={this.handleInputChange}/>
          </Form.Field>
          <Form.Field>
            <label>Tasso d'interesse (Interest Rate) (%)</label>
              <input placeholder='2,0%'
                name='tempTasso'
                onChange={this.handleInputChange}/>
          </Form.Field>
          <Form.Field>
            <label>Durata (Duration) (Anni)</label>
              <input placeholder='30'
                name='tempDurata'
                onChange={this.handleInputChange}/>
          </Form.Field>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <Button content='Calcola Mutuo' primary type='submit'/>
            <div>{this.state.errorMessage}</div>
          </div>
        </Form>
        <Results mutuo={this.state}/>
      </div>
    )
  }
}

export default Modulo
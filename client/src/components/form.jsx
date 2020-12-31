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
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      importo: this.state.tempImporto,
      tasso: this.state.tempTasso,
      durata: this.state.tempDurata
    })
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
          <Button content='Calcola Mutuo' primary type='submit'/>
        </Form>
        <Results mutuo={this.state}/>
      </div>
    )
  }
}

export default Modulo
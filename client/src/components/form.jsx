import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'




const Modulo = () => (
  <Form style={{margin: '4em'}} >
    <Form.Field>
      <label>Importo (Amount) (€)</label>
      <input placeholder='200.000' />
    </Form.Field>
    <Form.Field>
      <label>Tasso d'interesse (Interest Rate) (%)</label>
      <input placeholder='2,0%' />
    </Form.Field>
    <Form.Field>
      <label>Durata (Duration) (Anni)</label>
      <input placeholder='30' />
    </Form.Field>
    <Button content='Calcola Mutuo' primary type='submit'/>
  </Form>
)

export default Modulo
import React from 'react'
import { Grid } from 'semantic-ui-react'

var Results = (props) => {
  return (
    <div>
      <Grid divided='vertically' style={{marginTop: '1em', marginRight: '4em', marginLeft: '4em'}}>
        <Grid.Row columns={1}>
        <Grid.Column>
          Here is where we will have the results
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            Hi there
          </Grid.Column>
          <Grid.Column>
            Hi there again
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default Results;
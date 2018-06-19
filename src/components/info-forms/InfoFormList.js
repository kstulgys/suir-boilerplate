import React from "react"
import { Grid, Image, Segment, Table } from "semantic-ui-react"
import { connect } from "react-redux"
import InfoFormTable from "./InfoFormTable"

const mapState = ({ forms }) => {
  console.log(forms)
  return {
    forms
  }
}

const InfoFormList = ({ forms }) => (
  <Grid.Row columns="equal" stretched>
    {forms.map(f => (
      <Grid.Column>
        <InfoFormTable name={f.name} formData={f.form} />
      </Grid.Column>
    ))}
  </Grid.Row>
)
export default connect(
  mapState,
  null
)(InfoFormList)

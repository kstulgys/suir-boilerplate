import React from "react"
import { Grid, Image, Segment, Table } from "semantic-ui-react"
import EditInfoFormTrigger from "./EditInfoFormTrigger"
const InfoFormTable = ({ formData, name }) => (
  <Segment rised padded>
    <Table basic="very">
      <Table.Header>
        <Table.Row>
          <EditInfoFormTrigger formData={formData} />
          <Table.HeaderCell textAlign="center" colSpan="2">
            {name}
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {formData.map(f => (
          <Table.Row>
            <Table.Cell>{f.prop1} </Table.Cell>
            <Table.Cell> {f.prop2}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </Segment>
)

export default InfoFormTable

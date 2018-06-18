import React from "react";
import { Grid, Image, Segment } from "semantic-ui-react";

const ItemsList = ({ items }) =>
  items.map(item => (
    <Grid.Row>
      <Grid.Column>
        <Segment>
          {item.firstName} {item.lastName}
        </Segment>
      </Grid.Column>
    </Grid.Row>
  ));

export default ItemsList;

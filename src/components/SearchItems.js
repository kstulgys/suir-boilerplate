import React from "react";
import { Field, reduxForm } from "redux-form";
import { Grid, Segment, Input } from "semantic-ui-react";

const TextInput = ({ placeholder }) => (
  <Input fluid placeholder={placeholder} />
);

const SearchItems = ({ handleSubmit }) => (
  <Grid.Row>
    <Grid.Column>
      <form onSubmit={handleSubmit}>
        <Field
          name="firstName"
          component={TextInput}
          type="text"
          placeholder="Search person..."
        />
      </form>
    </Grid.Column>
  </Grid.Row>
);

export default reduxForm({
  // a unique name for the form
  form: "contact"
})(SearchItems);

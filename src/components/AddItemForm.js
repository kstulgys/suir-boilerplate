import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Grid, Segment, Input, Form } from "semantic-ui-react";

const TextInput = ({ placeholder, input }) => (
  <Form.Input {...input} placeholder={placeholder} name="name" />
);

const AddItemForm = ({ handleSubmit }) => (
  <Grid.Row>
    <Grid.Column>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Field
            name="firstName"
            component={TextInput}
            type="text"
            placeholder="Type a first name"
          />
          <Field
            name="lastName"
            component={TextInput}
            type="text"
            placeholder="Type a last name"
          />
          <Form.Button content="Submit" />
        </Form.Group>
      </Form>
    </Grid.Column>
  </Grid.Row>
);

export default reduxForm({
  // a unique name for the form
  form: "add-item-form"
})(AddItemForm);

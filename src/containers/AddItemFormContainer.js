import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Grid, Segment, Input, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { createItem } from "redux/modules/items";
import AddItemForm from "components/AddItemForm";

const mapState = ({ items }) => ({
  items
});

class AddItemFormContainer extends Component {
  submit = values => {
    this.props.createItem(values);
    console.log(this.props.items);
  };

  render() {
    return <AddItemForm onSubmit={this.submit} />;
  }
}

export default connect(mapState, { createItem })(AddItemFormContainer);

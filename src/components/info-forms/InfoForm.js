import React, { Fragment } from "react"
import { Field, FieldArray, reduxForm } from "redux-form"
import { connect } from "react-redux"
import { compose, lifecycle } from "recompose"
import { Button, Icon, Grid, Form } from "semantic-ui-react"

const TextField = ({ width, input, label, type, meta: { touched, error } }) => (
  <Fragment>
    <Form.Input width={4} {...input} type={type} />
  </Fragment>
)

const TextArea = ({ input, label, type, meta: { touched, error } }) => (
  <Form.Input width={10} {...input} type={type} />
)

const renderLocations = ({ fields, meta: { error, submitFailed } }) => {
  return (
    <Fragment>
      <Button
        type="button"
        onClick={() => fields.push({})}
        content="Add Location"
      />
      {submitFailed && error && <span>{error}</span>}
      <br />
      <br />

      <Form>
        {fields.map((item, index) => (
          <Form.Group inline key={index} unstackable>
            <Form.Input width={1}>
              <h4>{index + 1}</h4>
            </Form.Input>
            <Field name={`${item}.prop1`} type="text" component={TextField} />
            <Field name={`${item}.prop2`} type="text" component={TextArea} />
            <Form.Input width={1}>
              <Icon
                link
                color="orange"
                width={1}
                name="delete"
                size="big"
                onClick={() => fields.remove(index)}
              />
            </Form.Input>
          </Form.Group>
        ))}
      </Form>
    </Fragment>
  )
}

const InfoForm = ({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column width={10}>
          <form onSubmit={handleSubmit}>
            <FieldArray name="data" component={renderLocations} />
            <div>
              <button type="submit" disabled={submitting}>
                Submit
              </button>
              <button
                type="button"
                disabled={pristine || submitting}
                onClick={reset}
              >
                Clear Values
              </button>
            </div>
          </form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

const mapState = (state, ownProps) => {
  const data = ownProps.formData
  console.log(data)
  return {
    data
  }
}

export default compose(
  connect(
    mapState,
    null
  ),
  reduxForm({
    form: "info-form"
  })
)(InfoForm)

// export default connect(
//   mapState,
//   null
// )(reduxForm({ form: "info-form", initialValues: { data } })(InfoForm))

// export default compose(
//     connect(mapState, null),
//     reduxForm({
//         form: "info-form",
//         initialValues: this.props.formData
//         })
// )(InfoForm)

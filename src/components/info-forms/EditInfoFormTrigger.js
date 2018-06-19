import React from "react"
import { Button, Modal } from "semantic-ui-react"
import InfoForm from "./InfoForm"

const EditInfoFormTrigger = ({ formData }) => (
  <Modal
    trigger={<Button>Show Modal</Button>}
    header="Reminder!"
    content={<InfoForm initialValues={{ data: formData }} />}
    actions={["Snooze", { key: "done", content: "Done", positive: true }]}
  />
)

export default EditInfoFormTrigger

import React from "react";
import { Contact } from "../../models/contact.model";
import PropTypes from "prop-types";

const ContactComponent = ({ contact, contactStatus, deleteContact }) => {
  function contactStatusIcon() {
    if (contact.status) {
      return (
        <i
          className="bi bi-toggle2-on"
          style={{ cursor: "pointer", color: "green" }}
          onClick={() => contactStatus(contact)}
        ></i>
      );
    } else {
      return (
        <i
          className="bi bi-toggle2-off"
          style={{ cursor: "pointer", color: "grey" }}
          onClick={() => contactStatus(contact)}
        ></i>
      );
    }
  }

  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contactStatusIcon()}</td>
      <td>
        <i
          className="bi bi-trash3"
          style={{ color: "tomato", cursor: "pointer" }}
          onClick={() => deleteContact(contact)}
        ></i>
      </td>
    </tr>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact),
  contactStatus: PropTypes.func.isRequired,
  contactStatus: PropTypes.func.isRequired,
};

export default ContactComponent;

import React, { useRef } from "react";
import { Contact } from "../../../models/contact.model";

const ContactForm = ({ addContact }) => {
  const nameRef = useRef("");
  const emailRef = useRef("");

  function addNewContact(element) {
    element.preventDefault();
    const newContact = new Contact(
      nameRef.current.value,
      emailRef.current.value,
      false
    );
    addContact(newContact);
  }

  return (
    <div className="mb-3 row">
      <form onSubmit={addNewContact}>
        <label className="col-sm-2 col-form-label">Name</label>
        <input
          type="text"
          ref={nameRef}
          className="form-control"
          id="contactName"
          placeholder="Contact Name"
        ></input>
        <label className="col-sm-2 col-form-label">Email</label>
        <input
          type="email"
          ref={emailRef}
          className="form-control"
          id="contactEmail"
          placeholder="Contact Email"
        ></input>
        <button className="btn btn-success mt-2">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;

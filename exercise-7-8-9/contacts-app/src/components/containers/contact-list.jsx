import React, { useState } from "react";
import { Contact } from "../../models/contact.model";
import ContactComponent from "../pure/contact";
import ContactForm from "../pure/forms/contactForm";

const ContactList = () => {
  const contact1 = new Contact("Juan Perez", "jperez@mail.com", false);
  const contact2 = new Contact("Maria Lopez", "mlopez@mail.com", true);
  const contact3 = new Contact("Jose Flores", "jflores@mail.com", false);

  const [contacts, setContacts] = useState([contact1, contact2, contact3]);

  function changeContactStatus(contact) {
    console.log("Change contact status for:", contact.name);
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts[index].status = !tempContacts[index].status;
    setContacts(tempContacts);
  }

  function deleteContact(contact) {
    console.log("Delete this contact:", contact.name);
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts.splice(index, 1);
    setContacts(tempContacts);
  }

  function addContact(contact) {
    console.log("Add this contact:", contact.name);
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts.push(contact);
    setContacts(tempContacts);
  }

  return (
    <div>
      <div className="col-6 container">
        <div className="card">
          <div className="card-header p-3">
            <h5>Contacts:</h5>
          </div>
          <div
            className="card-body"
            style={{ position: "relative", height: "400px" }}
          >
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Status</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, index) => {
                  return (
                    <ContactComponent
                      key={index}
                      contact={contact}
                      contactStatus={changeContactStatus}
                      deleteContact={deleteContact}
                    ></ContactComponent>
                  );
                })}
              </tbody>
            </table>
            <div style={{ textAlign: "left" }}>
              <ContactForm addContact={addContact}></ContactForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactList;

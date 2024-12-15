import axios from "axios";
import React, { useState, useEffect } from "react";
import ContactCard from "./ContactCard/ContactCard";
function ContactList({
  body,
  contacts,
  setContacts,
  editItem,
  setEditItem,
  modal,
  setModal,
}) {
  useEffect(() => {
    axios
      .get("http://localhost:3000/contact")
      .then((res) => {
        if (res.status === 200) {
          setContacts(res.data);
          return;
        }
        throw new Error("Couldn't connect to");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="contactList-wrapper">
      <div className="contactList-container">
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            body={body}
            contacts={contacts}
            setContacts={setContacts}
            editItem={editItem}
            setEditItem={setEditItem}
            modal={modal}
            setModal={setModal}
          />
        ))}
      </div>
    </div>
  );
}

export default ContactList;

import React, { useRef, useState, useEffect } from "react";
import Header from "./Header/Header";
import ContactList from "./ContactList/ContactList";
import Form from "./FormModal/Form";
function ContactsApp() {
  const [contacts, setContacts] = useState([]);
  const [modal, setModal] = useState(false);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    console.log("edit ", editItem);
  }, [editItem]);

  const bodyRef = useRef(null);

  return (
    <main className="contacts-app" ref={bodyRef}>
      <Header
        contacts={contacts}
        setContacts={setContacts}
        modal={modal}
        setModal={setModal}
        setEditItem={setEditItem}
      />
      <ContactList
        body={bodyRef}
        contacts={contacts}
        setContacts={setContacts}
        editItem={editItem}
        setEditItem={setEditItem}
        modal={modal}
        setModal={setModal}
      />

      <div
        className={modal ? "modal active" : "modal"}
        onClick={(e) => {
          console.log();
          if (e.target.className === "modal active") {
            setModal(false);
          }
        }}
      >
        <Form
          contacts={contacts}
          setContacts={setContacts}
          modal={modal}
          setModal={setModal}
          editItem={editItem}
          setEditItem={setEditItem}
        />
      </div>
    </main>
  );
}

export default ContactsApp;

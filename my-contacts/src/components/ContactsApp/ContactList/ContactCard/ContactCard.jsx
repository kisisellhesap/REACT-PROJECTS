import axios from "axios";
import React, { useState, useEffect } from "react";
function ContactCard({
  contact,
  body,
  contacts,
  setContacts,
  editItem,
  setEditItem,
  modal,
  setModal,
}) {
  const [settingsMode, setSettingsMode] = useState(false);

  const title = ` ${contact.name[0].toUpperCase()} ${contact.surname[0].toUpperCase()}`;
  const bodyClick = () => {
    const handleBodyClick = (e) => {
      if (e.target.id !== "card-settings-open-i") {
        setSettingsMode(false);
      }
    };

    body.current.addEventListener("click", handleBodyClick);

    return () => {
      body.current.removeEventListener("click", handleBodyClick);
    }; // burayı anlamadım.
  };
  useEffect(() => {
    bodyClick();
  }, []);

  return (
    <div className="contact-card">
      <h2 className="card-title">{title}</h2>
      <p className="card-name">
        {contact.name.toUpperCase()} {contact.surname.toUpperCase()}
      </p>
      <p className="card-position">{contact.position}</p>
      <p className="card-company">{contact.company}</p>
      <div className="card-other-info">
        <div className="phone-info-container">
          <i className="bx bxs-phone"></i>
          <span className="other-info">+9{contact.phone}</span>
        </div>
        <div className="email-info-container">
          <i className="bx bxs-envelope"></i>
          <span className="other-info">{contact.email}</span>
        </div>
      </div>
      <i
        className="bx bx-dots-horizontal"
        id="card-settings-open-i"
        onClick={() => {
          setSettingsMode(!settingsMode);
        }}
      ></i>
      <div
        className={
          settingsMode ? "card-settings card-settings-active" : "card-settings"
        }
      >
        <div
          className="edit-i"
          onClick={() => {
            console.log(contact);
            setEditItem(contact);
            setModal(!modal);
          }}
        >
          <i className="bx bxs-edit"></i>
          <span>Edit</span>
        </div>
        <div
          className="delete-i"
          onClick={() => {
            const contactId = contact.id;
            axios
              .delete("http://localhost:3000/contact/" + contactId)
              .then((res) => {
                if (res.statusText == "OK") {
                  const filteredData = contacts.filter(
                    (contact) => contact.id !== contactId
                  );
                  setContacts(filteredData);
                  return;
                }
                throw new Error("Couldn't delete contact");
              })
              .catch((err) => {
                console.error(err);
              });
          }}
        >
          <i className="bx bxs-trash"></i>
          <span>Delete</span>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;

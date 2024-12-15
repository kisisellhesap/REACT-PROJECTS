import React, { useState } from "react";
import Fields from "./Fields";
import axios from "axios";
function Form({
  modal,
  setModal,
  contacts,
  setContacts,
  editItem,
  setEditItem,
}) {
  let newContact;

  return (
    <div className="form-wrapper">
      <h2> {editItem ? "Update Person" : "Person Add"}</h2>

      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();

          const formData = new FormData(e.target);

          newContact = Object.fromEntries(formData.entries());

          newContact.phone = `${newContact.phone.replace(
            /^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/,
            "$1 $2 $3 $4 $5"
          )}`;

          console.log(newContact);

          setModal(false);
          if (!editItem) {
            axios
              .post("http://localhost:3000/contact", newContact)
              .then((res) => {
                if (res.status === 201) {
                  setContacts((prev) => [...prev, res.data]);
                  return;
                }
                throw new Error("Couldn't connect to server");
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            axios
              .put("http://localhost:3000/contact/" + editItem.id, newContact)
              .then((res) => {
                if (res.status === 200) {
                  setContacts(
                    contacts.map((contact) =>
                      contact.id === editItem.id ? res.data : contact
                    )
                  );
                }
              });
          }
        }}
      >
        <Fields label={"Name"} name={"name"} value={editItem?.name} />
        <Fields label={"Surname"} name={"surname"} value={editItem?.surname} />
        <Fields
          label={"Position"}
          name={"position"}
          value={editItem?.position}
        />
        <Fields label={"Company"} name={"company"} value={editItem?.company} />
        <Fields
          label={"Phone"}
          name={"phone"}
          change={(e) => {
            if (!isNaN(e.target.value) && e.target.value.trim() !== "") {
              e.target.value = e.target.value;
            } else {
              e.target.value = "";
            }
          }}
          maxLength={11}
          value={editItem?.phone}
        />
        <Fields
          type={"Email"}
          label={"Email"}
          name={"email"}
          value={editItem?.email}
        />

        <div className="form-settings">
          <button type="Submit" className="save-btn">
            Add
          </button>
          <button
            type="button"
            className="close-btn"
            onClick={(e) => {
              // setModal(false);
              setEditItem(null);
              console.log(editItem);
            }}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;

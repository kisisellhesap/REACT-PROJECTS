import axios from "axios";
import React, { useRef } from "react";
function Header({ contacts, setContacts, modal, setModal, setEditItem }) {
  const input = useRef(null);

  const search = () => {
    const value = input.current.value;
    const params = {
      name_like: value,
    };

    axios
      .get("http://localhost:3000/contact", { params })
      .then((res) => {
        if (res.status === 200) {
          setContacts(res.data);
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="header-wrapper">
      <div className="header-container">
        <h1>My Contacts</h1>
        <div className="header-input-container">
          <i className="bx bx-search-alt-2" onClick={search}></i>
          <input
            type="text"
            ref={input}
            className="search-input"
            placeholder="Search"
            onKeyUp={(e) => e.key === "Enter" && search()}
          />
        </div>
        <div className="header-btn-settings">
          <i className="bx bxs-grid-alt"></i>
          <i className="bx bx-menu-alt-right"></i>
          <button
            className="header-add-contact-btn"
            onClick={() => {
              setEditItem(null);
              setModal(true);
            }}
          >
            <i className="bx bxs-user-plus"></i>
            <span className="header-add-text">Yeni Kişi</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;

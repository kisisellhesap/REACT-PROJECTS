import React from "react";

function Fields({ type, label, name, change, maxLength, value }) {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input
        type="text"
        name={name}
        onChange={change}
        defaultValue={value}
        required
      />
    </div>
  );
}

export default Fields;

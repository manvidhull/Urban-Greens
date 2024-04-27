import React from "react";
import user from "./images/user.png";

const ContactCard = ({ contact, clickHandler }) => {
  const { id, name, email } = contact;

  const handleDelete = () => {
    clickHandler(id);
  };

  return (
    <div
      style={{
        marginBottom: "10px",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "5px 5px 15px #bfbfbf, -5px -5px 15px #ffffff",
        backgroundColor: "#f0f0f0",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        src={user}
        alt="user"
        style={{ width: "40px", borderRadius: "50%", marginRight: "20px" }}
      />
      <div>
        <div>{name}</div>
        <div>{email}</div>
      </div>
      <button style={{ marginLeft: "auto" }} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default ContactCard;

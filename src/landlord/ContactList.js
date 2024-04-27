import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, getContactId }) => {
  const renderContactList = contacts.map((contact) => (
    <ContactCard
      contact={contact}
      clickHandler={getContactId}
      key={contact.id}
    />
  ));

  return <div>{renderContactList}</div>;
};

export default ContactList;

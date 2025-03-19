import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import inContact from "./contact.json";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    const dataContacts = localStorage.getItem("contacts");
    if (dataContacts) {
      return JSON.parse(dataContacts);
    }
    return inContact;
  });
  const [inputValue, setInputValue] = useState("");
  const visibleContact = contacts.filter((cont) =>
    cont.name.toLowerCase().includes(inputValue.toLowerCase().trim())
  );
  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };
  const deleteContact = (contactId) => {
    setContacts((prevContact) => {
      return prevContact.filter((cont) => cont.id !== contactId);
    });
  };
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }),
    [contacts];
  return (
    <>
      <h1 className="title"> Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox onSearch={setInputValue} inputValue={inputValue} />
      <ContactList onDelete={deleteContact} contacts={visibleContact} />
    </>
  );
}

export default App;

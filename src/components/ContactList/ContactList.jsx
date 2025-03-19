import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ contacts, onDelete }) {
  return (
    <>
      {contacts.length !== 0 ? (
        <ul className={css.wrapper}>
          {contacts.map((item) => (
            <li className={css.list} key={item.id}>
              <Contact onDelete={onDelete} contact={item} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts found</p>
      )}{" "}
    </>
  );
}

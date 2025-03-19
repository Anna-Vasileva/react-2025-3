import { ImUser } from "react-icons/im";
import { IoMdCall } from "react-icons/io";
import css from "./Contact.module.css";

export default function Contact({ onDelete, contact: { name, number, id } }) {
  return (
    <div className={css.wrapper}>
      <p>
        <ImUser />
        {name}
      </p>
      <p>
        <IoMdCall />
        {number}
      </p>
      <button onClick={() => onDelete(id)} className={css.btn}>
        Delete
      </button>
    </div>
  );
}

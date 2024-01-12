import { Link } from "react-router-dom";
import { ContactForm } from "../../components/ContactForm";

export function AddNewContact() {
  return (
    <>
    <Link to="/">Listagem de Contatos</Link>
      <ContactForm />
    </>
  )
}
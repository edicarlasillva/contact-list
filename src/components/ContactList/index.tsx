import { useContext, useState } from "react";
import { ContactContext } from "../../contexts/ContactContext";

export function ContactList() {
  const contactContext = useContext(ContactContext);
  const [query, setQuery] = useState('')

  console.log(contactContext)

  return (
    <>
      <h1>Pesquisar</h1>
      <input 
        type="text" 
        placeholder="Pesquisar contato"  
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {contactContext?.searchContact(query).map((contact) => (
          <li key={contact.id}>
            <span>{contact.name}</span>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
            <button onClick={() => contactContext.deleteContact(contact.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </>
  )
}
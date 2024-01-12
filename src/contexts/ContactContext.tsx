import { ReactNode, createContext, useCallback, useState } from "react";

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface ContactContextProps {
  contacts: Contact[];
  addContact: (name: string, email: string, phone: string) => void;
  deleteContact: (id: number) => void;
  searchContact: (query: string) => Contact[];
}

interface ContactProviderProps {
  children: ReactNode
}

export const ContactContext = createContext({} as ContactContextProps)

export function ContactProvider({children}: ContactProviderProps) {
  const [contacts, setContacts] = useState<Contact[]>([])

  // adicionar contato
  const addContact = useCallback((
    name: string, 
    email: string, 
    phone: string
    ) => {
      setContacts((prevState) => [
        ...prevState,
        {
          id: contacts.length + 1,
          name,
          email,
          phone
        }
      ])
  }, [contacts])

  // excluir contato
  const deleteContact = useCallback((id: number) => {
    setContacts((prevState) => prevState.filter((contact) => contact.id !== id))
  }, [])

  // buscar contato
  const searchContact = useCallback((query: string) => {
    // const normalizedQuery = query.toLowerCase()
    return contacts.filter((contact) => contact.name.toLowerCase().includes(query.toLowerCase()));
  }, [contacts])

  const ContactContextValue = {
    contacts,
    addContact,
    deleteContact,
    searchContact
  }

  return (
    <ContactContext.Provider value={ContactContextValue}>
      {children}
    </ContactContext.Provider>
  )
}


import { ChangeEvent, useContext, useState } from "react"
import { ContactContext } from "../../contexts/ContactContext"

export function ContactForm() {
  const contactContext = useContext(ContactContext)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  })


  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleAddContact = () => {
    if(formData.name && formData.email && formData.phone) {
      contactContext?.addContact(formData.name, formData.email, formData.phone)
      setFormData({
        name: '',
        email: '',
        phone: ''
      })
    }
  }

  return (
    <>
      <h1>Adicionar Contato</h1>
    
      <div>
        <input 
          type="text" 
          placeholder="Seu nome"
          value={formData.name}
          onChange={handleInputChange}
          name="name"
        />

        <input 
          type="email" 
          placeholder="Seu email"
          value={formData.email}
          onChange={handleInputChange}
          name="email"
        />

        <input 
          type="text" 
          placeholder="Seu telefone"
          value={formData.phone}
          onChange={handleInputChange}
          name="phone"
        />

        <button onClick={handleAddContact}>Adicionar Contato</button>
      </div>
    </>
  )
}
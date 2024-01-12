import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AddNewContact } from '../pages/AddNewContact'
import { Home } from '../pages/Home'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/adicionar-contato' element={<AddNewContact />} />
      </Routes>
    </BrowserRouter>
  )
}
import { ContactProvider } from "./contexts/ContactContext";
import { Router } from "./routes/Router";

export function App() {
  return (
    <ContactProvider>
      <Router />
    </ContactProvider>
  )
}


import './App.scss'
import { Header } from './layout/header/Header'
import { Main } from './layout/sections/main/Main'

export function App() {
  const data = {
    menu: [
      { id: "main", title: "Home" },
      { id: "episodes", title: "Episodes" },
      { id: "about", title: "About" },
      { id: "contact", title: "Contact" }
    ],

    resources: [
      { id: "spotify", url: "" },
      { id: "packman", url: "" },
      { id: "icloud", url: "" },
      { id: "circle", url: "" },
      { id: "radio", url: "" }
    ],

    contacts: [
      { id: "inst", url: "" },
      { id: "twit", url: "" },
      { id: "faceb", url: "" },
    ]


  }


  return (
    <>
      <Header menu={data.menu} />
      <Main resources={data.resources} />
    </>
  )
}

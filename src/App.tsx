import './App.scss'
import { Header } from './layout/header/Header'
import { Episodes } from './layout/sections/episodes/Episodes'
import { Main } from './layout/sections/main/Main'
import podcast from "./accets/episodes/podcast.jpg"
import midi from "./accets/episodes/midi.jpg"
import mic from "./accets/episodes/mic.jpg"
import { About } from './layout/sections/about/About'
import { Contact } from './layout/sections/contact/Contact'

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
    ],

    episodes: [
      {
        id: "1",
        label: "Gear",
        title: "The best microphone under $200",
        description: "With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.",
        img: podcast
      },
      {
        id: "2",
        label: "Tips & Tricks",
        title: "Mic tricks to take you to the next level",
        description: "Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.",
        img: mic
      },
      {
        id: "3",
        label: "Gear",
        title: "Should you get outboard audio gear?",
        description: "Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.",
        img: midi
      },

    ]

  }


  return (
    <>
      <Header menu={data.menu} />
      <Main resources={data.resources} />
      <Episodes episodes={data.episodes}/>
      <About />
      <Contact />
    </>
  )
}

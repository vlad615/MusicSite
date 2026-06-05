import './App.scss'
import { Header } from './layout/header/Header'
import { Episodes } from './layout/sections/episodes/Episodes'
import { Main } from './layout/sections/main/Main'
import podcast from "./accets/episodes/podcast.jpg"
import midi from "./accets/episodes/midi.jpg"
import mic from "./accets/episodes/mic.jpg"
import { About } from './layout/sections/about/About'
import { Contact } from './layout/sections/contact/Contact'
import { Reviews } from './layout/sections/reviews/Reviews'

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
        id: crypto.randomUUID(),
        label: "Gear",
        title: "The best microphone under $200",
        description: "With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.",
        img: podcast
      },
      {
        id: crypto.randomUUID(),
        label: "Tips & Tricks",
        title: "Mic tricks to take you to the next level",
        description: "Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.",
        img: mic
      },
      {
        id: "5",
        label: "Gear",
        title: "Should you get outboard audio gear?",
        description: "Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.",
        img: midi
      },

    ],

    reviews: [
      {
        id: crypto.randomUUID(),
        grade: 5,
        name: "Betty Lacey",
        text: "I can’t recommend this podcast enough"
      },
      {
        id: crypto.randomUUID(),
        grade: 1,
        name: "Adam Driver",
        text: "Jacob is the best in the business"
      },
      {
        id: crypto.randomUUID(),
        grade: 2,
        name: "Marcus Brown",
        text: "A wealth of audio knowledge"
      }, 
      {
        id: crypto.randomUUID(),
        grade: 3,
        name: "Jessica Knowl",
        text: "Every episode is a gem!"
      }, 
      {
        id: crypto.randomUUID(),
        grade: 4,
        name:  "Scott Adams",
        text: "Whoa whoa, let me take some notes!"
      }, 
      {
        id: crypto.randomUUID(),
        grade: 5,
        name: "Steven Blast" ,
        text: "I’ve upped my game considerably since I started listening"
      },
    ]

  }


  return (
    <>
      <Header menu={data.menu} />
      <Main resources={data.resources} />
      <Episodes episodes={data.episodes} />
      <About />
      <Contact />
      <Reviews reviews={data.reviews}/>
    </>
  )
}

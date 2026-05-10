import './App.scss'
import { Header } from './layout/header/Header'
import type { MenuProps } from './componentes/menu/Menu'

export function App() {
  const menuItems: MenuProps = {menu: [
    {id: "main", title: "Home" }, 
    {id: "episodes", title: "Episodes"}, 
    {id: "about", title: "About"}, 
    {id: "contact", title: "Contact"}]}
  

  return (
    <>
      <Header {...menuItems}/>
    </>
  )
}

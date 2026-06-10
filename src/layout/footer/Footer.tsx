import s from "./Footer.module.scss"
import logo from "../../accets/logo-large.svg"
import  { ListIcons, type ResProps } from "../../componentes/icons/ListIcons"
import { Menu, type MenuProps } from "../../componentes/menu/Menu"
import { AddMenu } from "./components/Menu"

type Props = MenuProps & {
    resources: ResProps["resources"]
    contacts: ResProps["resources"]
}

export const Footer = ({resources, contacts, menu}: Props) => {
    return (
        <footer>
            <div className="container">
                <div className={s.wrapper}>
                    <div className={s.logoWrappers}>
                        <a href="#main" className={s.logo}>
                            <img src={logo} alt="" />
                        </a>
                        <ListIcons resources={contacts}/>
                    </div>
                    <div className={s.navigateWrapper}>
                        <Menu menu={menu} columnMenu/>
                        <AddMenu />
                        <ListIcons resources={resources} />
                    </div>

                </div>
            </div>
        </footer>
    )
}
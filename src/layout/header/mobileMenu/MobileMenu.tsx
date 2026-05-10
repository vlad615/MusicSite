import { useState } from "react";
import { Menu, type MenuProps } from "../../../componentes/menu/Menu";
import s from "./MobileMenu.module.scss";


export const MobileMenu = (menu: MenuProps) => {
    const [isOpen, setIsOpen] = useState(false);

    function changeMenuOpen(){setIsOpen(!isOpen)}

    return(
        <nav>
            <button className={s.burgerBtn} onClick={changeMenuOpen}>
                <span className={isOpen? s.closeBurger : s.openBurger}></span>
            </button>
            {isOpen && <Menu {...menu} mobileMenu={true}/>}
        </nav>
    )
}
import { useEffect, useState } from "react";
import { Icon } from "../../componentes/icons/Icon";
import s from "./Header.module.scss";
import { Menu, type MenuProps } from "../../componentes/menu/Menu";
import { MobileMenu } from "./mobileMenu/MobileMenu";

export const Header = (props: MenuProps) => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(()=>{
        window.addEventListener("resize", () => setWidth(window.innerWidth))
    }, [])

    return(
        <header>
            <div className="container">
                <div className={s.wrapper}>
                    <Icon icon="logo" width={166} height={33} boxview="0,0,166,33"/>

                    {width > 768? <Menu {...props}/> : <MobileMenu {...props}/>}
                </div>
            </div>
        </header>
    )
}
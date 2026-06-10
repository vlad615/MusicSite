import s from "./Menu.module.scss";

type MenuItem = {
    id: string
    title: string
}

export type MenuProps = {
    menu: MenuItem[]
    columnMenu?: boolean | null
    mobileMenu?: boolean | null
    onClick?: ()=>void | null
}

export const Menu = ({menu, columnMenu, mobileMenu, onClick}: MenuProps) => {
    return (
        <nav>
            <ul className={`${mobileMenu? s.mobileMenu : s.desktopMenu} ${columnMenu && s.column}`}>
                {menu.map((item) => {
                    return (
                        <li key={item.id} onClick={onClick}>
                            <a href={`#${item.id}`}  className={s.menuItem}>
                                {item.title}
                            </a>
                        </li>)
                })}
            </ul>
        </nav>

    )
}
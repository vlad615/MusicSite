import s from "./Menu.module.scss";

type MenuItem = {
    id: string
    title: string
}

export type MenuProps = {
    menu: MenuItem[]
    mobileMenu?: boolean
}

export const Menu = ({menu, mobileMenu}: MenuProps) => {
    return (
        <nav>
            <ul className={mobileMenu? s.mobileMenu : s.desktopMenu}>
                {menu.map((item) => {
                    return (
                        <li key={item.id}>
                            <a href={`#${item.id}`}  className={s.menuItem}>
                                {item.title}
                            </a>
                        </li>)
                })}
            </ul>
        </nav>

    )
}
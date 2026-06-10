import s from '../../../componentes/menu/Menu.module.scss'
import f from '../Footer.module.scss'

const Menu = () => {
    return (
        <ul className={`${s.desktopMenu} ${s.column} ${f.leftMg}`}>
            <li ><a href="" className={s.menuItem}>Style Guide</a></li>
            <li><a href="" className={s.menuItem}>Instructions</a></li>
            <li><a href="" className={s.menuItem}>Changelog</a></li>
            <li><a href="" className={s.menuItem}>Credit</a></li>
            <li><a href="" className={s.menuItem}>Powered by Webflow</a></li>
            <li><a href="" className={s.menuItem}>Licenses</a></li>
        </ul>
    )
}

export {Menu as AddMenu}
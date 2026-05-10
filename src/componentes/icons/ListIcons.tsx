import { Icon } from "./Icon"
import s from "./ListIcons.module.scss"

type Resource = {
    id: string
    url: string
}

export type ResProps = {
    resources: Resource[]
}

export const ListIcons = ({resources}: ResProps) => {
    return(
        <ul className={s.resources}>
            {resources.map(res => 
            <li className={s.resource} key={res.id}>
                <a  href={res.url}>
                    <Icon icon={res.id}/>
                </a>
            </li>)}
        </ul>
    )
}
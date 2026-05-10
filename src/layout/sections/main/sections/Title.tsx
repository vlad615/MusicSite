import { ListIcons, type ResProps } from "../../../../componentes/icons/ListIcons";
import s from "./MainSections.module.scss";

export const Title = (props: ResProps) => {
    return (
        <div className={s.textWrapper}>
            <h1>Take your podcast to the <br />
                <span className={s.next}> next</span>
                <span className={s.level}> level</span>
            </h1>
            <div>
                <span className={s.lisnOn}>Listen on</span>
                <ListIcons {...props}/>
            </div>
        </div>
    )
}
import { MainImage } from "./sections/MainImage"
import { Title } from "./sections/Title"
import s from "./Main.module.scss"
import type { ResProps } from "../../../componentes/icons/ListIcons"



export const Main = (props: ResProps) => {
    return(
        <section id="main">
            <div className="container">
                <div className={s.mainWrapper}>
                    <MainImage />
                    <Title {...props}/>
                </div>
            </div>
        </section>
    )
}
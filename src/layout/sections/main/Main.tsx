import { MainImage } from "./sections/MainImage"
import { Title } from "./sections/Title"
import s from "./Main.module.scss"



export const Main = () => {
    return(
        <section id="main">
            <div className="container">
                <div className={s.mainWrapper}>
                    <MainImage />
                    <Title />
                </div>
            </div>
        </section>
    )
}
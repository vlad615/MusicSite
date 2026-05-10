import s from "./Episodes.module.scss"
import btn from "../../../componentes/buttons/Button.module.scss"

export const Episodes = () => {
    return(
        <section id="episodes">
            <div className="container">
                <div className={s.wrapper}>
                    <div className={s.titleWrapper}>
                        <h2 className={s.title}>Lates episodes</h2>
                        <a className={btn.button} href="">View all episodes</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
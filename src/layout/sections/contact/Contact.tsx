import c from "../../../componentes/Components.module.scss"
import s from "./Contact.module.scss"

export const Contact = () => {
    return (
        <section id="#contact">
            <div className="container">
                <div className={s.wrapper}>
                    <div className={s.titleWrapper}>
                        <span className={c.small}>Email Newsletter</span>
                        <h2 className={s.title}>Subscribe for updates</h2>
                    </div>
                    <form action="post">
                        <input type="text" name="sub-name" id="sub-name" placeholder="Name" />
                        <input type="email" name="sub-email" id="sub-email" placeholder="Email" />
                        <button className={c.button} type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
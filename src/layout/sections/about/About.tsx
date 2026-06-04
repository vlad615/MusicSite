import s from "./About.module.scss"
import img from "../../../accets/make-music.jpg"
import btn from "../../../accets/Frame.png"


export const About = () => {
    return (
        <section id="#about">
            <div className="container">
                <div className={s.wrapper}>
                    <div className={s.textWrapper}>
                        <a className={s.btn} href="">
                            <img src={btn} alt="frame" />
                        </a>
                        <small className={s.small}>Meet your host</small>
                        <h2 className={s.title}>Jacob Paulaner</h2>
                    <p className={s.description}>{`Jacob has a background in audio engineering, and has been podcasting since the early days.

He’s here to help you level up your game by sharing everything he’s learned along the way.`}
                        </p>
                    </div>
                    <div className={s.imgWrapper}>
                        <img className={s.img} src={img} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
import s from "./Episode.module.scss"
import btn from "./../../buttons/Button.module.scss"

export type EpisodeProps = {
    id: string
    label: string
    title: string
    description: string
    img: string
}

type Props = EpisodeProps & {
    count: number
}

export const Episode: React.FC<Props> = ({id, label, title, description, img, count}) => {
    return(
        <article className={s.wrapper} id={id}>
            <div className="s.imgWrapper">
            <img className={s.img} src={img} alt={title} />
            </div>
            <div className={s.textWrapper}>
                <span className={s.label}>{label}</span>
                <span className={s.count}>Episode {count}</span>
                <h3 className={s.title}>{title}</h3>
                <p className={s.text}>{description}</p>
                <a href="" className={btn.button}>View Episode Details</a>
            </div>
        </article>
    )
}
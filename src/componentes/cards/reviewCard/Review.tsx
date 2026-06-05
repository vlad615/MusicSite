import star from "../../../accets/star.png"
import s from "./Review.module.scss"

export type ReviewProps = {
    id: string
    name: string
    text: string
    grade: number
}

export const Review = ({id, name, text, grade}: ReviewProps) => {


    function stars(count: number){ 
        const elements = []
        for (count; count > 0; count--) {
            elements.push(<li key={count}><img src={star} alt="star " /></li>);
        }

        return elements
    }

    return(
        <div className={s.wrapper} id={id}>
            <ul className={s.stars}>{stars(grade)}</ul>
            <p className={s.review}>{text}</p>
            <p className={s.name}>{name}</p>
        </div>
    )
}
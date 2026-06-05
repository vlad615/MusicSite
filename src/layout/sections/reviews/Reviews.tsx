import { Review, type ReviewProps } from "../../../componentes/cards/reviewCard/Review"
import s from "./Reviews.module.scss"

type ReviewsProps = {
    reviews: ReviewProps[]
}

export const Reviews = ({reviews}: ReviewsProps) => {
    return(
        <section id="review">
            <div className="container">
                <div className={s.wrapper}>
                    {reviews.map(r => <Review {...r}/>)}
                </div>
            </div>
        </section>
    )
}
import image from "../../../../accets/IMAGE.png";
import s from "./MainSections.module.scss"

export const MainImage = () => {
    return(
        <div className={s.imgWrapper}>
            <img className={s.img} src={image} alt="producer" />
        </div>
    )
}
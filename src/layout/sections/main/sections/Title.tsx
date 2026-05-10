import s from "./MainSections.module.scss";

export const Title = () => {
    return(
        <div className={s.textWrapper}>
            <h1>Take your podcast to the <br />
                <span className={s.next}> next</span>
                <span className={s.level}> level</span>
            </h1>

        </div>
    )
}
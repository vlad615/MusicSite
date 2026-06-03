import s from "./Episodes.module.scss"
import btn from "../../../componentes/buttons/Button.module.scss"
import { Episode, type EpisodeProps } from "../../../componentes/cards/episodeCard/Episode"

type EpisodesProps = {
    episodes: EpisodeProps[]
}

export const Episodes = ({ episodes }: EpisodesProps) => {

    return (
        <section id="episodes">
            <div className="container">
                <div className={s.wrapper}>
                    <div className={s.titleWrapper}>
                        <h2 className={s.title}>Lates episodes</h2>
                        <a className={btn.button} href="">View all episodes</a>
                    </div>

                    {episodes.map((e, ind)=> <Episode {...e} count={ind+1}/>)}
                </div>
            </div>
        </section>
    )
}
import SvgSprite from "../../accets/sprite-svg.svg"

type Props = {
    icon: string
    width?: number
    height?: number
    boxview?: string
    fill?: string
}

export const Icon = (props: Props) =>{
    return(
        <svg width={props.width || 32} height={props.height || 32} viewBox={props.boxview || "0, 0, 32, 32"} fill={props.fill || ""}>
            <use xlinkHref={`${SvgSprite}#${props.icon}`}/>
        </svg>
    )
}
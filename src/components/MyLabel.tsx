
import "./mylabel.css"

export interface Iprops {
    /**
   * Este es el mensaje a mostrar 
   */
    label: string;
    /**
   * Este es el tamaño a mostrar
   */
    size: "h1"| "h2"| "h3"| "h4"| "normal" ;
    color?: string,
    allCaps?: boolean
}

export const MyLabel = ({
    label="No Label",
    size="normal",
    color="red",
    allCaps = false
}: Iprops) => {
    return(
        <span className={`label ${size} ` } style={{color}}>
            {allCaps?label.toUpperCase(): label.toLowerCase()}
        </span>
    )
}
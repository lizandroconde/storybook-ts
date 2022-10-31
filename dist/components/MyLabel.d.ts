/// <reference types="react" />
import "./mylabel.css";
export interface Iprops {
    /**
   * Este es el mensaje a mostrar
   */
    label: string;
    /**
   * Este es el tamaño a mostrar
   */
    size: "h1" | "h2" | "h3" | "h4" | "normal";
    color?: string;
    allCaps?: boolean;
}
export declare const MyLabel: ({ label, size, color, allCaps }: Iprops) => JSX.Element;

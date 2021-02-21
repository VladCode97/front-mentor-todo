import {DefaultTheme} from "styled-components";


declare module "styled-components" {
    export interface DefaultTheme {
        body: string;
        toggleButton: string;
        imageBackground: boolean;
        text: string;
        backgroundLayout: string;
    }
}

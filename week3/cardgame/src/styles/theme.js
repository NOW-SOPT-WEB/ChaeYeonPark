import { css } from "@emotion/react";

const colors = {
        white: "#F8F7F2",
        green: "#B1DDC0",
        brown: "#3F2216",
        coffee: "#BB9162",
        navy: "#293045",
        pink: "#FF9B96"
    };

const fonts = {
        title: css`
            font-family: 'TTLaundryGothicB';
            font-size: 4rem;
            font-weight: 700;
            font-style: normal;
         -`
    };

export const theme = {
    colors,
    fonts
};
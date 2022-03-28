const theme = {
    palette:{
        BACKGROUND_GREEN: "#1C843B",
        WHITE: "#FFF",
        HEADER_TEXT_DARK_GREEN: "#35533E",
        DESCRIPTION_TEXT_GREY: "#909090",
        PLACEHOLDER_GREY: "#6faf89",
        TEXT_INPUT_BACKGROUND: '#ebeefe',
    },
    textInput:{
        flat:"flat",
        outlined:"outlined"
    },
}

export const textInputGreyBorder = {
    colors: {
        primary: theme.palette.PLACEHOLDER_GREY,
        text: theme.palette.BACKGROUND_GREEN,
        background: theme.palette.TEXT_INPUT_BACKGROUND,
        placeholder: theme.palette.PLACEHOLDER_GREY,
    }
}

export default theme
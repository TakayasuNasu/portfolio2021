// colors were named using this tool:
// https://www.color-blindness.com/color-name-hue/
// naming colors this way is more meaningful/descriptive than just 'lightBlue', etc.

const sharedStyles = {
  sharedColor: {
    light: '#ffffff',
    dark: '#000000',
    black: '#16181c',
    white: '#fafafa',
    smoke: '#898989',
    grey: '#969696',
    green: '#4CAF50',
    blue: '#2879ff',
    transparent: 'transparent',
  },
}

export const lightTheme = {
  color: {
    text: sharedStyles.sharedColor.black,
    subText: sharedStyles.sharedColor.smoke,
    bg: sharedStyles.sharedColor.white,
    sbg: sharedStyles.sharedColor.light,
    border: sharedStyles.sharedColor.black,
    frame: sharedStyles.sharedColor.transparent,
    ...sharedStyles.sharedColor,
  },
}

export const darkTheme = {
  color: {
    text: sharedStyles.sharedColor.light,
    subText: sharedStyles.sharedColor.smoke,
    bg: sharedStyles.sharedColor.dark,
    sbg: sharedStyles.sharedColor.black,
    border: sharedStyles.sharedColor.white,
    frame: sharedStyles.sharedColor.light,
    ...sharedStyles.sharedColor,
  },
}

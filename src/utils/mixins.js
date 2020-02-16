const Mixins = {
  colorProps: {
    color: String,
    colorTheme: String,
    textColor: String,
    bgColor: String,
    borderColor: String,
    rippleColor: String,
    themeDark: Boolean
  },
  colorClasses (props) {
    const {
      color,
      colorTheme,
      textColor,
      bgColor,
      borderColor,
      rippleColor,
      themeDark
    } = props

    return {
      'theme-dark': themeDark,
      [`color-${color}`]: color,
      [`color-theme-${colorTheme}`]: colorTheme,
      [`text-color-${textColor}`]: textColor,
      [`bg-color-${bgColor}`]: bgColor,
      [`border-color-${borderColor}`]: borderColor,
      [`ripple-color-${rippleColor}`]: rippleColor
    }
  }
}

export default Mixins

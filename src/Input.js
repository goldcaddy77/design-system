import styled from 'styled-components'
import { space, theme, propTypes } from 'styled-system'
import PropTypes from 'prop-types'

const borders = ({ color, theme }) => {
  const borderColor = color ? theme.colors[color] : theme.colors.borderGray
  const focusColor = color ? borderColor : theme.colors.blue
  return {
    'border-color': borderColor,
    'box-shadow': `0 0 0 0 ${borderColor}`,
    ':focus': {
      outline: 0,
      'border-color': focusColor,
      'box-shadow': `0 0 0 1px ${focusColor}`
    }
  }
}

const Input = styled.input`
  appearance: none;
  display: block;
  width: 100%;
  font-family: inherit;
  font-size: ${theme('fontSizes.2')}px;
  background-color: transparent;
  border-radius: ${theme('radius')};
  border-width: 1px;
  border-style: solid;
  border-color: ${theme('colors.borderGray')};

  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 12px;
  padding-right: 12px;

  ::placeholder {
    color: ${theme('colors.borderGray')};
  }

  ::-ms-clear {
    display: none;
  }

  ${borders} ${space};
`

Input.displayName = 'Input'
Input.propTypes = {
  color: PropTypes.string,
  ...propTypes.borders,
  ...propTypes.space
}

export default Input

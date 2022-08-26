import React from 'react'
import PropTypes from 'prop-types'
import Flags from 'country-flag-icons/react/3x2'
import { styled, TextField, InputAdornment } from '@mui/material'
import { some, find, reduce, filter, head, tail, startsWith, isString } from 'lodash'
import { allCountries } from '../country_data'
import VirtualCountryMenu from './VirtualCountryMenu'
import {guessSelectedCountry, stripCountryDialCode, filterRegions} from '../support/countries'

const TextFieldStyled = styled(TextField)(({ theme }) => ({
  '& input': {
    borderLeft: '1px solid #c4c4c4',
    paddingLeft: 8,
  },
}))

class MuiPhoneNumber extends React.Component {
  flags = {}

  constructor(props) {
    super(props)

    let filteredCountries = allCountries

    if (props.regions) filteredCountries = filterRegions(props.regions, filteredCountries)

    const onlyCountries = this.getOnlyCountries(props.onlyCountries, filteredCountries)

    const preferredCountries = filter(filteredCountries, (country) =>
      some(props.preferredCountries, (preferredCountry) => preferredCountry === country.iso2),
    )

    let inputNumber = props.value || ''
    const unformattedNumber = inputNumber.replace(/\D/g, '')

    let countryGuess = null
    if (inputNumber.length > 1) {
      // Country detect by value field
      countryGuess = guessSelectedCountry(unformattedNumber.substring(0, 6), onlyCountries, props.defaultCountry)
    } else if (props.defaultCountry) {
      // Default country
      countryGuess = find(onlyCountries, { iso2: props.defaultCountry })
    } else {
      // Empty params
      countryGuess = null
    }

    const selectedCountry = countryGuess

    if (selectedCountry) {
      inputNumber = stripCountryDialCode(selectedCountry.dialCode, inputNumber)

      if (inputNumber.length > 0) {
        inputNumber = this.formatNumber(
          inputNumber,
          this.getInputMask(selectedCountry) || (selectedCountry.name ? selectedCountry.format : undefined),
        )
      }
    }

    this.state = {
      formattedNumberWithoutCountry: inputNumber,
      placeholder: props.placeholder,
      onlyCountries,
      preferredCountries,
      defaultCountry: props.defaultCountry,
      selectedCountry,
    }
  }

  componentDidUpdate({ value: prevValue }) {
    const { defaultCountry: prevDefaultCountry, formattedNumberWithoutCountry } = this.state
    const { defaultCountry, value } = this.props

    if (defaultCountry && defaultCountry !== prevDefaultCountry) {
      this.updateDefaultCountry(defaultCountry)
    }

    if (typeof value === 'string' && value !== prevValue && value !== formattedNumberWithoutCountry) {
      this.updateFormattedNumber(value)
    }
  }

  getOnlyCountries = (onlyCountriesArray, filteredCountries) => {
    if (onlyCountriesArray.length === 0) return filteredCountries

    return filteredCountries.filter((country) => onlyCountriesArray.some((element) => element === country.iso2))
  }

  // Hooks for updated props
  updateDefaultCountry = (country) => {
    const { onlyCountries } = this.state

    const newSelectedCountry = find(onlyCountries, { iso2: country })

    this.setState({
      defaultCountry: country,
      selectedCountry: newSelectedCountry,
      formattedNumberWithoutCountry: '',
    })
  }

  // View methods
  formatNumber = (text, patternArg) => {
    const { enableLongNumbers, autoFormat } = this.props

    let pattern
    if (patternArg) {
      pattern = patternArg.split(' ')
      pattern.shift()
      pattern = pattern.join(' ')
    } else {
      pattern = patternArg
    }

    if (!text || text.length === 0) {
      return ''
    }

    // for all strings with length less than 3, just return it (1, 2 etc.)
    // also return the same text if the selected country has no fixed format
    if ((text && text.length < 2) || !pattern || !autoFormat) {
      return text
    }

    const formattedObject = reduce(
      pattern,
      (acc, character) => {
        if (acc.remainingText.length === 0) {
          return acc
        }

        if (character !== '.') {
          return {
            formattedText: acc.formattedText + character,
            remainingText: acc.remainingText,
          }
        }

        return {
          formattedText: acc.formattedText + head(acc.remainingText),
          remainingText: tail(acc.remainingText),
        }
      },
      {
        formattedText: '',
        remainingText: text.split(''),
      },
    )

    let formattedNumber
    if (enableLongNumbers) {
      formattedNumber = formattedObject.formattedText + formattedObject.remainingText.join('')
    } else {
      formattedNumber = formattedObject.formattedText
    }

    // Always close brackets
    if (formattedNumber.includes('(') && !formattedNumber.includes(')')) formattedNumber += ')'
    return formattedNumber
  }

  // return country data from state
  getCountryData = () => {
    const { selectedCountry } = this.state

    if (!selectedCountry) return {}

    return {
      name: selectedCountry.name || '',
      dialCode: selectedCountry.dialCode || '',
      countryCode: selectedCountry.iso2 || '',
    }
  }

  handleInput = (e) => {
    let { selectedCountry: newSelectedCountry } = this.state
    const { selectedCountry, formattedNumberWithoutCountry: oldFormattedText } = this.state
    const { onChange } = this.props

    // if the input is the same as before, must be some special key like enter etc.
    if (e.target.value === oldFormattedText) {
      return
    }

    let formattedNumber = ''

    // Does not exceed 15 digit phone number limit
    if (e.target.value.replace(/\D/g, '').length > 15) {
      return
    }

    if (e.target.value.length > 0) {
      // before entering the number in new format, lets check if the dial code now matches some other country
      const inputNumber = e.target.value.replace(/\D/g, '')

      // let us remove all non numerals from the input
      formattedNumber = this.formatNumber(inputNumber, this.getInputMask(newSelectedCountry))
    }

    this.setState(
      {
        formattedNumberWithoutCountry: formattedNumber,
        selectedCountry: newSelectedCountry.dialCode ? newSelectedCountry : selectedCountry,
      },
      () => {
        if (onChange) {
          onChange(this.numberWithCountry(newSelectedCountry, formattedNumber), this.getCountryData())
        }
      },
    )
  }

  numberWithCountry(country, numberWithoutCountry) {
    if (country) {
      return `+${country.dialCode}${numberWithoutCountry}`
    }

    return numberWithoutCountry
  }

  getInputMask = (country) => {
    const mask = this.props.masks[country.iso2]

    if (mask) return mask

    return country.format
  }

  handleRefInput = (ref) => {
    const { inputRef, InputProps } = this.props
    this.inputRef = ref

    let refProp

    if (inputRef) {
      refProp = inputRef
    } else if (InputProps && InputProps.ref) {
      refProp = InputProps.ref
    }

    if (refProp) {
      if (typeof refProp === 'function') {
        refProp(ref)
      } else {
        refProp.current = ref
      }
    }
  }

  handleInputClick = (e) => {
    const { onClick } = this.props

    if (onClick) {
      onClick(e, this.getCountryData())
    }
  }

  handleFlagItemClick = (country) => {
    const { formattedNumberWithoutCountry, onlyCountries } = this.state
    const { onChange } = this.props

    const nextSelectedCountry = isString(country)
      ? find(onlyCountries, (countryItem) => countryItem.iso2 === country)
      : find(onlyCountries, country)

    const unformattedNumber = formattedNumberWithoutCountry
      .replace(' ', '')
      .replace('(', '')
      .replace(')', '')
      .replace('-', '')

    const newFormattedNumber = this.formatNumber(
      unformattedNumber.replace(/\D/g, ''),
      this.getInputMask(nextSelectedCountry),
    )

    this.setState(
      {
        selectedCountry: nextSelectedCountry,
        formattedNumberWithoutCountry: newFormattedNumber,
      },
      () => {
        if (onChange) {
          onChange(this.numberWithCountry(nextSelectedCountry, newFormattedNumber), this.getCountryData())
        }
      },
    )
  }

  handleInputFocus = (e) => {
    const { onFocus } = this.props

    this.setState({ placeholder: '' })

    if (onFocus) {
      onFocus(e, this.getCountryData())
    }
  }

  handleInputBlur = (e) => {
    const { placeholder, onBlur } = this.props

    if (!e.target.value) {
      this.setState({ placeholder })
    }

    if (onBlur) {
      onBlur(e, this.getCountryData())
    }
  }

  checkIfValid = () => {
    const { selectedCountry, formattedNumberWithoutCountry } = this.state
    const { isValid } = this.props

    return isValid(this.numberWithCountry(selectedCountry, formattedNumberWithoutCountry))
  }

  updateFormattedNumber = (number) => {
    const { onlyCountries, defaultCountry } = this.state

    const unformattedNumber = number.replace(/\D/g, '')
    const country =
      guessSelectedCountry(unformattedNumber.substring(0, 6), onlyCountries, defaultCountry) || defaultCountry
    const strippedNumber = stripCountryDialCode(country.dialCode, unformattedNumber)

    const formattedNumber = this.formatNumber(strippedNumber, country ? this.getInputMask(country) : undefined)

    this.setState({ selectedCountry: country, formattedNumberWithoutCountry: formattedNumber })
  }

  getDropdownProps = () => {
    const { selectedCountry, preferredCountries, onlyCountries } = this.state

    const { localization } = this.props

    onlyCountries.sort((a, b) => {
      const localizedA = localization[a.name] || a.name
      const localizedB = localization[b.name] || b.name
      return localizedA.localeCompare(localizedB)
    })

    const FlagComponent = Flags[selectedCountry.iso2.toUpperCase()]

    return {
      startAdornment: (
        <InputAdornment sx={{ position: 'relative' }} position="start">
          <VirtualCountryMenu
            FlagComponent={FlagComponent}
            selectedCountry={selectedCountry}
            countries={preferredCountries.concat(onlyCountries)}
            localization={localization}
            onCountrySelected={(country) => this.handleFlagItemClick(country)}
          />
        </InputAdornment>
      ),
    }
  }

  render() {
    const { formattedNumberWithoutCountry, selectedCountry, placeholder: statePlaceholder } = this.state

    const {
      defaultCountry,
      onlyCountries,
      preferredCountries,
      dropdownClass,
      autoFormat,
      isValid,
      disableDropdown,
      enableLongNumbers,
      countryCodeEditable,
      onEnterKeyPress,
      classes,
      keys,
      localization,
      placeholder,
      regions,
      value,
      inputClass,
      onChange,
      error,
      InputProps,
      ...restProps
    } = this.props

    const dropdownProps = this.getDropdownProps()

    return (
      <>
        <input
          type="hidden"
          ref={this.handleRefInput}
          value={this.numberWithCountry(selectedCountry, formattedNumberWithoutCountry)}
        />
        <TextFieldStyled
          placeholder={statePlaceholder}
          value={formattedNumberWithoutCountry}
          className={inputClass}
          error={error || !this.checkIfValid()}
          onChange={this.handleInput}
          onClick={this.handleInputClick}
          onFocus={this.handleInputFocus}
          onBlur={this.handleInputBlur}
          //onKeyDown={this.handleInputKeyDown}
          type="tel"
          InputProps={{
            ...dropdownProps,
            ...InputProps,
          }}
          {...restProps}
        />
      </>
    )
  }
}

MuiPhoneNumber.propTypes = {
  classes: PropTypes.object,

  onlyCountries: PropTypes.arrayOf(PropTypes.string),
  preferredCountries: PropTypes.arrayOf(PropTypes.string),
  defaultCountry: PropTypes.string,
  masks: PropTypes.object,

  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  variant: PropTypes.string,

  inputClass: PropTypes.string,
  dropdownClass: PropTypes.string,
  InputProps: PropTypes.object,
  inputProps: PropTypes.object,
  inputRef: PropTypes.func,

  autoFormat: PropTypes.bool,
  disableDropdown: PropTypes.bool,
  enableLongNumbers: PropTypes.bool,
  countryCodeEditable: PropTypes.bool,

  regions: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

  localization: PropTypes.object,

  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,

  isValid: PropTypes.func,
  onEnterKeyPress: PropTypes.func,
  keys: PropTypes.object,
}

MuiPhoneNumber.defaultProps = {
  onlyCountries: [],
  preferredCountries: [],
  defaultCountry: '',
  masks: {},

  placeholder: '+1 (702) 123-4567',
  disabled: false,
  error: false,
  variant: 'standard',

  inputClass: '',
  dropdownClass: '',

  autoFormat: true,
  isValid: (inputNumber) =>
    some(
      allCountries,
      (country) =>
        startsWith(inputNumber.replace(/\D/g, ''), country.dialCode) || startsWith(country.dialCode, inputNumber),
    ),
  disableDropdown: false,
  enableLongNumbers: false,
  countryCodeEditable: true,

  regions: '',

  localization: {},

  onEnterKeyPress: () => {},
  onChange: () => {},

  keys: {
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    LEFT: 37,
    ENTER: 13,
    ESC: 27,
    PLUS: 43,
    A: 65,
    Z: 90,
    SPACE: 32,
  },
}

MuiPhoneNumber.displayName = 'MuiPhoneNumber'

export default MuiPhoneNumber

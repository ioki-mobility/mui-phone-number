//MuiPhoneNumber.propTypes = {
//  classes: PropTypes.object,
//
//  onlyCountries: PropTypes.arrayOf(PropTypes.string),
//  preferredCountries: PropTypes.arrayOf(PropTypes.string),
//  defaultCountry: PropTypes.string,
//  masks: PropTypes.object,
//
//  value: PropTypes.string,
//  placeholder: PropTypes.string,
//  disabled: PropTypes.bool,
//  error: PropTypes.bool,
//  variant: PropTypes.string,
//
//  inputClass: PropTypes.string,
//  InputProps: PropTypes.object,
//  inputProps: PropTypes.object,
//  inputRef: PropTypes.func,
//
//  enableLongNumbers: PropTypes.bool,
//  countryCodeEditable: PropTypes.bool,
//
//  regions: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
//
//  localization: PropTypes.object,
//
//  onChange: PropTypes.func,
//  onFocus: PropTypes.func,
//  onBlur: PropTypes.func,
//  onClick: PropTypes.func,
//  onKeyDown: PropTypes.func,
//
//  onEnterKeyPress: PropTypes.func,
//  keys: PropTypes.object,
//}
import * as React from "react";
import MuiPhoneNumberProps from "./components/MuiPhoneNumber";

declare const MuiPhoneNumber: React.FC<MuiPhoneNumberProps>;

export default MuiPhoneNumber;

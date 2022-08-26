import React, { useState, useEffect } from "react";
import Flags from "country-flag-icons/react/3x2";
import { styled, TextField, InputAdornment } from "@mui/material";
import { some, find, filter, startsWith, isString } from "lodash";
import { allCountries } from "../countryData";
import VirtualCountryMenu from "./VirtualCountryMenu";
import {
  guessSelectedCountry,
  stripCountryDialCode,
  filterRegions,
  getOnlyCountries,
} from "../support/countries";
import { formatNumber, numberWithCountry } from "../support/phoneNumber";
import { TextFieldProps } from "@mui/material";

export type MuiPhoneNumberProps = TextFieldProps & {
  autoFormat?: boolean;
  classes?: any;
  countryCodeEditable?: boolean;
  defaultCountry?: string;
  disableAreaCodes?: boolean;
  disableCountryCode?: boolean;
  disableDropdown?: boolean;
  dropdownClass?: string;
  enableLongNumbers?: boolean;
  excludeCountries?: string[];
  inputClass?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string
  ) => void;
  onlyCountries?: string[];
  preferredCountries?: string[];
  regions?: [string] | string;
  masks?: { [countryIso2: string]: string };
  isValid: (phoneNumber: string) => boolean;
};

const TextFieldStyled = styled(TextField)(() => ({
  "& input": {
    borderLeft: "1px solid #c4c4c4",
    paddingLeft: 8,
  },
}));

const MuiPhoneNumber = ({
  value,
  onlyCountries: onlyCountriesFilter = [],
  preferredCountries: preferredCountriesFilter = [],
  defaultCountry = "",
  masks = {},

  placeholder: defaultPlaceholder = "+1 (702) 123-4567",
  disabled = false,
  error = false,
  variant = "standard",

  inputClass = "",
  dropdownClass = "",

  autoFormat = true,
  isValid = (phoneNumber: string) =>
    allCountries.some(
      (country) =>
        startsWith(phoneNumber.replace(/\D/g, ""), country.dialCode) ||
        startsWith(country.dialCode, phoneNumber)
    ),
  disableDropdown = false,
  enableLongNumbers = false,
  countryCodeEditable = true,

  regions = "",

  localization = {},

  onEnterKeyPress = () => {},
  onChange = () => {},

  keys = {
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
  InputProps,
  onFocus,
  onClick,
  onBlur,
  ...restProps
}: MuiPhoneNumberProps) => {
  const [formattedNumberWithoutCountry, setFormattedNumberWithoutCountry] =
    useState("");
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [onlyCountries, setOnlyCountries] = useState([]);
  const [preferredCountries, setPreferredCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputRef, setInputRef] = useState(null);
  const [placeholder, setPlaceholder] = useState(defaultPlaceholder);

  const getInputMask = (country) => {
    const mask = masks[country.iso2];

    if (mask) return mask;

    return country.format;
  };

  const updateFormattedNumber = (phoneNumber) => {
    if (!phoneNumber) return;

    const unformattedNumber = phoneNumber.replace(/\D/g, "");
    const country =
      guessSelectedCountry(
        unformattedNumber.substring(0, 6),
        onlyCountries,
        defaultCountry
      ) || defaultCountry;
    const strippedNumber = stripCountryDialCode(
      country.dialCode,
      unformattedNumber
    );

    const formattedNumber = formatNumber(
      strippedNumber,
      country ? getInputMask(country) : undefined,
      enableLongNumbers,
      autoFormat
    );

    setSelectedCountry(country);
    setFormattedNumberWithoutCountry(formattedNumber);
  };

  const getCountryData = () => {
    if (!selectedCountry) return {};

    return {
      name: selectedCountry.name || "",
      dialCode: selectedCountry.dialCode || "",
      countryCode: selectedCountry.iso2 || "",
    };
  };

  const handleInput = (e) => {
    let newSelectedCountry = selectedCountry;
    const oldFormattedText = formattedNumberWithoutCountry;

    // if the input is the same as before, must be some special key like enter etc.
    if (e.target.value === oldFormattedText) {
      return;
    }

    let formattedNumber = "";

    // Does not exceed 15 digit phone number limit
    if (e.target.value.replace(/\D/g, "").length > 15) {
      return;
    }

    if (e.target.value.length > 0) {
      // before entering the number in new format, lets check if the dial code now matches some other country
      const inputNumber = e.target.value.replace(/\D/g, "");

      // let us remove all non numerals from the input
      formattedNumber = formatNumber(
        inputNumber,
        getInputMask(newSelectedCountry),
        enableLongNumbers,
        autoFormat
      );
    }

    setFormattedNumberWithoutCountry(formattedNumber);
    setSelectedCountry(
      newSelectedCountry.dialCode ? newSelectedCountry : selectedCountry
    );
    if (onChange) {
      onChange(
        numberWithCountry(newSelectedCountry, formattedNumber),
        getCountryData()
      );
    }
  };

  const handleRefInput = (ref) => {
    setInputRef(ref);

    let refProp;

    if (inputRef) {
      refProp = inputRef;
    } else if (InputProps && InputProps.ref) {
      refProp = InputProps.ref;
    }

    if (refProp) {
      if (typeof refProp === "function") {
        refProp(ref);
      } else {
        refProp.current = ref;
      }
    }
  };

  useEffect(() => {
    let filteredCountries = allCountries;

    if (regions) filteredCountries = filterRegions(regions, filteredCountries);

    const onlyCountries = getOnlyCountries(
      onlyCountriesFilter,
      filteredCountries
    );

    setOnlyCountries(onlyCountries);

    const preferredCountries = filter(filteredCountries, (country) =>
      preferredCountriesFilter.some(
        (preferredCountry) => preferredCountry === country.iso2
      )
    );

    let inputNumber = value || "";
    const unformattedNumber = inputNumber.replace(/\D/g, "");

    let countryGuess = null;
    if (inputNumber.length > 1) {
      // Country detect by value field
      countryGuess = guessSelectedCountry(
        unformattedNumber.substring(0, 6),
        onlyCountries,
        defaultCountry
      );
    } else if (defaultCountry) {
      // Default country
      countryGuess = find(onlyCountries, { iso2: defaultCountry });
    } else {
      // Empty params
      countryGuess = null;
    }

    const selectedCountry = countryGuess;

    if (selectedCountry) {
      inputNumber = stripCountryDialCode(selectedCountry.dialCode, inputNumber);

      if (inputNumber.length > 0) {
        inputNumber = formatNumber(
          inputNumber,
          getInputMask(selectedCountry) ||
            (selectedCountry.name ? selectedCountry.format : undefined),
          enableLongNumbers,
          autoFormat
        );
      }
    }

    setFormattedNumberWithoutCountry(inputNumber);
    setSelectedCountry(selectedCountry);
    setLoading(false);
  }, []);

  useEffect(() => {
    updateFormattedNumber(value);
  }, [updateFormattedNumber, value, selectedCountry]);

  const handleInputClick = (e) => {
    if (onClick) {
      onClick(e, getCountryData());
    }
  };

  const handleFlagItemClick = (country) => {
    const nextSelectedCountry = isString(country)
      ? find(onlyCountries, (countryItem) => countryItem.iso2 === country)
      : find(onlyCountries, country);

    const unformattedNumber = formattedNumberWithoutCountry
      .replace(" ", "")
      .replace("(", "")
      .replace(")", "")
      .replace("-", "");

    const newFormattedNumber = formatNumber(
      unformattedNumber.replace(/\D/g, ""),
      getInputMask(nextSelectedCountry),
      enableLongNumbers,
      autoFormat
    );

    setSelectedCountry(nextSelectedCountry);
    setFormattedNumberWithoutCountry(newFormattedNumber);
    if (onChange) {
      onChange(
        numberWithCountry(nextSelectedCountry, newFormattedNumber),
        getCountryData()
      );
    }
  };

  const handleInputFocus = (e) => {
    setPlaceholder("");

    if (onFocus) {
      onFocus(e, getCountryData());
    }
  };

  const handleInputBlur = (e) => {
    if (!e.target.value) {
      setPlaceholder(defaultPlaceholder);
    }

    if (onBlur) {
      onBlur(e, getCountryData());
    }
  };

  const checkIfValid = () =>
    isValid(numberWithCountry(selectedCountry, formattedNumberWithoutCountry));

  const getDropdownProps = () => {
    onlyCountries.sort((a, b) => {
      const localizedA = localization[a.name] || a.name;
      const localizedB = localization[b.name] || b.name;
      return localizedA.localeCompare(localizedB);
    });

    const FlagComponent = Flags[selectedCountry.iso2.toUpperCase()];

    return {
      startAdornment: (
        <InputAdornment sx={{ position: "relative" }} position="start">
          <VirtualCountryMenu
            FlagComponent={FlagComponent}
            selectedCountry={selectedCountry}
            countries={preferredCountries.concat(onlyCountries)}
            localization={localization}
            onCountrySelected={(country) => handleFlagItemClick(country)}
          />
        </InputAdornment>
      ),
    };
  };

  if (loading) return;

  const dropdownProps = getDropdownProps();

  return (
    <>
      <input
        type="hidden"
        ref={handleRefInput}
        value={numberWithCountry(
          selectedCountry,
          formattedNumberWithoutCountry
        )}
      />
      <TextFieldStyled
        placeholder={placeholder}
        value={formattedNumberWithoutCountry}
        className={inputClass}
        error={error || !checkIfValid()}
        onChange={handleInput}
        onClick={handleInputClick}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        type="tel"
        InputProps={{
          ...dropdownProps,
          ...InputProps,
        }}
        {...restProps}
      />
    </>
  );
};

MuiPhoneNumber.displayName = "MuiPhoneNumber";

export default MuiPhoneNumber;

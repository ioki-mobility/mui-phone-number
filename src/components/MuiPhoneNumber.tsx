import React, { useState, useEffect } from "react";
import Flags from "country-flag-icons/react/3x2";
import { styled, TextField, InputAdornment } from "@mui/material";
import { find, filter, isString } from "lodash";
import { allCountries, Country, CountryIso2 } from "../countryData";
import VirtualCountryMenu from "./VirtualCountryMenu";
import {
  guessSelectedCountry,
  stripCountryDialCode,
  filterRegions,
  getOnlyCountries,
} from "../support/countries";
import { formatNumber, numberWithCountry } from "../support/phoneNumber";
import { TextFieldProps } from "@mui/material";

type NumberChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;
type CountryCallbackData =
  | {}
  | { name: string; dialCode: string; countryCode: string };

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
  onChange: (phoneNumber: string, countryData: CountryCallbackData) => void;
  onlyCountries?: string[];
  preferredCountries?: string[];
  regions?: [string] | string;
  masks?: { [countryIso2: string]: string };
  isValid: (phoneNumber: string) => boolean;
  localization: { [iso2: CountryIso2]: string };
  onEnterKeyPress: () => void;
  keys: object;
  value: string;
  onClick: (
    e: React.MouseEvent<HTMLInputElement>,
    countryData: CountryCallbackData
  ) => {};
  onFocus: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
    countryData: CountryCallbackData
  ) => {};
  onBlur: (
    e: React.FocusEvent<HTMLInputElement>,
    countryData: CountryCallbackData
  ) => {};
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
  defaultCountry: defaultCountryIso2 = "",
  masks = {},

  placeholder: defaultPlaceholder = "(702) 123-4567",
  disabled = false,
  error = false,
  variant = "standard",

  inputClass = "",
  dropdownClass = "",

  autoFormat = true,
  isValid = (phoneNumber: string) =>
    allCountries.some(
      (country) =>
        phoneNumber.replace(/\D/g, "").startsWith(country.dialCode) ||
        country.dialCode.startsWith(phoneNumber)
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
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [onlyCountries, setOnlyCountries] = useState<Country[]>([]);
  const [preferredCountries, setPreferredCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [inputRef, setInputRef] = useState(null);
  const [placeholder, setPlaceholder] = useState(defaultPlaceholder);
  const [defaultCountry, setDefaultCountry] = useState<Country | null>(null);

  const getInputMask = (country: Country) => {
    const mask = masks[country.iso2];

    if (mask) return mask;

    return country.format;
  };

  const updateFormattedNumber = (phoneNumber: string) => {
    if (!phoneNumber) return;

    const unformattedNumber = phoneNumber.replace(/\D/g, "");
    const country =
      guessSelectedCountry(
        unformattedNumber.substring(0, 6),
        onlyCountries,
        defaultCountryIso2
      ) || defaultCountry;

    if (!country) return;

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

  const handleInput = (e: NumberChangeEvent) => {
    const oldFormattedText = formattedNumberWithoutCountry;
    const inputValue = e.currentTarget.value;

    // if the input is the same as before, must be some special key like enter etc.
    if (inputValue === oldFormattedText) {
      return;
    }

    let formattedNumber = "";
    const trimmedNumber = inputValue.replace(/\D/g, "");

    // Does not exceed 15 digit phone number limit
    if (trimmedNumber.length > 15) {
      return;
    }

    if (inputValue.length > 0 && selectedCountry) {
      formattedNumber = formatNumber(
        trimmedNumber,
        getInputMask(selectedCountry),
        enableLongNumbers,
        autoFormat
      );
    }

    setFormattedNumberWithoutCountry(formattedNumber);

    if (onChange) {
      onChange(
        numberWithCountry(selectedCountry, formattedNumber),
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
        setInputRef(ref);
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
    setPreferredCountries(preferredCountries);

    const defaultCountry = onlyCountries.find(
      (country) => country.iso2 === defaultCountryIso2
    );
    if (!defaultCountry) {
      console.error(
        "[MuiPhoneNumber] Default country could not be found in `onlyCountries`, aborting."
      );
      return;
    }

    setDefaultCountry(defaultCountry);

    let inputNumber = value || "";
    const unformattedNumber = inputNumber.replace(/\D/g, "");

    let countryGuess = null;
    if (inputNumber.length > 1) {
      // Country detect by value field
      countryGuess = guessSelectedCountry(
        unformattedNumber.substring(0, 6),
        onlyCountries,
        defaultCountryIso2
      );
    } else if (defaultCountry) {
      // Default country
      countryGuess = find(onlyCountries, { iso2: defaultCountryIso2 });
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

      setSelectedCountry(selectedCountry);
    }

    setFormattedNumberWithoutCountry(inputNumber);
    setLoading(false);
  }, []);

  useEffect(() => {
    updateFormattedNumber(value);
  }, [updateFormattedNumber, value, selectedCountry]);

  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (onClick) {
      onClick(e, getCountryData());
    }
  };

  const handleFlagItemClick = (country: string | Country) => {
    const nextSelectedCountry = isString(country)
      ? find(onlyCountries, (countryItem) => countryItem.iso2 === country)
      : find(onlyCountries, country);

    if (!nextSelectedCountry) return;

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

  const handleInputFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPlaceholder("");

    if (onFocus) {
      onFocus(e, getCountryData());
    }
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.currentTarget.value) {
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

    //@ts-ignore
    const FlagComponent = Flags[selectedCountry.iso2.toUpperCase()];

    return {
      startAdornment: (
        <InputAdornment sx={{ position: "relative" }} position="start">
          <VirtualCountryMenu
            FlagComponent={FlagComponent}
            selectedCountry={selectedCountry}
            countries={preferredCountries.concat(onlyCountries)}
            localization={localization}
            onCountrySelected={(country: Country) =>
              handleFlagItemClick(country)
            }
          />
        </InputAdornment>
      ),
    };
  };

  if (loading) return null;

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

import React, { useState, useEffect } from "react";
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

export type MuiPhoneNumberProps = Omit<
  Partial<TextFieldProps>,
  "onChange" | "onClick" | "onFocus" | "onBlur"
> & {
  autoFormat?: boolean;
  classes?: any;
  defaultCountry?: string;
  disableDropdown?: boolean;
  enableLongNumbers?: boolean;
  excludeCountries?: string[];
  inputClass?: string;
  onChange?: (phoneNumber: string, countryData: CountryCallbackData) => void;
  onlyCountries?: string[];
  preferredCountries?: string[];
  regions?: string[] | string;
  masks?: { [countryIso2: CountryIso2]: string };
  isValid?: (phoneNumber: string) => boolean;
  localization?: { [englishName: string]: string };
  keys?: object;
  value?: string;
  placeholder?: string;
  onClick?: (
    e: React.MouseEvent<HTMLInputElement>,
    countryData: CountryCallbackData
  ) => void;
  onFocus?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
    countryData: CountryCallbackData
  ) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
    countryData: CountryCallbackData
  ) => void;
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
  excludeCountries = [],
  defaultCountry: defaultCountryIso2 = "",
  masks = {},

  placeholder: defaultPlaceholder = "(702) 123-4567",
  disabled = false,
  error = false,

  inputClass = "",

  autoFormat = true,
  isValid = (phoneNumber: string) =>
    allCountries.some(
      (country) =>
        phoneNumber.replace(/\D/g, "").startsWith(country.dialCode) ||
        country.dialCode.startsWith(phoneNumber)
    ),
  disableDropdown = false,
  enableLongNumbers = false,

  regions = "",

  localization = {},

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
  const [placeholder, setPlaceholder] = useState(defaultPlaceholder);

  const getInputMask = (country: Country) => {
    const mask = masks[country.iso2];

    if (mask) return mask;

    return country.format;
  };

  const updateFormattedNumber = (phoneNumber: string) => {
    if (!phoneNumber) return;

    handleNewInput(phoneNumber, true);
  };

  const getCountryData = () => {
    if (!selectedCountry) return {};

    return {
      name: selectedCountry.name || "",
      dialCode: selectedCountry.dialCode || "",
      countryCode: selectedCountry.iso2 || "",
    };
  };

  const handleNewInput = (
    newInput: string,
    checkCountry: boolean = false,
    defaultCountry: Country | null = selectedCountry
  ) => {
    if (!selectedCountry) return;

    const oldFormattedNumber = formattedNumberWithoutCountry;
    const inputValue = newInput;

    // if the input is the same as before, must be some special key like enter etc.
    if (inputValue === oldFormattedNumber) {
      return;
    }

    let formattedNumber = inputValue;
    const unformattedNumber = inputValue.replace(/\D/g, "");

    // Does not exceed 15 digit phone number limit
    if (unformattedNumber.length > 15) {
      return;
    }

    let country = defaultCountry;

    if (checkCountry && unformattedNumber.length > 1) {
      country =
        guessSelectedCountry(
          unformattedNumber.substring(0, 6),
          onlyCountries,
          defaultCountryIso2
        ) || defaultCountry;
    }

    if (!country) return;

    const strippedNumber = stripCountryDialCode(
      country.dialCode,
      unformattedNumber
    );

    if (unformattedNumber.length > 0 && country) {
      formattedNumber = formatNumber(
        strippedNumber,
        country ? getInputMask(country) : undefined,
        enableLongNumbers,
        autoFormat
      );
    }

    setFormattedNumberWithoutCountry(formattedNumber);

    if (country !== selectedCountry) setSelectedCountry(country);

    if (onChange) {
      onChange(numberWithCountry(country, formattedNumber), getCountryData());
    }
  };

  const handleInput = (e: NumberChangeEvent) => {
    handleNewInput(e.currentTarget.value, false);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const newInput = e.clipboardData?.getData("text");

    if (newInput) handleNewInput(newInput, true);
  };

  useEffect(() => {
    let filteredCountries = allCountries;

    if (regions) filteredCountries = filterRegions(regions, filteredCountries);
    if (excludeCountries)
      filteredCountries = filteredCountries.filter(
        (country) => !excludeCountries.includes(country.iso2)
      );

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

    const defaultCountry =
      onlyCountries.find((country) => country.iso2 === defaultCountryIso2) ??
      onlyCountries[0];
    if (!defaultCountry) {
      console.error("[MuiPhoneNumber] No countries found, aborting.");
      return;
    }

    setSelectedCountry(defaultCountry);

    handleNewInput(value || "", true, defaultCountry);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (value) {
      updateFormattedNumber(value);
    }
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
    selectedCountry &&
    isValid(numberWithCountry(selectedCountry, formattedNumberWithoutCountry));

  const getDropdownProps = () => {
    if (!selectedCountry) return null;

    onlyCountries.sort((a, b) => {
      const localizedA = localization[a.name] || a.name;
      const localizedB = localization[b.name] || b.name;
      return localizedA.localeCompare(localizedB);
    });

    return {
      startAdornment: (
        <InputAdornment sx={{ position: "relative" }} position="start">
          <VirtualCountryMenu
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

  if (loading || !selectedCountry) return null;

  const dropdownProps = disableDropdown ? {} : getDropdownProps();

  return (
    <>
      <input
        type="hidden"
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
        onPaste={handlePaste}
        onClick={handleInputClick}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        type="tel"
        variant="outlined"
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

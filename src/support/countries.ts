import { reduce, memoize, trim } from "lodash";
import { Country, CountryIso2, Region } from "../countryData";

export const guessSelectedCountry = memoize(
  (
    inputNumber: string,
    onlyCountries: Country[],
    defaultCountryIso2: string
  ): Country | null => {
    const defaultCountry =
      onlyCountries.find((country) => country.iso2 === defaultCountryIso2) ??
      null;

    if (trim(inputNumber) === "") return defaultCountry;

    const bestGuess = reduce(
      onlyCountries,
      (selectedCountry, country) => {
        if (inputNumber.startsWith(country.dialCode)) {
          if (country.dialCode.length > selectedCountry.dialCode.length) {
            return country;
          }

          if (
            country.dialCode.length === selectedCountry.dialCode.length &&
            country.priority < selectedCountry.priority
          ) {
            return country;
          }
        }

        return selectedCountry;
      },
      {
        name: "",
        regions: [],
        iso2: "",
        dialCode: "",
        priority: 10001,
        hasAreaCodes: false,
        isAreaCode: false,
      } as Country
    );

    if (!bestGuess.name) return defaultCountry;

    return bestGuess;
  }
);

export const stripCountryDialCode = (
  countryDialCode: string,
  phoneNumber: string
) => {
  const dialCodeRegex = new RegExp(`^\\+?${countryDialCode}`);

  if (phoneNumber.match(dialCodeRegex)) {
    return phoneNumber.replace(dialCodeRegex, "");
  }

  return phoneNumber;
};

export const filterRegions = (
  regions: string | Region[],
  filteredCountries: Country[]
) => {
  if (typeof regions === "string") {
    const region = regions;

    return filteredCountries.filter((country) =>
      country.regions.some((element) => element === region)
    );
  }

  return filteredCountries.filter((country) =>
    country.regions.some((region) => regions.includes(region))
  );
};

export const getOnlyCountries = (
  onlyCountriesIso2: CountryIso2[],
  filteredCountries: Country[]
) => {
  if (onlyCountriesIso2.length === 0) return filteredCountries;

  return filteredCountries.filter((country) =>
    onlyCountriesIso2.some((element) => element === country.iso2)
  );
};

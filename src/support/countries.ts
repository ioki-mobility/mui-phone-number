import { find, reduce, memoize, trim, startsWith } from "lodash";

export const guessSelectedCountry = memoize(
  (inputNumber, onlyCountries, defaultCountry) => {
    const secondBestGuess = find(onlyCountries, { iso2: defaultCountry }) || {};
    if (trim(inputNumber) === "") return secondBestGuess;

    const bestGuess = reduce(
      onlyCountries,
      (selectedCountry, country) => {
        if (startsWith(inputNumber, country.dialCode)) {
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
      { dialCode: "", priority: 10001 },
      this
    );

    if (!bestGuess.name) return secondBestGuess;
    return bestGuess;
  }
);

export const stripCountryDialCode = (countryDialCode, number) => {
  const dialCodeRegex = new RegExp(`^\\+?${countryDialCode}`);

  if (number.match(dialCodeRegex)) {
    return number.replace(dialCodeRegex, "");
  }

  return number;
};

export const filterRegions = (regions, filteredCountries) => {
  if (typeof regions === "string") {
    const region = regions;

    return filteredCountries.filter((country) =>
      country.regions.some((element) => element === region)
    );
  }

  return filteredCountries.filter((country) => {
    const matches = regions.map((region) =>
      country.regions.some((element) => element === region)
    );

    return matches.some((el) => el);
  });
};

export const getOnlyCountries = (onlyCountriesArray, filteredCountries) => {
  if (onlyCountriesArray.length === 0) return filteredCountries;

  return filteredCountries.filter((country) =>
    onlyCountriesArray.some((element) => element === country.iso2)
  );
};

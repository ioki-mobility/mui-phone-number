import { reduce, head, tail } from "lodash";

export const formatNumber = (
  text,
  patternArg,
  enableLongNumbers,
  autoFormat
) => {
  let pattern;
  if (patternArg) {
    pattern = patternArg.split(" ");
    pattern.shift();
    pattern = pattern.join(" ");
  } else {
    pattern = patternArg;
  }

  if (!text || text.length === 0) {
    return "";
  }

  // for all strings with length less than 3, just return it (1, 2 etc.)
  // also return the same text if the selected country has no fixed format
  if ((text && text.length < 2) || !pattern || !autoFormat) {
    return text;
  }

  const formattedObject = reduce(
    pattern,
    (acc, character) => {
      if (acc.remainingText.length === 0) {
        return acc;
      }

      if (character !== ".") {
        return {
          formattedText: acc.formattedText + character,
          remainingText: acc.remainingText,
        };
      }

      return {
        formattedText: acc.formattedText + head(acc.remainingText),
        remainingText: tail(acc.remainingText),
      };
    },
    {
      formattedText: "",
      remainingText: text.split(""),
    }
  );

  let formattedNumber;
  if (enableLongNumbers) {
    formattedNumber =
      formattedObject.formattedText + formattedObject.remainingText.join("");
  } else {
    formattedNumber = formattedObject.formattedText;
  }

  // Always close brackets
  if (formattedNumber.includes("(") && !formattedNumber.includes(")"))
    formattedNumber += ")";
  return formattedNumber;
};

export const numberWithCountry = (country, numberWithoutCountry) => {
  if (country) {
    return `+${country.dialCode}${numberWithoutCountry}`;
  }

  return numberWithoutCountry;
};

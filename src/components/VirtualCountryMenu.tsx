import React, { useState } from "react";
import {
  TextField,
  useMediaQuery,
  ListSubheader,
  Popper,
  Typography,
  Autocomplete,
  Stack,
  IconButton,
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import { VariableSizeList, ListChildComponentProps } from "react-window";
import Flags from "country-flag-icons/react/3x2";
import { Country, CountryIso2 } from "../countryData";

const LISTBOX_PADDING = 8; // px

const IconButtonDialCodeStyled = styled("div")(() => ({
  fontSize: "1rem",
  lineHeight: "1rem",
  paddingLeft: 8,
  paddingTop: 2,
}));

const Caret = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M7 10l5 5 5-5z" />
  </svg>
);

const IconButtonStyled = styled(IconButton)(() => ({
  width: "min-content",
  minWidth: 30,
  padding: 0,
  height: 30,
  borderRadius: 0,
  display: "flex",
  alignItems: "center",
  "& svg": {
    width: "auto",
    height: "1em",
  },
}));

const renderRow = (props: ListChildComponentProps) => {
  const { data, index, style } = props;
  const dataSet = data[index];
  const inlineStyle = {
    ...style,
    top: (style.top as number) + LISTBOX_PADDING,
  };

  if (dataSet.hasOwnProperty("group")) {
    return (
      <ListSubheader key={dataSet.key} component="div" style={inlineStyle}>
        {dataSet.group}
      </ListSubheader>
    );
  }

  return (
    <Typography component="li" {...dataSet[0]} noWrap style={inlineStyle}>
      {dataSet}
    </Typography>
  );
};

const OuterElementContext = React.createContext({});

const OuterElementType = React.forwardRef<HTMLDivElement>((props, ref) => {
  const outerProps = React.useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

const useResetCache = (data: any) => {
  const ref = React.useRef<VariableSizeList>(null);
  React.useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [data]);
  return ref;
};

// Adapter for react-window
const ListboxComponent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLElement>
>((props, ref) => {
  const { children, ...other } = props;
  const itemData: React.ReactNode[] = [];
  (children as React.ReactNode[]).forEach(
    (item: React.ReactNode & { children?: React.ReactNode[] }) => {
      itemData.push(item);
      itemData.push(...(item.children || []));
    }
  );

  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up("sm"), {
    noSsr: true,
  });
  const itemCount = itemData.length;
  const itemSize = smUp ? 36 : 48;

  const getChildSize = (child: React.ReactNode) => {
    if (child?.hasOwnProperty("group")) {
      return 48;
    }

    return itemSize;
  };

  const getHeight = () => {
    if (itemCount > 8) {
      return 8 * itemSize;
    }
    return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
  };

  const gridRef = useResetCache(itemCount);

  return (
    <div ref={ref}>
      <OuterElementContext.Provider value={other}>
        <VariableSizeList
          itemData={itemData}
          height={getHeight() + 2 * LISTBOX_PADDING}
          width="100%"
          ref={gridRef}
          outerElementType={OuterElementType}
          innerElementType="ul"
          itemSize={(index) => getChildSize(itemData[index])}
          overscanCount={5}
          itemCount={itemCount}
        >
          {renderRow}
        </VariableSizeList>
      </OuterElementContext.Provider>
    </div>
  );
});

const StyledPopper = styled(Popper)({
  width: "36ch !important",
  transform: "translate3d(-13px, 29px, 0px) !important",
  ["& .MuiAutocomplete-listbox"]: {
    boxSizing: "border-box",
    "& ul": {
      padding: 0,
      margin: 0,
    },
  },
});

type Props = {
  FlagComponent: JSX.Element;
  selectedCountry: Country;
  countries: Country[];
  localization: { [englishName: string]: string };
  onCountrySelected: (country: Country) => void;
};

const VirtualCountryMenu = ({
  FlagComponent,
  selectedCountry,
  countries,
  localization,
  onCountrySelected,
}: Props) => {
  const [open, setOpen] = useState(false);
  const countryClicked = (country: Country) => () => {
    setOpen(false);
    onCountrySelected(country);
  };

  return (
    <Autocomplete
      id="virtualize-countries"
      disableListWrap
      PopperComponent={StyledPopper}
      ListboxComponent={ListboxComponent}
      options={countries}
      open={open}
      onClose={() => setOpen(false)}
      value={selectedCountry}
      isOptionEqualToValue={(option, value) =>
        option.dialCode === value.dialCode
      }
      disablePortal={true}
      renderInput={(params) => (
        <Stack
          sx={{
            position: "relative",
            display: "grid",
            gridTemplate: "1fr / 1fr",
            placeItems: "center",
            "& > *": {
              gridColumn: "1 / 1",
              gridRow: "1 / 1",
            },
            ".MuiAutocomplete-popper": {
              position: "absolute",
              top: "0",
              left: "0",
            },
          }}
        >
          <IconButtonStyled onClick={() => setOpen(!open)}>
            {Boolean(FlagComponent) && <FlagComponent className="margin" />}
            <IconButtonDialCodeStyled>
              +{selectedCountry.dialCode}
            </IconButtonDialCodeStyled>
            <Caret />
          </IconButtonStyled>
          <TextField {...params} sx={{ opacity: 0, zIndex: -1 }} />
        </Stack>
      )}
      renderOption={(_props, country) => {
        //@ts-ignore
        const Flag = Flags[country.iso2.toUpperCase()];

        return (
          <Stack
            key={country.dialCode}
            direction="row"
            alignItems="center"
            gap={1}
            sx={{ padding: "0.25rem 0.75rem", cursor: "pointer" }}
            onClick={countryClicked(country)}
          >
            {Boolean(Flag) && <Flag style={{ height: "1em" }} />}
            {!Boolean(Flag) && <div style={{ width: "1.5rem" }}></div>}
            <span>
              {(localization && localization[country.name]) || country.name} +
              {country.dialCode}
            </span>
          </Stack>
        );
      }}
      getOptionLabel={(country) =>
        (localization && localization[country.name]) || country.name
      }
    />
  );
};

export default VirtualCountryMenu;

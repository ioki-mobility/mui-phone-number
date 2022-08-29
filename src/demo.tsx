import React, { ReactNode, useState } from "react";
import ReactDOM from "react-dom/client";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import MuiPhoneNumber from "./components/MuiPhoneNumber";
import "./demo.css";

type DemoProps = {
  description: ReactNode;
  code: string;
  children: ReactNode;
};

const Demo = ({ description, code, children }: DemoProps) => {
  return (
    <div>
      <p>{description}</p>
      <SyntaxHighlighter language="javascript" style={docco} wrapLongLines>
        {code}
      </SyntaxHighlighter>
      {children}
    </div>
  );
};

const ChangeDemo = () => {
  const [number, setNumber] = useState("");

  return (
    <div>
      Current number: {number}
      <br />
      <MuiPhoneNumber
        defaultCountry="it"
        preferredCountries={["it", "se"]}
        onChange={(phoneNumber) => {
          setNumber(phoneNumber);
        }}
      />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <h1>mui-phone-number</h1>
    <Demo description="Basic demo" code={`<MuiPhoneNumber />`}>
      <MuiPhoneNumber />
    </Demo>

    <h2>Pass in phone number and listen for change</h2>
    <div className="grid">
      <Demo
        description="Automatically detect country by provided phone number"
        code={`<MuiPhoneNumber value="+3802343252" />`}
      >
        <MuiPhoneNumber value="+3802343252" />
      </Demo>

      <Demo
        description="onChange callback"
        code={`<MuiPhoneNumber
  defaultCountry="it"
  preferredCountries={["it", "se"]}
  onChange={(phoneNumber) => {
    console.log(phoneNumber);
  }}
/>`}
      >
        <ChangeDemo />
      </Demo>
    </div>

    <h2>Configure available countries</h2>
    <div className="grid">
      <Demo
        description="Exclude countries and set a default country"
        code={`<MuiPhoneNumber defaultCountry="no" excludeCountries={["us", "ca"]} />`}
      >
        <MuiPhoneNumber defaultCountry="no" excludeCountries={["us", "ca"]} />
      </Demo>

      <Demo
        description="Only show configured countries"
        code={`<MuiPhoneNumber defaultCountry="gb" onlyCountries={["gb", "es"]} />`}
      >
        <MuiPhoneNumber defaultCountry="gb" onlyCountries={["gb", "es"]} />
      </Demo>

      <Demo
        description="Show preferred countries at top of list"
        code={`<MuiPhoneNumber defaultCountry="it" preferredCountries={["it", "se"]} />`}
      >
        <MuiPhoneNumber defaultCountry="it" preferredCountries={["it", "se"]} />
      </Demo>

      <Demo
        description="Filter countries by region: europe"
        code={`<MuiPhoneNumber defaultCountry="it" regions="europe" />`}
      >
        <MuiPhoneNumber defaultCountry="it" regions="europe" />
      </Demo>

      <Demo
        description="Filter countries by region: north-america and carribean"
        code={`<MuiPhoneNumber
  defaultCountry="ca"
  regions={["north-america", "carribean"]}
/>`}
      >
        <MuiPhoneNumber
          defaultCountry="ca"
          regions={["north-america", "carribean"]}
        />
      </Demo>
    </div>

    <h2>Configure appearance</h2>
    <div className="grid">
      <Demo
        description="Customisable placeholder"
        code={`<MuiPhoneNumber placeholder="987 654 321" />`}
      >
        <MuiPhoneNumber placeholder="987 654 321" />
      </Demo>

      <Demo
        description="With a label"
        code={`<MuiPhoneNumber label="Mobile number" />`}
      >
        <MuiPhoneNumber label="Mobile number" />
      </Demo>

      <Demo
        description="Disabled dropdown"
        code={`<MuiPhoneNumber
  onlyCountries={["us"]}
  defaultCountry="us"
  disableDropdown
  placeholder="(702) 123-4567"
/>`}
      >
        <MuiPhoneNumber
          onlyCountries={["us"]}
          defaultCountry="us"
          disableDropdown
          placeholder="(702) 123-4567"
        />
      </Demo>
    </div>
  </React.StrictMode>
);

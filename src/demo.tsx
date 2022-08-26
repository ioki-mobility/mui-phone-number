import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import MuiPhoneNumber from './components/MuiPhoneNumber'

const ChangeDemo = () => {
  const [number, setNumber] = useState()

  return (
    <div>
      Current number: {number}
      <br />
      <MuiPhoneNumber
        defaultCountry="it"
        preferredCountries={['it', 'se']}
        onChange={(e) => {
          setNumber(e)
        }}
      />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <div style={{ fontFamily: "'Roboto', sans-serif", fontSize: '15px' }}>
    <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
      <p>v1.1.0</p>
      <p>Exclude countries (usa, canada)</p>
      <MuiPhoneNumber defaultCountry="no" excludeCountries={['us', 'ca']} />
      <p>Only countries</p>
      <MuiPhoneNumber defaultCountry="gb" onlyCountries={['gb', 'es']} />
      <p>Preferred countries</p>
      <MuiPhoneNumber defaultCountry="it" preferredCountries={['it', 'se']} />
      <p>onChange</p>
      <ChangeDemo />
      <p>Native</p>
      <MuiPhoneNumber defaultCountry="it" preferredCountries={['it', 'se']} native />
    </div>

    <div style={{ display: 'inline-block', marginLeft: '40px' }}>
      <p>v2</p>
      <p>Auto country detect by value</p>
      <MuiPhoneNumber value="+3802343252" />
      <p>Disabled area codes with disableAreaCodes</p>
      <MuiPhoneNumber defaultCountry="us" disableAreaCodes />
      <p>Disabled flag by default</p>
      <p>Customizable placeholder</p>
    </div>

    <div
      style={{
        display: 'inline-block',
        marginLeft: '40px',
        verticalAlign: 'top',
        marginTop: '35px',
      }}
    >
      <p>Custom region selected: {"{'europe'}"}</p>
      <MuiPhoneNumber defaultCountry="it" regions="europe" />
      <p>Custom regions selected: {"{['north-america', 'carribean']}"}</p>
      <MuiPhoneNumber defaultCountry="ca" regions={['north-america', 'carribean']} />
      <p>Disabled dropdown</p>
      <MuiPhoneNumber onlyCountries={['us']} defaultCountry="us" disableDropdown placeholder="(702) 123-4567" />
      <p>Disabled dropdown and country code</p>
      <MuiPhoneNumber
        onlyCountries={['us']}
        defaultCountry="us"
        disableAreaCodes
        disableCountryCode
        disableDropdown
        placeholder="(702) 123-4567"
      />
    </div>
  </div>
  </React.StrictMode>
)

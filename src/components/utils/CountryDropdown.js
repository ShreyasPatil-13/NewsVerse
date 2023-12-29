import React from "react";

const CountryDropdown = ({ handleCountryChange }) => {
  const countries = [
    "ae",
    "ar",
    "at",
    "au",
    "be",
    "bg",
    "br",
    "ca",
    "ch",
    "cn",
    "co",
    "cu",
    "cz",
    "de",
    "eg",
    "fr",
    "gb",
    "gr",
    "hk",
    "hu",
    "id",
    "ie",
    "il",
    "in",
    "it",
    "jp",
    "kr",
    "lt",
    "lv",
    "ma",
    "mx",
    "my",
    "ng",
    "nl",
    "no",
    "nz",
    "ph",
    "pl",
    "pt",
    "ro",
    "rs",
    "ru",
    "sa",
    "se",
    "sg",
    "si",
    "sk",
    "th",
    "tr",
    "tw",
    "ua",
    "us",
    "ve",
    "za",
  ];

  return (
    <ul
      className="dropdown-menu"
      style={{
        overflow: "auto",
        height: "300px",
        textAlign: "center",
        minWidth: "20px",
      }}
    >
      {countries.map((countryCode) => (
        <li key={countryCode}>
          <button
            className="dropdown-item d-flex "
            type="button"
            onClick={() => handleCountryChange(countryCode)}
          >
            <img
              src={`https://flagsapi.com/${countryCode.toUpperCase()}/flat/24.png`}
              alt={countryCode}
              className="me-3"
            />
            <p>{countryCode.toUpperCase()}</p>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CountryDropdown;

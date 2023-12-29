import { useState } from "react";
import CountryDropdown from "./utils/CountryDropdown";
import { useSearch } from "./contexts/SearchContext";
import NewsList from "./NewsList";
import About from "./About";

const Navbar = () => {
  const { setSearchQuery, country, setCountry } = useSearch();
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  function components() {
    switch (activeTab) {
      case 0:
        return <NewsList />;
      case 1:
        return <About />;
      default:
        break;
    }
  }

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    setSearchQuery(search);
  };

  const handleCountryChange = (countryCode) => {
    setCountry(countryCode);
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg shadow p-2 navbar-dark"
        style={{
          backgroundColor: "#7808d0",
        }}
      >
        <div className="container-fluid mx-2">
          <a className="navbar-brand fw-bolder" href="/">
            <button className="button" data-text="Awesome">
              <span className="actual-text">&nbsp;newsverse&nbsp;</span>
              <span aria-hidden="true" className="hover-text">
                &nbsp;newsverse&nbsp;
              </span>
            </button>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  onClick={() => handleTabClick(0)}
                  className={`nav-link ${activeTab === 0 ? "active" : ""}`}
                  aria-current="page"
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button
                  onClick={() => handleTabClick(1)}
                  className={`nav-link ${activeTab === 1 ? "active" : ""}`}
                >
                  About
                </button>
              </li>
              <li className="nav-item dropdown me-4">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Links
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Source code
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://newsapi.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      News API
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://github.com/ShreyasPatil-13"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Other Projects
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <form
              className="d-flex me-2"
              role="search"
              onSubmit={handleSearch}
              style={{
                background: "rgba(235, 227, 221, 0.7)",
                WebkitBackdropFilter: "blur(15px)",
                backdropFilter: "blur(15px)",
                border: "1px solid rgba(235, 227, 221, 0.35)",
                borderRadius: "10px",
                padding: "3px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Enter your search query"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  border: "none", // Remove border for input
                  flex: "1", // Expand the input to fill available space
                  width: "250px",
                }}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                style={{
                  backgroundColor: "#7a52bf", // Change background color
                  color: "#fff", // Change text color
                  borderRadius: "10px", // Add border-radius for rounded corners
                }}
              >
                Search
              </button>
            </form>

            <div className="dropdown-center my-2 mx-0 ">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="countryDropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {country ? (
                  <>
                    <img
                      src={`https://flagsapi.com/${country.toUpperCase()}/flat/24.png`}
                      alt={country}
                      className="me-2"
                    />
                    {country.toUpperCase()}
                  </>
                ) : (
                  setCountry("IN")
                )}
              </button>

              <CountryDropdown handleCountryChange={handleCountryChange} />
            </div>
          </div>
        </div>
      </nav>

      <div className="m-md-4 m-3">{components()}</div>
    </div>
  );
};

export default Navbar;

import React from "react";
import FloatingCard from "./cards/FloatingCard";
import {
  BootstrapIcon,
  CssIcon,
  HtmlIcon,
  NewsApiIcon,
  ReactIcon,
} from "./utils/Icons";
import SocialIcons from "./utils/SocialIcons";
import logo from "./assets/logo-black.png";

const About = () => {
  return (
    <div className="container">
      <div className="m-md-3">
        <div className="card shadow-sm text-center p-3 ">
          <div
            className="card-header fw-bold fs-1 d-flex flex-column align-items-center border-0 py-5"
            data-text="Awesome"
          >
            <span
              style={{
                letterSpacing: "5px",
                fontFamily: "Arial",
                borderRight: "6px solid #000",
              }}
            >
              NEWSVERSE
            </span>

            <div className="card-subtitle my-2 fw-normal text-body-secondary fs-5 fst-italic ">
              Empowering you with knowledge in every headline
            </div>

            <div className="fs-6 fw-normal  my-3 text-wrap lh-2 ">
              Stay informed and up-to-date with the latest news from around the
              world with our comprehensive news app.
              <br /> 'NEWSVERSE' brings you real-time news articles, covering a
              wide range of categories.
            </div>
          </div>

          <div className="card-body border-bottom border-secondary-subtle">
            <h2 className="fs-3 fw-normal">Technologies Used</h2>
            <div
              className="d-flex flex-md-row flex-wrap justify-content-center gap-4 my-3"
              style={{ width: "100%", border: "2px " }}
            >
              <FloatingCard
                icon={<ReactIcon />}
                title="React Js"
                hoverText="React Js"
                hoverBg="#d7f9ff"
                hoverTextColor="#039be5"
              />
              <FloatingCard
                icon={<BootstrapIcon />}
                title="Bootstrap"
                hoverText="Bootstrap"
                hoverBg="#e1d1f8"
                hoverTextColor="#7952b3"
              />
              <FloatingCard
                icon={<NewsApiIcon />}
                title="News API"
                hoverText="News API"
                hoverBg="#c9ddfd"
                hoverTextColor="#2c73e8"
              />
              <FloatingCard
                icon={<HtmlIcon />}
                title="HTML 5"
                hoverText="HTML 5"
                hoverBg="wheat"
                hoverTextColor="red"
              />
              <FloatingCard
                icon={<CssIcon />}
                title="CSS 3"
                hoverText="CSS 3"
                hoverBg="#ceebfa"
                hoverTextColor="#0277bd"
              />
            </div>
          </div>

          <div
            className="card-header mt-3 border-0 "
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <div className="d-flex flex-row justify-content-between align-items-center mt-3 flex-wrap">
              <div className="d-flex p-2">
                <img src={logo} alt="lgog" width={70} height={70} />
                <div className="card-title m-1 ">
                  <h2 className="fs-6 fw-normal text-start mb-2">
                    DESIGNED BY
                  </h2>
                  <h2 className="fs-2 fw-normal text-start">Shreyas Patil</h2>
                </div>
              </div>
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

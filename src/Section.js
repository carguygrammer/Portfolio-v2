import Overlay from "./Overlay";
import Wrapper from "./Wrapper";
import FigureContainer from "./FigureContainer";
import SmallLake from "./images/Lake_Misasako.jpg";
import Mountains from "./images/mountains.jpg";
import Lake from "./images/lake.jpg";
import Forest from "./images/forest.jpg";

import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaWordpress,
  FaNpm,
} from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";

import { TbBrandJavascript } from "react-icons/tb";

import { SiSass, SiNetlify, SiTypescript } from "react-icons/si";

const Section = () => {
  const [galleryVisible, setGalleryVisible] = useState(false);
  const [detailsVisible, setDetailsVisible] = useState({
    project1: false,
    project2: false,
    project3: false,
    project4: false,
  });

  const toggleDetails = (project) => {
    setDetailsVisible((prevState) => ({
      ...prevState,
      [project]: !prevState[project],
    }));
  };

  return (
    <>
      <section className="homepage flex__row--center-center">
        <Overlay />
        <Wrapper />
      </section>
      <section className="section section__about flex__col--center-center">
        <div className="container">
          <div className="wrapper">
            <article className="self-contained">
              <img src={Mountains} alt="mountains" />
              <h2 className="heading__secondary">Quick History</h2>
              <p className="paragraph">
                I spent two years of my professional life helping clients find
                their visual identities and bring them to light in the best way
                possible. I have worked with small and large businesses
                including Jeffries and Madison, Harper and Partners Inc.,
                Stipple Unlimited, and Arivaci & Co.
              </p>
            </article>
            <article className="self-contained">
              <img src={Mountains} alt="mountains" />
              <h2 className="heading__secondary">self-taught web developer</h2>
              <p className="paragraph">
                I spent two years of my professional life helping clients find
                their visual identities and bring them to light in the best way
                possible. I have worked with small and large businesses
                including Jeffries and Madison, Harper and Partners Inc.,
                Stipple Unlimited, and Arivaci & Co.
              </p>
            </article>
            <article className="self-contained">
              <img src={Mountains} alt="mountains" />
              <h2 className="heading__secondary">Amateur Photographer</h2>
              <p className="paragraph">
                I spent two years of my professional life helping clients find
                their visual identities and bring them to light in the best way
                possible. I have worked with small and large businesses
                including Jeffries and Madison, Harper and Partners Inc.,
                Stipple Unlimited, and Arivaci & Co.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section section__skills flex__col--center-center">
        <div className="container">
          <div className="wrapper">
            <span className="color-primary span__page--title">My Skills</span>

            <div className="self-contained">
              <h3>Front End</h3>
              <ul className="skills__list">
                <li>
                  <FaHtml5 style={{ color: "chocolate" }} />
                  <span>HTML</span>
                </li>
                <li>
                  <FaCss3Alt style={{ color: "deepskyblue" }} />
                  <span>CSS</span>
                </li>
                <li>
                  <TbBrandJavascript style={{ color: "yellow" }} />
                  <span>JavaScript</span>
                </li>
                <li>
                  <FaReact style={{ color: "aqua" }} />
                  <span>React</span>
                </li>
                <li>
                  <BsBootstrap style={{ color: "orchid" }} />
                  <span>BootStrap</span>
                </li>
                <li>
                  <SiSass style={{ color: "hotpink" }} />
                  <span>SCSS</span>
                </li>
              </ul>
            </div>
            <div className="self-contained">
              <h3>version control</h3>
              <ul className="skills__list group2">
                <li>
                  <FaGitAlt style={{ color: "orangered" }} />
                  <span>Git</span>
                </li>
                <li>
                  <FaGithub />
                  <span>GitHub</span>
                </li>
                <li>
                  <SiNetlify style={{ color: "teal" }} />
                  <span>Netlify</span>
                </li>
              </ul>
            </div>
            <div className="self-contained">
              <h3>familiar with</h3>
              <ul className="skills__list group3">
                <li>
                  <SiTypescript style={{ color: "dodgerblue" }} />
                  <span>TypeScript</span>
                </li>
                <li>
                  <FaWordpress style={{ color: "white" }} />
                  <span>WordPress</span>
                </li>
                <li>
                  <FaNpm style={{ color: "red" }} />
                  <span>NPM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section section__gallery">
        {!galleryVisible ? (
          <div className="overlay overlay--drk flex__col--center-center">
            <h2 className="heading__secondary">
              I am also a passionate Amatuer photographer
            </h2>
            <button
              className="btn gallery__reveal-btn"
              onClick={() => setGalleryVisible(true)}
            >
              view my Photography Gallery
            </button>
          </div>
        ) : (
          /* <span className="color-primary span__page--title">Photography</span> */
          <div className="grid__container">
            <div className="grid__image image--1">
              <img src={Mountains} />
            </div>
            <div className="grid__image image--2">
              <img src={SmallLake} alt="image 2" />
            </div>
            <div className="grid__image image--3">
              <img src={SmallLake} alt="image 3" />
            </div>
            <div className="grid__image image--4">
              <img src={Lake} alt="image 4" />
            </div>
            <div className="grid__image image--5">
              <img src={Forest} alt="image 5" />
            </div>
            <div className="grid__image image--6">
              <img src={SmallLake} alt="image 3" />
            </div>
            <div className="grid__image image--7">
              <img src={Lake} alt="image 4" />
            </div>
            <div className="grid__image image--8">
              <img src={Forest} alt="image 5" />
            </div>
            <div className="grid__image image--9">
              <img src={Mountains} />
            </div>
            <div className="grid__image image--10">
              <img src={SmallLake} alt="image 2" />
            </div>
            <div className="grid__image image--11">
              <img src={SmallLake} alt="image 3" />
            </div>
            <div className="grid__image image--12">
              <img src={Forest} alt="image 5" />
            </div>
            <div className="grid__image image--13">
              <button
                className="btn gallery__hide-btn"
                onClick={() => setGalleryVisible(false)}
              >
                Hide Photography Gallery
              </button>
              <button className="btn gallery__instagram-btn">
                View More on Instagram
              </button>
            </div>
          </div>
        )}
      </section>
      <section className="section section__portfolio flex__col--center-center">
        <div className="container">
          <h2 className="heading__secondary">Portfolio</h2>
          <div className="margin-tb--md">
            <FigureContainer
              detailsVisible={detailsVisible}
              toggleDetails={toggleDetails}
              setDetailsVisible={setDetailsVisible}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;

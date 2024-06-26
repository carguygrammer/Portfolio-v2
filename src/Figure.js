import Forest from "./images/forest.jpg";
import Mountains from "./images/mountains.jpg";
import SmallLake from "./images/Lake_Misasako.jpg";
import Lake from "./images/lake.jpg";
import { FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiSass, SiNetlify } from "react-icons/si";

const Figure = ({ toggleDetails, detailsVisible }) => {
  return (
    <div className="row-tiles">
      <figure>
        {!detailsVisible.project1 ? (
          <figure className="figure">
            <img src={Forest} alt="forest" />
            <span
              className="figurespan"
              onClick={() => toggleDetails("project1")}
            >
              Show details
            </span>
            <div className="overlay overlay--projects"></div>
          </figure>
        ) : (
          detailsVisible.project1 && (
            <div className="tiles">
              <figure className="figure">
                <img src={Forest} alt="forest" />
                <div className="overlay overlay--projects"></div>
              </figure>
              <figcaption className="figcaption">
                <h3 className="heading__tertiary">
                  University Of Texas Webpage
                </h3>
                <p className="paragraph">
                  For this project I took the Texas university at Austins web
                  development pdf course brochure and converted it to a HTML and
                  CSS page. At the time they didn't have a dedicated web page
                  demonstrating the course on their website. The page features
                  some of the course details, ect
                </p>
                <h4 className="heading__quad">skills used</h4>
                <span className="figcaption__span">
                  <FaHtml5 style={{ color: "chocolate" }} />
                  <FaCss3Alt style={{ color: "deepskyblue" }} />
                </span>
                <button className="btn">view site</button>
                <button
                  className="btn btn__close"
                  onClick={() => toggleDetails("project1")}
                >
                  hide details
                </button>
              </figcaption>
            </div>
          )
        )}
      </figure>

      <figure>
        {!detailsVisible.project2 ? (
          <figure className="figure">
            <img src={Lake} alt="lake" />
            <span
              className="figurespan"
              onClick={() => toggleDetails("project2")}
            >
              Show details
            </span>
            <div className="overlay overlay--projects"></div>
          </figure>
        ) : (
          detailsVisible.project2 && (
            <div className="tiles">
              <figure className="figure">
                <img src={Lake} alt="lake" />
                <div className="overlay overlay--projects"></div>
              </figure>
              <figcaption className="figcaption">
                <h3 className="heading__tertiary">
                  University Of Texas Webpage
                </h3>
                <p className="paragraph">
                  For this project I took the Texas university at Austins web
                  development pdf course brochure and converted it to a HTML and
                  CSS page. At the time they didn't have a dedicated web page
                  demonstrating the course on their website. The page features
                  some of the course details, ect
                </p>
                <h4 className="heading__quad">skills used</h4>
                <span className="figcaption__span">
                  <FaHtml5 style={{ color: "chocolate" }} />
                  <FaCss3Alt style={{ color: "deepskyblue" }} />
                  <TbBrandJavascript style={{ color: "yellow" }} />
                </span>
                <button className="btn">view site</button>
                <button
                  className="btn btn__close"
                  onClick={() => toggleDetails("project2")}
                >
                  hide details
                </button>
              </figcaption>
            </div>
          )
        )}
      </figure>

      <figure>
        {!detailsVisible.project3 ? (
          <figure className="figure">
            <img src={SmallLake} alt="small lake" />
            <span
              className="figurespan"
              onClick={() => toggleDetails("project3")}
            >
              Show details
            </span>
            <div className="overlay overlay--projects"></div>
          </figure>
        ) : (
          detailsVisible.project3 && (
            <div className="tiles">
              <figure className="figure">
                <img src={SmallLake} alt="small lake" />
                <div className="overlay overlay--projects"></div>
              </figure>
              <figcaption className="figcaption">
                <h3 className="heading__tertiary">
                  University Of Texas Webpage
                </h3>
                <p className="paragraph">
                  For this project I took the Texas university at Austins web
                  development pdf course brochure and converted it to a HTML and
                  CSS page. At the time they didn't have a dedicated web page
                  demonstrating the course on their website. The page features
                  some of the course details, ect
                </p>
                <h4 className="heading__quad">skills used</h4>
                <span className="figcaption__span">
                  <FaHtml5 style={{ color: "chocolate" }} />
                  <FaCss3Alt style={{ color: "deepskyblue" }} />
                  <TbBrandJavascript style={{ color: "yellow" }} />
                  <SiSass style={{ color: "hotpink" }} />
                  <FaGitAlt style={{ color: "orangered" }} />
                  <SiNetlify style={{ color: "teal" }} />
                </span>
                <button className="btn">view site</button>
                <button
                  className="btn btn__close"
                  onClick={() => toggleDetails("project3")}
                >
                  hide details
                </button>
              </figcaption>
            </div>
          )
        )}
      </figure>

      <figure>
        {!detailsVisible.project4 ? (
          <figure className="figure">
            <img src={Mountains} alt="mountains" />
            <span
              className="figurespan"
              onClick={() => toggleDetails("project4")}
            >
              Show details
            </span>
            <div className="overlay overlay--projects"></div>
          </figure>
        ) : (
          detailsVisible.project4 && (
            <div className="tiles">
              <figure className="figure">
                <img src={Mountains} alt="nature" />
                <div className="overlay overlay--projects"></div>
              </figure>
              <figcaption className="figcaption">
                <h3 className="heading__tertiary">
                  University Of Texas Webpage
                </h3>
                <p className="paragraph">
                  For this project I took the Texas university at Austins web
                  development pdf course brochure and converted it to a HTML and
                  CSS page. At the time they didn't have a dedicated web page
                  demonstrating the course on their website. The page features
                  some of the course details, ect
                </p>
                <h4 className="heading__quad">skills used</h4>
                <span className="figcaption__span">
                  <FaHtml5 style={{ color: "chocolate" }} />
                  <FaCss3Alt style={{ color: "deepskyblue" }} />
                </span>
                <button className="btn">view site</button>
                <button
                  className="btn btn__close"
                  onClick={() => toggleDetails("project4")}
                >
                  hide details
                </button>
              </figcaption>
            </div>
          )
        )}
      </figure>
    </div>
  );
};

export default Figure;

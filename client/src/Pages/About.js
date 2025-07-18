import React from "react";
import Layout from "../Layout/Layout";
import aboutMainImage from "../Assets/Images/aboutMainImage.png";
import neutrino from "../Assets/Images/AboutImages/neutrino.jpg"
import WiJungle from "../Assets/Images/AboutImages/WiJungle.jpeg"
import safeSecurity from "../Assets/Images/AboutImages/safeSecurity.png"

const About = () => {
  return (
    <Layout>
      <div className="pl-20 pt-10 flex flex-col text-white">
        {/* creating the about page main section */}
        <div className="flex items-center gap-5 mx-10">
          {/* out moto section */}
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Affordable and Quality Education
            </h1>
            <p className="text-xl text-gray-200">
              Our goal is to provide the affordable and quality education to the
              world. We are providing the platform for the aspiring teachers and
              students to share their creativity, skills and knowledge to each
              other to empower and contribute in the growth and wellness of the
              mankind.
            </p>
          </section>

          {/* our moto image section */}
          <div className="w-1/2">
            <img
              id="test1"
              style={{
                filter: "drop-shadow(0px 10px 10px rgb(0, 0, 0))",
              }}
              className="drop-shadow-2xl "
              src={aboutMainImage}
              alt="aboutMainImage"
            />
          </div>
        </div>

        <h1 class="mb-4 mt-20 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
<p class="mb-0 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">The LNMIIT Jaipur has developed a strong footprint in entrepreneurship and yielded several companies serving the nation in terms of job creation and revenue generation.</p>

        {/* top personalities quotes section */}
        <div className="carousel m-auto w-1/2 my-0 pt-0">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              {/* for personality image */}
              <img
                className="w-40 rounded-full border-2 border-gray-400"
                src={safeSecurity}
                alt="Nelson Mandela"
              />
              {/* for writting the quotes */}
              <p className="text-xl text-gray-200">
              Safe Security is a global leader in cybersecurity and digital business risk quantification.
              </p>
              {/* for personality name */}
              <h3 className="text-2xl font-semibold">Saket Modi</h3>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide5" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide2" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              {/* for personality image */}
              <img
                className="w-40 rounded-full border-2 border-gray-400"
                src={neutrino}
                alt="APJ Abdul Kalam"
              />
              {/* for writting the quotes */}
              <p className="text-xl text-gray-200">
              Neutrino Group is an ecosystem of people, businesses, and ideas, bringing together resources and the essentials to power ambitious organizations worldwide.
              </p>
              {/* for personality name */}
              <h3 className="text-2xl font-semibold">Saaurabh Gupta</h3>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide3" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              {/* for personality image */}
              <img
                className="w-40 rounded-full border-2 border-gray-400"
                src={WiJungle}
                alt="einstein"
              />
              {/* for writting the quotes */}
              <p className="text-xl text-gray-200">
              WiJungle is an Indian Cyber Security Company that develops and markets Unified Cyber Security Platform to organizations across 25+ countries worldwide. 
              </p>
              {/* for personality name */}
              <h3 className="text-2xl font-semibold">Karmesh Gupta</h3>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

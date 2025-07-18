import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import OverviewCard from "../Components/OverviewCard";
import ACICTE from "../Assets/Images/homeR&Aimages/ACICTE.png"
import ACU from "../Assets/Images/homeR&Aimages/ACU.png"
import ICAS from "../Assets/Images/homeR&Aimages/ICAS.png"
import IQAS from "../Assets/Images/homeR&Aimages/IQAS.png"
import NAAC from "../Assets/Images/homeR&Aimages/NAAC.png"
import WES from "../Assets/Images/homeR&Aimages/WES.png"
import learnAtyourPace from "../Assets/Images/homeCourseoverviewimages/learnAtyourPace.png"
import enhancedDigitalEducation from "../Assets/Images/homeCourseoverviewimages/enhancedDigitalEducation.png"
import businesseducation from "../Assets/Images/homeCourseoverviewimages/business-education.png"
import experiencedFaculty from "../Assets/Images/homeCourseoverviewimages/experiencedFaculty.jpg"
import lnmiit from "../Assets/Images/lnmiit.png"
import lnmiit2 from "../Assets/Images/lnmiit2.png"
const Homepage = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  



  return (
    <Layout>

      <div className="pt-10 text-white flex items-center justify-center gap-10  h-[90vh]">
      
      <div className="carousel w-full h-screen relative">
  <div id="item1" className="carousel-item w-full h-full relative">
    <img
      src={lnmiit2}
      className="w-full h-full object-cover absolute inset-0 z-0" 
      alt="Background"
    />
     <div className=" z-10 relative p-8 flex flex-col justify-center items-center h-full text-center bg-black bg-opacity-50 w-full">
    <h1 className="mb-4 font-extrabold leading-none tracking-tight text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
  <mark className="px-2 text-white bg-yellow-600 rounded dark:bg-blue-900">LNM</mark>
  <span className="underline underline-offset-3 decoration-8 decoration-yellow-400">EduStream</span>
</h1>
<h1 className="text-lg md:text-xl lg:text-2xl">
  SAME FACULTY <span className="text-xl md:text-3xl lg:text-3xl">|</span> ONLINE BHI
</h1>


    </div>
    
  </div>

  <div id="item2" className="carousel-item w-full h-full relative">
    <img
      src={lnmiit}
      className="w-full h-[100vh] object-cover absolute inset-0 z-0" 
      alt="Background"
    />
    <div className="space-y-6 z-10 relative p-8 flex flex-col justify-center items-center h-full text-center bg-black bg-opacity-50 w-full">
      <h1 className="text-5xl font-semibold text-white">
        Find out the best
        <span className="text-yellow-500 font-bold"> Online Courses</span>
      </h1>
      <p className="text-xl text-gray-200">
        We have a large library of courses taught by highly skilled and qualified faculties at a very affordable cost.
      </p>
      <div className="space-x-6">
        <Link to="/courses">
          <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
            Explore courses
          </button>
        </Link>
        <Link to="/contact">
          <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
   
  </div>
</div>

<div className="flex w-full justify-center gap-2 py-2 absolute bottom-4 left-1/2 transform -translate-x-1/2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
</div>


                {/* <div className="w-1/2 space-y-6">
                    <h1 className="text-5xl font-semibold">
                        Find out best
                        <span className="text-yellow-500 font-bold">
                            Online Courses
                        </span>
                    </h1>
                    <p className="text-xl text-gray-200">
                        We have a large library of courses taught by highly skilled and qualified faculties at a very affordable cost.
                    </p>

                    <div className="space-x-6">
                        <Link to="/courses">
                            <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                Explore courses
                            </button>
                        </Link>

                        <Link to="/contact">
                            <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="w-1/2 flex items-center justify-center">
                    <img alt="homepage image" src={homePageMainImage} />
                </div> */}

            </div>


      {/* Section for accreditation */}
      <section className="w-full pt-20 bg-base-100" id="downShowNav">
        <div className="flex flex-col items-center">
          <h4 className="text-3xl font-bold mb-5">
            Recognised & 
            <span className="text-orange-500"> accredited</span>
          </h4>

          <div className="w-full md:w-3/4">
            <Slider {...settings}>
              <div className="line-items flex items-center justify-center">
                <div className="logo">
                  <img src={NAAC} alt="NAAC A+ Accredited" />
                </div>
                <div className="title text-center">Rajasthan's 1st NAAC A+ Accredited University</div>
              </div>

              <div className="line-items">
                <div className="logo">
                  <img src={ACICTE} alt="AICTE Approved Programs" />
                </div>
                <div className="title text-center">AICTE Approved Programs</div>
              </div>

              <div className="line-items">
                <div className="logo">
                  <img src={WES} alt="Globally Recognized Online Degrees" />
                </div>
                <div className="title text-center">Globally Recognized Online Degrees</div>
              </div>

              {/* <div className="line-items">
                <div className="logo">
                  <img src={ACU} alt="Member of ACU" />
                </div>
                <div className="title text-center">Member of ACU</div>
              </div> */}

              <div className="line-items">
                <div className="logo text-center">
                  <img src={ICAS} alt="International Credential Assessment Service of Canada" />
                </div>
                <div className="title text-center">International Credential Assessment Service of Canada</div>
              </div>

              {/* <div className="line-items">
                <div className="logo">
                  <img src={IQAS} alt="International Qualifications Assessment Service (IQAS)" />
                </div>
                <div className="title text-center">International Qualifications Assessment Service (IQAS)</div>
              </div> */}
            </Slider>
          </div>
        </div>
      </section> 



      {/* Section for course overview */}
       <div className="pt-10">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-4xl font-bold mb-0">Course Overview</h3>
          <p className="text-3xl font-bold mb-5 text-orange-500">Here's what you can expect from our courses</p>
        </div>
        <div className="carousel carousel-center rounded-box max-w-full space-x-4 p-4 pb-10 pt-0">
          
          <OverviewCard image={businesseducation} head="A Business Education for the future" content="We provide quality mentorship and our faculty amplifies the value of real world insights and allows you to create your own path to success with confidence. Our pedagogy introduces real world case studies that will enhance and develop your critical thinking skills." />

          <OverviewCard image={learnAtyourPace} head="Learn at you pace" content="Our courses are designed for you to engage and learn at your own pace. Explore our extensive e-libraries, access your learning material online anytime, anywhere. Attend live/recorded lectures and talks that work for your schedule and engage in discussion on our platforms. All the quality and access are made available to you, even on low bandwidth internet, on an advanced digital platform that can be used on your phone, laptop, or desktop so you can reap the most benefits based on your unique life needs." />
          
          <OverviewCard image={enhancedDigitalEducation} head="Enhanced digital platform" content="Our digital platform is built for a comprehensive learning experience. It allows for immersive learning and easy, responsive accessibility to online pedagogy. Access lessons and class engagement even on low bandwidth Internet. Keep your knowledge on its toes with online quizzes and practise exams. Learn on the go and stay connected to your peers and faculty through discussion forums and more. Our platform is your world of education with 880 hours of e-tutorials, 650+ hours of digital content, 300+ hours of additional learning videos." />

          <OverviewCard image={experiencedFaculty} head="Experienced faculty" content="Our faculty comprises experienced individuals who are experts in their fields. Well over half of our faculty are Ph.D. holders in their respective subjects. They amplify the value of practical insights and allow you to create your own path to success with confidence. Our pedagogy introduces real-world case studies that will enhance and develop your critical thinking skills. Our community of professors will help you articulate yourself professionally in a dynamic world where communication and confidence matters." />
        </div>
      </div> 


      <section className="bg-yellow-600 section-wrapper flex items-center justify-center py-10" id="scholarships">
  <div className="gradientHolder mx-auto px-4 md:px-0">
    <div className="gradientTextHolder">
      <div className="gradientTextDivOne mb-6 md:mb-0 md:mr-6">
        <h3 className="text-white font-extrabold text-2xl md:text-3xl">Easy financing options</h3>
        <p className="text-white">With our no-cost EMIs, we let your learning take the spotlight without the stress of financing.</p>
      </div>
      <div className="gradientTextDivTwo">
        <h3 className="text-white font-extrabold text-2xl md:text-3xl">Get attractive scholarships</h3>
        <p className="text-white">Exclusive scholarships designed for defense personnel, government employees, differently-abled people &amp; meritorious students.</p>
      </div>
    </div>
  </div>
</section>



<section className="section-wrapper bg-primaryBg py-10 px-10" id="certificate">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-0">
    <div className="certificateHolder md:w-1/2 mb-8 md:mb-0">
      <h3 className="section-title text-3xl font-bold mb-4">
        Get a <span className="text-yellow-500">prestigious degree</span>
      </h3>
      <p className="text-white mb-4">
        Globally recognized and widely accepted by governments and organizations, the online degrees offered by The LNM institute of technology,Jaipur are at par with on-campus degrees and open doors to better professional opportunities.
      </p>
    </div>
    <div className="certificate-img md:w-1/2 flex justify-center md:justify-end">
      <img src="https://www.onlinemanipal.com/wp-content/uploads/2022/11/MBa.jpg" alt="Certificate" className="w-full h-auto max-w-xs md:max-w-sm" />
    </div>
  </div>
</section>



    </Layout>
  );
};

export default Homepage;

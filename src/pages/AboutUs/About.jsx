import React, { useEffect, useState, useRef } from "react";
import Skills from "../../component/skills/Skills";
import mypic from "../../assets/mypic.png";
import icon1 from "../../assets/8997977.png";
import gradIcon from "../../assets/black-graduation-cap-tool-of-university-student-for-head.png";
import secicon from "../../assets/2nd-place (1).png";
import grade from "../../assets/best.png";
import laptop from "../../assets/laptop.png";
import efeCerticate from"../../assets/efe.png"
import "./about.css";
import UpComming from "../../component/UpComming.jsx/UpComming";
const About = () => {
  const handleCallClick = () => {
    // Replace '123456789' with the actual phone number you want to call
    const phoneNumber = "01095335270";

    // Create a tel URL and navigate to it
    window.location.href = `tel:${phoneNumber}`;
  };
  const [isAnimated, setIsAnimated] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    const options = {
      root: null,
      threshold: 0.5, // Adjust this value as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsAnimated(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(sectionRef.current);
  
  
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className=" w-full  lg:px-24 lg:py-5  px-12 py-24 bg-[#ECF9FF] lg:h-max ">
      <div
        ref={sectionRef}
        className={`flex flex-col lg:flex-row justify-between gap-2 animate-div ${
          isAnimated ? "start-animation" : ""
        }`}
      >
        <div style={{ perspective: "500px" }}>
          <img src={mypic} className="w-[70px] h-[70px] rotate-y" alt="" />
        </div>
        <h1 className="font-bold pt-5 ">Abdulrahman Mohammed Fahmy</h1>
        <span className="font-semibold pt-5 ">23 Years old</span>
        <span className="font-semibold pt-5 ">Alexandria , Egypt</span>
        <span
          onClick={() => handleCallClick()}
          className="pt-5  font-semibold text-orange-500 animate-pulse cursor-pointer"
        >
          (+20) 01095335270
        </span>
        <div className="flex flex-row gap-4 pt-5 ">
          <a
            href="mailto:Abdulrahman2018170219@cis.asu.edu.eg"
            className="links"
          >
            <svg
              width="24"
              height="24"
              className="links"
              viewBox="0 0 30 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 4V9.891L20.921 11.188C20.971 11.203 21.081 11.205 21.132 11.188L29.4 5.214C29.4 4.507 28.785 4 28.437 4H19Z"
                fill="#060640"
              />
              <path
                d="M18.201 14.314L19.954 15.554C20.201 15.74 20.498 15.554 20.498 15.554C20.202 15.74 28.6 10 28.6 10V20.394C28.6 21.525 27.896 22 27.105 22H18.2L18.201 14.314ZM9.041 11.6C8.417 11.6 7.919 11.894 7.551 12.481C7.184 13.069 7 13.847 7 14.814C7 15.797 7.184 16.573 7.552 17.144C7.919 17.716 8.402 18 8.997 18C9.612 18 10.1 17.722 10.459 17.167C10.819 16.612 11 15.841 11 14.855C11 13.828 10.826 13.028 10.476 12.456C10.126 11.886 9.648 11.6 9.041 11.6Z"
                fill="#060640"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 25.285V3.245L16.8 0V28.8L0 25.285ZM8.464 19.39C9.606 19.39 10.532 18.923 11.242 17.99C11.952 17.058 12.307 15.83 12.306 14.305C12.306 12.822 11.964 11.628 11.279 10.722C10.595 9.815 9.697 9.363 8.589 9.363C7.415 9.363 6.472 9.837 5.759 10.783C5.048 11.73 4.692 12.969 4.692 14.503C4.692 15.953 5.043 17.131 5.743 18.035C6.445 18.938 7.352 19.39 8.464 19.39Z"
                fill="#060640"
              />
            </svg>
          </a>
          <a href="mailto:abdofahmy2019@gmail.com" className="links">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-google"
              viewBox="0 0 16 16"
            >
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
            </svg>
          </a>
        </div>
      </div>
      <div className={`mt-20 py-5 px-5 animate-div  bg-white rounded-lg ${
        isAnimated ? "start-animation" : ""
      }`}>
        <img src={icon1} className="w-24 h-24" alt=""/>
        <h1 className="text-orange-500 font-bold text-x py-2">
          Qualification & Experience
        </h1>
        <div className="flex flex-row gap-2 ">
          <img src={gradIcon} className="w-8 h-8"  alt=""/>
          <h1 className="font-bold text-md text-black">
            Computers and Information, Information Systems Department, Ain Shams
            University.
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col justify-between gap-5 pt-5">
          <div className="flex flex-row gap-2">
            <img src={grade} className="w-8 h-8" alt="" />
            <h1 className="font-bold text-sm">Very Good</h1>
          </div>
          <div className="flex flex-row gap-2">
            <img src={laptop} className="w-8 h-8"  alt=""/>
            <h1 className="font-bold text-sm">Excellent graduation project</h1>
          </div>
          <div className="flex flex-row gap-2">
            <img src={secicon} className="w-8 h-8"  alt=""/>
            <h1 className="font-bold text-sm ">
              Information Systems Department
            </h1>
          </div>
          <div className="flex flex-row gap-2">
          <svg width="24" height="24" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.758523 9V0.272727H6.6392V1.79403H2.60369V3.87358H6.33665V5.39489H2.60369V7.47869H6.65625V9H0.758523ZM9.58913 2.45455L10.7908 4.7429L12.0224 2.45455H13.8846L11.9883 5.72727L13.9357 9H12.082L10.7908 6.73722L9.52095 9H7.64595L9.58913 5.72727L7.71413 2.45455H9.58913ZM16.0238 9.1108C15.7425 9.1108 15.5011 9.01136 15.2994 8.8125C15.1005 8.6108 15.0011 8.36932 15.0011 8.08807C15.0011 7.80966 15.1005 7.57102 15.2994 7.37216C15.5011 7.1733 15.7425 7.07386 16.0238 7.07386C16.2965 7.07386 16.5352 7.1733 16.7397 7.37216C16.9442 7.57102 17.0465 7.80966 17.0465 8.08807C17.0465 8.27557 16.9982 8.44744 16.9016 8.60369C16.8079 8.7571 16.6843 8.88068 16.5309 8.97443C16.3775 9.06534 16.2085 9.1108 16.0238 9.1108Z" fill="#E77839"/>
          </svg>
          
          <h1 className="font-bold text-sm ">
            Fresh , 1 years
          </h1>
        </div>
        </div> 
        <div >  
        <h1 className="font-bold text-md text-orange-500 py-5">
           New Certificates in Web Development
        </h1>
        <img src={efeCerticate} className="w-full lg:h-[400px] px-[20%]" alt=""/>
  
      </div>
      </div>
      <Skills/>
      <UpComming/>

    </div>
  );
};

export default About;

import React, { useEffect, useState, useRef } from "react";
import "./contactus.css"
import landing from "../../assets/2150851338.jpg"
const ContactUs = () => {
  const handleCallClick = () => {
    // Replace '123456789' with the actual phone number you want to call
    const phoneNumber = "01095335270";

    // Create a tel URL and navigate to it
    window.location.href = `tel:${phoneNumber}`;
  };
  const [isAnimated, setIsAnimated] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {   window.scrollTo(0, 0);
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
  const handleAnimation = () => {
    setIsAnimated(true);
  };  
  return (
    <div className=" w-full  lg:px-40 lg:py-5  px-12  pt-[40%]  lg:h-max h-screen  bg-cover bg-no-repeat" style={{backgroundImage:`url(${landing})`}}>
      <div  ref={sectionRef}
      className={`gap-2 animate-div ${
        isAnimated ? "start-animation" : ""
      }`}>
      <h1 className="lg:w-[400px] text-[#060640] font-bold lg:text-3xl text-[20px] animated-text"> I am very honored  </h1>
      <h1 className="lg:w-[400px] text-[#060640] font-bold lg:text-3xl text-[16px] animated-text">to communicate with you.</h1>
      <h1 className="lg:w-[400px] text-orange-500 font-bold lg:text-3xl text-[29px] animated-text">Stay well.</h1> 
      <div className="flex lg:flex-row-reverse flex-col-reverse justify-between  py-[19.9%]">
      <div className="flex flex-row  gap-6 ">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.1938 29.556C24.0306 30.3901 25.1639 30.8584 26.3455 30.8584C27.5271 30.8584 28.6605 30.3901 29.4973 29.556L31.0731 27.9804C31.9099 27.1463 33.0433 26.678 34.2249 26.678C35.4064 26.678 36.5398 27.1463 37.3766 27.9804L40.5284 31.1317C40.9891 31.5174 41.3597 31.9995 41.614 32.544C41.8682 33.0884 42 33.682 42 34.2829C42 34.8838 41.8682 35.4774 41.614 36.0219C41.3597 36.5663 40.9891 37.0484 40.5284 37.4342C32.2753 45.6882 22.775 41.7672 14.4972 33.4906C6.21937 25.214 2.31797 15.7242 10.5733 7.47017C10.9593 7.00981 11.4416 6.63962 11.9861 6.38562C12.5306 6.13163 13.1242 6 13.725 6C14.3259 6 14.9194 6.13163 15.464 6.38562C16.0085 6.63962 16.4907 7.00981 16.8768 7.47017L20.0285 10.6214C20.8633 11.4578 21.3321 12.5911 21.3321 13.7727C21.3321 14.9543 20.8633 16.0876 20.0285 16.924L18.4526 18.4996C17.6179 19.336 17.1491 20.4693 17.1491 21.6509C17.1491 22.8324 17.6179 23.9657 18.4526 24.8021L23.1938 29.556Z" fill="#D03801"/>
      </svg>
      

            <span
      onClick={() => handleCallClick()}
      className="pt-5  font-bold text-[#060640] animate-pulse cursor-pointer"
    >
      (+20) 01095335270
    </span>
      </div>
      <div className="flex flex-row  gap-4 ">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M41.8272 21.3695H24.4068V27.5059H35.476L35.3925 27.7268C34.8801 30.165 33.4928 32.3428 31.4821 33.8655C29.4714 35.3882 26.9702 36.1551 24.4319 36.0273H24.1771C20.9522 35.9266 17.8972 34.5874 15.6722 32.2991C13.4472 30.0107 12.2306 26.9569 12.2855 23.7974C12.3404 20.638 13.6622 17.6264 15.9654 15.4135C18.2686 13.2006 21.3683 11.9639 24.5948 11.9707V11.9707C27.3453 11.9645 29.9986 12.9671 32.032 14.7811L36.6038 10.6166C33.3641 7.67487 29.117 6.02788 24.6992 6H24.3817C19.567 6.02079 14.9511 7.88258 11.5178 11.1885C8.08454 14.4944 6.10553 18.9829 6.00265 23.6973C5.91997 28.4703 7.77662 33.0801 11.1642 36.5125C14.5518 39.9449 19.1928 41.9188 24.0664 42H24.4527C34.7659 42 41.8189 35.0455 41.9964 24.718C42.0154 23.5994 41.9589 22.4808 41.8272 21.3695Z" fill="#D03801"/>
      </svg>
      

            <a href="mailto:abdofahmy2019@gmail.com"
     
      className="pt-5  lg:text-md text-sm font-bold text-[#060640] animate-pulse cursor-pointer"
    >
      Gmail
    </a>
      </div>
      <div className="flex flex-row  gap-4 ">
      <svg width="48" height="48" className='links' viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 4V9.891L20.921 11.188C20.971 11.203 21.081 11.205 21.132 11.188L29.4 5.214C29.4 4.507 28.785 4 28.437 4H19Z" fill="#D03801"/>
      <path d="M18.201 14.314L19.954 15.554C20.201 15.74 20.498 15.554 20.498 15.554C20.202 15.74 28.6 10 28.6 10V20.394C28.6 21.525 27.896 22 27.105 22H18.2L18.201 14.314ZM9.041 11.6C8.417 11.6 7.919 11.894 7.551 12.481C7.184 13.069 7 13.847 7 14.814C7 15.797 7.184 16.573 7.552 17.144C7.919 17.716 8.402 18 8.997 18C9.612 18 10.1 17.722 10.459 17.167C10.819 16.612 11 15.841 11 14.855C11 13.828 10.826 13.028 10.476 12.456C10.126 11.886 9.648 11.6 9.041 11.6Z" fill="#D03801"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 25.285V3.245L16.8 0V28.8L0 25.285ZM8.464 19.39C9.606 19.39 10.532 18.923 11.242 17.99C11.952 17.058 12.307 15.83 12.306 14.305C12.306 12.822 11.964 11.628 11.279 10.722C10.595 9.815 9.697 9.363 8.589 9.363C7.415 9.363 6.472 9.837 5.759 10.783C5.048 11.73 4.692 12.969 4.692 14.503C4.692 15.953 5.043 17.131 5.743 18.035C6.445 18.938 7.352 19.39 8.464 19.39Z" fill="#D03801"/>
      </svg>
            <a

      className="pt-5  font-bold lg:text-md text-sm text-[#060640] animate-pulse cursor-pointer"
      href="mailto:abdulrahman2018170219@cis.asu.edu.eg"
    >
      OutLook
    </a>
      </div>
      </div>
      </div>

    </div>
  )
}

export default ContactUs

import "./App.css";
import { ReactComponent as BarsIcon } from "./Components/Icons/bars-solid.svg";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Goals from "./Components/Goals";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import React, { useState, useRef } from "react";

function App() {
  //dark mode enabler

  const mainRef = useRef(null);
  // const navRef = useRef(null);
  const aboutRef = useRef(null);
  const goalsRef = useRef(null);
  const contactRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);

  // useEffect(() => {
  //   // Access the Main component using mainRef.current
  //   console.log(mainRef.current);
  // }, []);
  // document.childRef.style.backround = 'white';
  //darkMode
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      document.body.classList.remove('LightSeven');
      const x = document.getElementById("moonIconSVG");
      const y = document.getElementById("sunIconSVG");
      x.style.transition = "1s ease";
      // x.style.transitionDelay ='0.8s';
      x.style.transform = "rotate(360deg) scale(0)";
      y.style.transition = "1s ease";
      y.style.transform = "rotate(-360deg) scale(1)";
      y.style.transitionDelay = "0.2s";
      setMode("dark");
      document.body.classList.add('darkOne');
      // document.body.style.backgroundColor = "black";
      // document.body.style.transition = "1s";
      // document.body.style.color = "white";
      // mainRef.current.style.backgroundColor = "black";
      // aboutRef.current.style.backgroundColor = "black";
      // goalsRef.current.style.backgroundColor = "black";
      // aboutRef.current.style.backgroundColor = "black";
      // projectRef.current.style.backgroundColor = "black";
      // skillsRef.current.style.backgroundColor = "black";
      // contactRef.current.style.backgroundColor = "black";

      // showAlert("Dark Mode has been Enabled","success")
    } else {
      document.body.classList.remove('darkOne');
      const x = document.getElementById("moonIconSVG");
      const y = document.getElementById("sunIconSVG");
      x.style.transition = "1s ease";
      x.style.transform = "rotate(0deg) scale(1)";
      x.style.transitionDelay = "0.2s";
      y.style.transition = "1s ease";
      y.style.transform = "rotate(0deg) scale(0)";
      // y.style.transitionDelay ='0.8s';
      setMode("light");
      document.body.classList.add('LightSeven');
      // document.body.style.backgroundColor = "white";
      // document.body.style.transition = "1s";
      // document.body.style.color = "black";
      // document.body.style.background = "black";
      // mainRef.current.style.backgroundColor = "#D7F4FB";
      // aboutRef.current.style.backgroundColor = "white";
      // goalsRef.current.style.backgroundColor = "#edb7ea";
      // aboutRef.current.style.backgroundColor = "white";
      // projectRef.current.style.backgroundColor = "white";
      // skillsRef.current.style.backgroundColor = "white";
      // contactRef.current.style.backgroundColor = "#00696b";
      // showAlert("Light Mode has been Enabled","success")
    }

    //scroll from navbar enabler

    // const sections = document.querySelectorAll("section[id]");
    // const sectionIds = [];

    // const navigator = () => {
    //   let scrollY = window.pageYOffset;

    //   sections.forEach((current) => {
    //     const secHigh = current.offsetHeight;
    //     const secTop = current.offsetTop - 50;
    //     const id = current.getAttribute("id");
    //     sectionIds.push(id);
    //     console.log(sectionIds);

    //     const navItem = document.querySelector(
    //       '.nav_item a[href*="' + id + '"]'
    //     );
    //     // console.log(navItem.classList)

    //     if (scrollY > secTop && scrollY <= secTop + secHigh) {
    //       navItem.classList.add("active-link");
    //       console.log(navItem.classList);
    //     } else {
    //       navItem.classList.remove("active-link");
    //       console.log(navItem.classList);
    //     }
    //   });
    // };
  };

  //color change enabler
  function bgChangeLight() {
    const a = 0.75 * window.innerHeight;
    const win = window.innerHeight ;
    const scrollY = window.scrollY;
  
    document.body.classList.remove(
      'lightOne',
      'lightTwo',
      'lightThree',
      'lightFour',
      'lightFive',
      'lightSix',
      'darkOne',
      'darkTwo',
      'darkThree',
      'darkFour',
      'darkFive',
      'darkSix'
    );
  
    if (mode === 'light') {
      if (scrollY > a && scrollY < (a + win)) {
        document.body.classList.add('lightOne');
      } else if (scrollY > (a + win) && scrollY < (a + 2 * win)) {
        document.body.classList.add('lightTwo');
      } else if (scrollY > (a + 2 * win) && scrollY < (a + 3 * win)) {
        document.body.classList.add('lightThree');
      } else if (scrollY > (a + 3 * win) && scrollY < (a + 4 * win)) {
        document.body.classList.add('lightFour');
      } else if (scrollY > (a + 4 * win) && scrollY < (a + 6 * win)) {
        document.body.classList.add('lightFive');
      } else if (scrollY > (a + 6 * win) && scrollY < (a + 7 * win)) {
        document.body.classList.add('lightSix');
      }
    } else {
      // if (scrollY > a && scrollY < (a + win)) {
      //   document.body.classList.add('darkOne');
      // } else if (scrollY > (a + win) && scrollY < (a + 2 * win)) {
      //   document.body.classList.add('darkTwo');
      // } else if (scrollY > (a + 2 * win) && scrollY < (a + 3 * win)) {
      //   document.body.classList.add('darkThree');
      // } else if (scrollY > (a + 3 * win) && scrollY < (a + 4 * win)) {
      //   document.body.classList.add('darkFour');
      // } else if (scrollY > (a + 4 * win) && scrollY < (a + 5 * win)) {
      //   document.body.classList.add('darkFive');
      // } else if (scrollY > (a + 5 * win) && scrollY < (a + 6 * win)) {
      //   document.body.classList.add('darkSix');
      // }
      document.body.classList.add('darkOne');
    }
  }
  
  window.addEventListener('scroll', bgChangeLight);
  

  return (
    <>
      <div className="nav_toggle" id="nav_toggle">
        <BarsIcon
          className="social_share"
          style={{ width: "1.5em", height: "1.5em" , fill:"white" }}
          />
      </div>
      <Navbar mode={mode} toggleMode={toggleMode} />
      {/* <Breadcrumb/> */}
      <Main ref={mainRef} />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectRef} />
      <Goals ref={goalsRef} /> 
      <Contact ref={contactRef} />
    </>
  );
}

export default App;

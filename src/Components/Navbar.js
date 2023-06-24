//Certificate icon

import React, {   forwardRef  } from "react";
import "./Navbar.css";
// import KevinLove from './Logoimg.jpg'
import { ReactComponent as MoonIcon } from "./Icons/moon-solid.191a6ba3b222f2772e0b9a7a19200067.svg";
import { ReactComponent as SunIcon } from "./Icons/sun-solid.8d2535ddc1a148f23d3b91b293707685.svg";
import { ReactComponent as HomeIcon } from "./Icons/house-chimney-solid.9699c5554c6bcc3adf47d5f3ba0ead53.svg";
import { ReactComponent as AboutIcon } from "./Icons/user-solid.25c7a2c4478e96f8be7eddc9f7c01f5b.svg";
import { ReactComponent as ProjectsIcon } from "./Icons/book-solid.0619316f07ac60184fe211bfcd95cc9e.svg";
import { ReactComponent as ContactIcon } from "./Icons/address-book-solid.3ba9d1a6ef4640fdd2e3f23412100019.svg";
import { ReactComponent as ServicesIcon } from "./Icons/briefcase-solid.ae66dae652e7b28dacfe39586cfe1c43.svg";
import { ReactComponent as ShareIcon } from "./Icons/share-nodes-solid.5040f8169ff7564d7d7ab24f44c81725.svg";
import { ReactComponent as SkillsIcon } from "./Icons/ranking-star-solid.efde4640b3683047e5472b2dd197d109.svg";

//<MoonIcon className='moon' style={{ width: '1em', height: '1em' }}/>

const Navbar = forwardRef ((props,ref) =>  {
  // const [isChecked, setIsChecked] = useState(false);

  // const handleLabelClick = () => {
  //   setIsChecked(!isChecked);
  // };

  // const handleOnclick = (mode) =>{
  //   const x = document.getElementById('moonIconSVG')

  //   // if(mode === "light"){
  //   //   x.style.transition ='1s ease';
  //   //   x.style.transform ='rotate(360deg) scale(0)';
  //   // }
  //   x.style.transition ='1s ease';
  //   x.style.transform ='rotate(360deg) scale(0)';
  // }

  const handleCopy = (event) =>{
    var text1 = "https://shivu-16.github.io/my-portfolio/"
    text1.select()
    navigator.clipboard.writeText(text1.value)
    props.showAlert("Text copied to clipboard ! Paste Anywhere", 'success')
}

  return (
    <>
    <section className="navbar" id="navbar" ref={ref}>
      <div className="sidebar" id="sidebar"  ref={ref}>
        <nav className="nav">
          <div className="navigation nav_menu">
            <div className="menu">
              <ul className="nav_list">
                <li className="list nav_item" >
                  <button style={{marginTop: '5px'}}
                    type="button"
                    className={`btn moon btn-${
                      props.mode === "light" ? "dark" : "light"
                    }`}
                    onClick={props.toggleMode}
                  >
                    <MoonIcon className="moonIcon" id='moonIconSVG'
                                          style={{
                        width: "1.5em",
                        height: "1.5em",
                        marginRight: "25px",
                        marginLeft: "15px",
                        fill:"white",
                      }}
                    />{" "}
                    <SunIcon className="moonIcon" id='sunIconSVG'
                                          style={{
                        width: "1.5em",
                        height: "1.5em",
                        marginRight: "25px",
                        marginLeft: "15px",
                        position:"absolute",
                        // fill:"yellow",
                        fill:"black",
                        transform:"scale(0)",
                      }}
                    />
                    {`Enable ${props.mode === "dark" ? "light" : "dark"} Mode`}
                  </button>
                </li>
                <li className="list nav_item">
                  <a href="#home" className="nav_link active_link">
                    <span className="icon">
                      <HomeIcon style={{ width: "1em", height: "1em" }} />
                    </span>
                    <span className="text"> Home</span>
                    <span className="circle"></span>
                  </a>
                </li>
                <li className="list nav_item">
                  <a href="#about" className="nav_link">
                    <span className="icon">
                      <AboutIcon style={{ width: "1em", height: "1em" }} />
                    </span>
                    <span className="text"> About</span>
                    <span className="circle"></span>
                  </a>
                </li>
                <li className="list nav_item">
                  <a href="#skills" className="nav_link">
                    <span className="icon">
                      <SkillsIcon style={{ width: "1em", height: "1em" }} />
                    </span>
                    <span className="text"> Skills</span>
                    <span className="circle"></span>
                  </a>
                </li>
                <li className="list nav_item">
                  <a href="#projects" className="nav_link">
                    <span className="icon">
                      <ProjectsIcon style={{ width: "1em", height: "1em" }} />
                    </span>
                    <span className="text">Project</span>
                    <span className="circle"></span>
                  </a>
                </li>
                <li className="list nav_item">
                  <a href="#Goals" className="nav_link">
                    <span className="icon">
                      <ServicesIcon style={{ width: "1em", height: "1em" }} />
                    </span>
                    <span className="text">Certificates</span>
                    <span className="circle"></span>
                  </a>
                </li>
                <li className="list nav_item">
                  <a href="#contacts" className="nav_link">
                    <span className="icon">
                      <ContactIcon style={{ width: "1em", height: "1em" }} />
                    </span>
                    <span className="text"> Contact</span>
                    <span className="circle"></span>
                  </a>
                </li>

                {/* <div className='indicator'></div> */}
              </ul>
            </div>
          </div>
          <div className="btn_share">
            <ShareIcon
              className="social_share"
              style={{ width: "1.5em", height: "1.5em" }}
              onClick={handleCopy}
            />
          </div>
        </nav>
      </div>
    </section>
    </>
  );
});

export default Navbar;

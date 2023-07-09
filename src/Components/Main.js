//dont forget to put social media links
import React, { forwardRef , useEffect } from "react";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import "./Main.css";
import myImage from './Icons/Untitled design (14).3e5b8396bf4f23108bb9.png'
import { ReactComponent as LinkedInIcon } from "./Icons/linkedin.93683c2cc3d5ca884dcf6c3525104a48.svg";
import { ReactComponent as TwitterIcon } from "./Icons/twitter.0407223bb7bca83e1349f743cc8849a2.svg";
import { ReactComponent as InstagramIcon } from "./Icons/instagram.116ad97e1f8e0638fcb7d5aed6800697.svg";
import { ReactComponent as AboutIcon } from "./Icons/user-solid.25c7a2c4478e96f8be7eddc9f7c01f5b.svg";
import { ReactComponent as FBIcon } from "./Icons/square-facebook.e4d1358060c01a3e706738bb8983b000.svg";
import { ReactComponent as WhatsAppIcon } from "./Icons/whatsapp.83f494119e2a84b5a3e00aa411c0a25e.svg";
import { ReactComponent as GmailIcon } from "./Icons/envelope-solid.6345f82ededa4dc800949734956dc764.svg";
// import { getValue } from "@testing-library/user-event/dist/utils";

const Main = forwardRef((props, ref) => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);


  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/shivam-sharma-04996324a",
      "_blank"
    );
  };

  const handleTwitterClick = () => {
    window.open("https://twitter.com/SHIVAMS56622084", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/_shivam_s.16/", "_blank");
  };

  const handleGmailClick = () => {
    window.open("mailto:shivam.sharma.ug21@nsut.ac.in", "_blank");
  };

  const handleWhatsappClick = () => {
    window.open("https://wa.me/+917357622773", "_blank");
  };

  const handleFBClick = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=100025306847662",
      "_blank"
    );
  };

  useEffect(() => {
    const bgImg = document.getElementById("parallaxOne");
    const cnt = document.getElementById("parallaxTwo");
    window.addEventListener('scroll', () => {
      let val = window.scrollY;
      bgImg.style.transform = `translateX(${val}px)`;
      cnt.style.transform = `translateX(-${val}px)`;
    });
  }, []);

  // const bg_img = require('../Icons/bg_img.png')
  return (
    <>
      <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                // background: {
                //     color: {
                //         value: "#0d47a1",
                //     },
                // },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "black",
                    },
                    links: {
                        color: "black",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
      <img className='BG_img parallax' src={myImage} id="parallaxOne" alt='none' style={{height:'740px', width:'740px', position:"block",float:'right'}}></img>
      <main className="main" ref={ref}>
        <section className="home section" id="home">
          <div className="home_container container grid" id="parallaxTwo">
            <div className="home_social">
              <span className="home_social-follow">Reach me</span>
              <div className="home_social-links">
                <LinkedInIcon
                  style={{ width: "1.5em", height: "1.5em", cursor: "pointer" }}
                  className="home_social-link"
                  onClick={handleLinkedInClick}
                />
                <TwitterIcon
                  style={{ width: "1.5em", height: "1.5em", cursor: "pointer" }}
                  className="home_social-link"
                  onClick={handleTwitterClick}
                />
                <InstagramIcon
                  style={{ width: "1.5em", height: "1.5em", cursor: "pointer" }}
                  className="home_social-link"
                  onClick={handleInstagramClick}
                />
              </div>
            </div>
            {/* <img src={require('./image-removebg-preview (1).png')} alt='none' className='home_img'></img> */}
            <div className="home_data">
              <h1 className="home_title"> Hi , I'm Shivam </h1>
              <h3 className="home_subtitle"> I am Frontend Developer </h3>
              <p className="home_description">
                {" "}
                Constantly learning and moving towards my Goal !!!
              </p>
              <a href="#about" className="button">
                <AboutIcon
                  style={{ width: "1em", height: "1em" }}
                  className="Btn About"
                />
                More About Me
              </a>
            </div>
            <div className="my_info" >
              <div className="info_item" onClick={handleFBClick}>
                <FBIcon
                  className="info_icon Facebook"
                  style={{ width: "1.5em", height: "1.5em" }}
                  onClick={handleFBClick}
                />
                <div>
                  <h3 className="info_title">Facebook</h3>
                  <span className="info_subtitle">Shivu Sharma</span>
                </div>
              </div>
              <div className="info_item" onClick={handleWhatsappClick}>
                <WhatsAppIcon
                  className="info_icon Whatsapp"
                  style={{ width: "1.5em", height: "1.5em" }}
                  onClick={handleWhatsappClick}
                />
                <div>
                  <h3 className="info_title">Whatsapp</h3>
                  <span className="info_subtitle">+91 7357 622 773</span>
                </div>
              </div>
              <div className="info_item" onClick={handleGmailClick}>
                <GmailIcon
                  className="info_icon Email"
                  style={{ width: "1.5em", height: "1.5em" }}
                  onClick={handleGmailClick}
                />
                <div>
                  <h3 className="info_title">Email ID</h3>
                  <span className="info_subtitle">
                    shivam.sharma.ug21@nsut.ac.in
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
});

export default Main;

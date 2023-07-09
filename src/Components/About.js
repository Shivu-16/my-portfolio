//first about icon to award/medal icon
//2nd suitcase
//3rd headphones
//link to CV


import React, { forwardRef } from 'react'
import './About.css'
import { ReactComponent as AboutIcon } from './Icons/user-solid.25c7a2c4478e96f8be7eddc9f7c01f5b.svg';
import myPdf from './Icons/Shivam2CV.pdf'
import './Icons/Shivam2.8420910fa8b4774001e4.png'
import myImage from './Icons/Untitled design (14).3e5b8396bf4f23108bb9.png'



const About = forwardRef ((props,ref) =>  {
  return (
    <>
    <section className='about section' id='about' ref={ref} >
        <h2 data-heading="My Intro" className='section_title'>About</h2>
        <div className='about_container container grid'>
            <img src={myImage} alt='' className='about_img'/>
            <div className="about_data">
                <h3 className='about_heading'> Hi, I'm Shivam Sharma, Based in India </h3>
                <p className='about_description'>Web developer, with extensive knowledge and years of experience, working in web technologies and UI/UX design, delivering Quality Work  </p>
                <div className='about_info'>
                    <div className='about_box'>
                        <AboutIcon className='about_icon' style={{ width: '1.2em', height: '1.2em' }}/>
                        <h3 className='about_title'>Experience</h3>
                        <span className='about_subtiitle'>2 + years</span>
                    </div>
                    <div className='about_box'>
                        <AboutIcon className='about_icon' style={{ width: '1.2em', height: '1.2em' }}/>
                        <h3 className='about_title'>Completed</h3>
                        <span className='about_subtiitle'>6 + projects</span>
                    </div>
                    <div className='about_box'>
                        <AboutIcon className='about_icon' style={{ width: '1.2em', height: '1.2em' }}/>
                        <h3 className='about_title'>Support</h3>
                        <span className='about_subtiitle'>Ready to work</span>
                    </div>
                </div>
                <a href={myPdf} className="button">
                <AboutIcon
                  style={{ width: "1em", height: "1em" }}
                  className="Btn About"
                />
                My Curriculum-Vitae
              </a>
            </div>
        </div>
    </section>

    <section className='qualification section'>
        <h2 data-heading="My Journey" className='section_title qual_title'>Qualification</h2>
        <div className='qualification_container container grid'>
            <div className='education'>
                <h3 className='qualification_title'>
                    {/* graduation icon */}
                    Education
                </h3>

                <div className='timeline'>
                    <div className='timeline_items'>
                        <div className='circle_dot'></div>
                        <h3 className='timeline_title'>KV No.1 (Suratgarh,Rajasthan)</h3>
                        <p className='timeline_text'>Secondary schooling</p>
                        <span className='timeline_data'>
                            <i className='calender_alt'></i>
                            2015-2019
                        </span>
                    </div>
                </div>
                <div className='timeline'>
                    <div className='timeline_items'>
                        <div className='circle_dot'></div>
                        <h3 className='timeline_title'>KV sec.8 (RK Puram, New Delhi)</h3>
                        <p className='timeline_text'>Senior Secondary Schooling</p>
                        <span className='timeline_data'>
                            <i className='calender_alt'></i>
                            2019-2021
                        </span>
                    </div>
                </div>
                <div className='timeline'>
                    <div className='timeline_items'>
                        <div className='circle_dot'></div>
                        <h3 className='timeline_title'>Netaji Subhas University of Technology(Dwarka, New Delhi)</h3>
                        <p className='timeline_text'> Undergradution</p>
                        <span className='timeline_data'>
                            <i className='calender_alt'></i>
                            2021-present
                        </span>
                    </div>
                </div>
            </div>
            <div className='experience'>
                <h3 className='qualification_title'>
                    {/* graduation icon */}
                    Experience
                </h3>

                <div className='timeline'>
                    <div className='timeline_items'>
                        <div className='circle_dot'></div>
                        <h3 className='timeline_title'> Gravi Digitals </h3>
                        <p className='timeline_text'> React Intern </p>
                        <span className='timeline_data'>
                            <i className='calender_alt'></i>
                            9 Jan 2023 - 10 April 2023
                        </span>
                    </div>
                </div>
            </div>
        
        </div>
    </section>
    </>
  )
});

export default About;
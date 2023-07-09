import React, { forwardRef } from 'react'
import './Projects.css';
import { ReactComponent as ArrowIcon } from './Icons/chevron-down-solid.fd5f90d259cad6aba6e19ae5618fdb72.svg';
import shivifyImage from './Icons/Screenshot 2023-06-24 213546.png'
import sheaterImage from './Icons/Screenshot 2023-06-24 214030.png'
import tectUtilesImage from './Icons/Screenshot 2023-06-24 223002.png'
import hireyCoonImage from './Icons/Screenshot 2023-07-09 232741.png'
import listImage from './Icons/Screenshot 2023-07-10 003343.png'


const Projects = forwardRef ((props,ref) => {
    
    const handleOnClick = (event) => {
        const elementId = event.target.id;
        const skillsContent = document.querySelector('.projects_container');
        const childElements = skillsContent.children;
      
        for (let i = 0; i < childElements.length; i++) {
          const childElement = childElements[i];
          childElement.classList.remove('active_work');
      
          const classList = childElement.classList;
          for (let j = 0; j < classList.length; j++) {
            const className = classList[j];
            if (className === elementId) {
              childElement.classList.add('active_work');
            }
          }
        }
      
        const spans = document.querySelectorAll('.projects_filters span');
        spans.forEach((span) => {
            span.classList.remove('active_work');
            if (span.id === elementId) {
            span.classList.add('active_work');
            }
        });
      };
      

  return (
    <>
    <section className='projects section' id='projects'  ref={ref} data-color="Green">
        <h2 className='section_title' data-heading='Projects' > My Works</h2>
        <div className='projects_filters'>
            <span className='projects_items active_work' id='all' onClick={handleOnClick}> All </span>
            <span className='projects_items' id='simple_frontends'onClick={handleOnClick}> Simple Frontends </span>
            <span className='projects_items' id='react_projects' onClick={handleOnClick}> React Projects </span>
            <span className='projects_items' id='mern_projects' onClick={handleOnClick}> MERN Projects </span>
        </div>
        <div className='projects_container'>

            <div className='projects_card all simple_frontends active_work' >
                <h3 className='projects_title'> Shivify - Music App</h3>
                <img className='projects_img' src={shivifyImage} alt='project 1' style={{height:'250px', width:'350px'}}></img>
                <span className='projects_button'><a href='https://shivifymusicapp.netlify.app/'> Demo </a><ArrowIcon className='arrow_icon' style={{height : '0.8rem' , width : '0.8rem' , transform:'rotate(270deg)'}}/> </span>
                <div className='projects_details'>
                    <h3 className='details_title'>Shivify - Diljit </h3>
                    <p className='details_description'> This is site where you can listen to Diljit Dosanjh's Top songs</p>
                    <ul className='details_info'>
                        <li>Created - <span> 24 October 2022 </span></li>
                        <li>Technologies - <span> HTML,CSS & JS </span></li>
                        <li>Deployed - <span> https://www.netlify.com/</span></li>
                        <li>View - <span><a href='https://shivifymusicapp.netlify.app/'> https://shivifymusicapp.netlify.app/ </a></span></li>
                    </ul>
                </div>
            </div>

            <div className='projects_card all simple_frontends active_work'>
                <h3 className='projects_title'> Sheather - Weather App</h3>
                <img className='projects_img' src={sheaterImage} alt='project 2' style={{height:'250px', width:'350px'}}></img>
                <span className='projects_button'><a href='https://sheather5.netlify.app/'> Demo </a><ArrowIcon className='arrow_icon' style={{height : '0.8rem' , width : '0.8rem' , transform:'rotate(270deg)'}}/></span>
                <div className='projects_details'>
                    <h3 className='details_title'>Shivify - Diljit </h3>
                    <p className='details_description'> This is site where you can listen to Diljit Dosanjh's Top songs</p>
                    <ul className='details_info'>
                        <li>Created - <span> January 15th, 2023 </span></li>
                        <li>Technologies - <span> HTML,CSS & JS </span></li>
                        <li>Deployed - <span> https://www.netlify.com/</span></li>
                        <li>View - <span><a href='https://sheather5.netlify.app/'> https://sheather5.netlify.app// </a></span></li>
                    </ul>
                </div>
            </div>

            <div className='projects_card all react_projects active_work'>
                <h3 className='projects_title'> TextUtiles - Utility app </h3>
                <img className='projects_img' src={tectUtilesImage} alt='project 3' style={{height:'250px', width:'350px'}}></img>
                <span className='projects_button'> <a href='https://shivu-16.github.io/TextUtils/'> Demo </a> <ArrowIcon className='arrow_icon' style={{height : '0.8rem' , width : '0.8rem' , transform:'rotate(270deg)'}}/> </span>
                <div className='projects_details'>
                    <h3 className='details_title'> TextUtiles - Text Editor </h3>
                    <p className='details_description'> This is site where you can play with text</p>
                    <ul className='details_info'>
                        <li>Created - <span> May 28th, 2023 </span></li>
                        <li>Technologies - <span> React </span></li>
                        <li>Deployed - <span> https://shivu-16.github.io/</span></li>
                        <li>View-<span><a href='https://shivu-16.github.io/TextUtils/'>https://shivu-16.github.io/TextUtils/</a></span></li>
                    </ul>
                </div>
            </div>

            <div className='projects_card all react_projects active_work'>
                <h3 className='projects_title'> To Do list - Deluxe </h3>
                <img className='projects_img' src={listImage} alt='project 3' style={{height:'250px', width:'350px'}}></img>
                <span className='projects_button'> <a href='https://shivu-16.github.io/assignment-2/'> Demo </a> <ArrowIcon className='arrow_icon' style={{height : '0.8rem' , width : '0.8rem' , transform:'rotate(270deg)'}}/> </span>
                <div className='projects_details'>
                    <h3 className='details_title'> TextUtiles - Text Editor </h3>
                    <p className='details_description'> This is site where you can play with text</p>
                    <ul className='details_info'>
                        <li>Created - <span> May 28th, 2023 </span></li>
                        <li>Technologies - <span> React </span></li>
                        <li>Deployed - <span> https://shivu-16.github.io/</span></li>
                        <li>View-<span><a href='https://shivu-16.github.io/assignment-2/'>https://shivu-16.github.io/assignment-2/</a></span></li>
                    </ul>
                </div>
            </div>

            <div className='projects_card all react_projects active_work'>
                <h3 className='projects_title'> HireyCoon </h3>
                <img className='projects_img' src={hireyCoonImage} alt='project 3' style={{height:'250px', width:'350px'}}></img>
                <span className='projects_button'> <a href='https://shivu-16.github.io/hireyCoon/'> Demo </a> <ArrowIcon className='arrow_icon' style={{height : '0.8rem' , width : '0.8rem' , transform:'rotate(270deg)'}}/> </span>
                <div className='projects_details'>
                    <h3 className='details_title'> TextUtiles - Text Editor </h3>
                    <p className='details_description'> This is site where you can play with text</p>
                    <ul className='details_info'>
                        <li>Created - <span> May 28th, 2023 </span></li>
                        <li>Technologies - <span> React </span></li>
                        <li>Deployed - <span> https://shivu-16.github.io/</span></li>
                        <li>View-<span><a href='https://shivu-16.github.io/hireyCoon/'>https://shivu-16.github.io/hireyCoon/</a></span></li>
                    </ul>
                </div>
            </div>

            <div className='projects_card mern_projects'> Upcoming</div>

        </div>
    </section>
    </>
  )
});

export default Projects;
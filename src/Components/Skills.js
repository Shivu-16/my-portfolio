//skill icon
//skill changing function 1:20

import React, { forwardRef } from 'react'
import './Skills.css';
import { ReactComponent as ArrowIcon } from './Icons/chevron-down-solid.fd5f90d259cad6aba6e19ae5618fdb72.svg';
import { ReactComponent as FrontendIcon } from './Icons/icons8-frontend-96.3603c73525995384db80da5a0f5c0520.svg';
import { ReactComponent as HTMLIcon } from './Icons/icons8-html.c1bb84e022ca9d76984d4b943bd678fd.svg';


const Skills = forwardRef ((props,ref) => {

  const handleOnClick = (event) => {
    const elementId = event.target.id;
    const skillsContent = document.querySelector('.skills_content');
    const childElements = skillsContent.children;
  
    for (let i = 0; i < childElements.length; i++) {
      const childElement = childElements[i];
      childElement.classList.remove('skills_active');
  
      if (childElement.id === elementId) {
        childElement.classList.add('skills_active');
      }
    }
    const skillContent = document.querySelector('.skills_tabs');
    const chilElements = skillContent.children;
  
    for (let i = 0; i < chilElements.length; i++) {
      const chilElement = chilElements[i];
      chilElement.classList.remove('skills_active');

      if (chilElement.id === elementId) {
        chilElement.classList.add('skills_active');
      }
    }

  };


  return (
    <>
    <section className='skills section' id='skills' ref={ref}>
      <h2 data-heading='My Abilities' className='section_title'>
        Skills And More
      </h2>
      <div className='skills_container container grid'>
        <div className='skills_tabs'>

          <div className='skills_header skills_active' id='frontend' onClick={handleOnClick}>
            <FrontendIcon className='front_icon'id='frontend' style={{height : '3rem' , width : '3rem'}} />
            <div id='frontend'>
              <h1 className='skills_title' id='frontend' >Frontend Developer</h1>
              <span className='skills_subtitle' id='frontend'>More than 2 years</span>
            </div >
            <ArrowIcon className='arrow_icon' style={{height : '1rem' , width : '1rem'}} id='frontend'/>
          </div>

          <div className='skills_header' id='programming' onClick={handleOnClick} >
            <FrontendIcon className='front_icon' id='programming' style={{height : '3rem' , width : '3rem'}} />
            <div>
              <h1 className='skills_title' id='programming'>Other Programming Languages</h1>
              <span className='skills_subtitle' id='programming'>More than 2 years</span>
            </div>
            <ArrowIcon className='arrow_icon' id='programming' style={{height : '1rem' , width : '1rem'}}/>
          </div>

          <div className='skills_header' id='sports' onClick={handleOnClick} >
            <FrontendIcon className='front_icon'id='sports' style={{height : '3rem' , width : '3rem'}} />
            <div>
              <h1 className='skills_title' id='sports'>Extra-Curricular Skills</h1>
              <span className='skills_subtitle' id='sports'>Sports and more</span>
            </div>
            <ArrowIcon className='arrow_icon' id='sports' style={{height : '1rem' , width : '1rem'}}/>
          </div>

          <div className='skills_header' id='wonder' onClick={handleOnClick} >
            <FrontendIcon className='front_icon' id='wonder' style={{height : '3rem' , width : '3rem'}} />
            <div>
              <h1 className='skills_title' id='wonder'>WonderLust</h1>
              <span className='skills_subtitle' id='wonder'>Places Explored</span>
            </div>
            <ArrowIcon className='arrow_icon' id='wonder' style={{height : '1rem' , width : '1rem'}}/>
          </div>
        </div>

        <div className='skills_content'>

          <div className='skills_group skills_active' data-content id='frontend'>
            <div className='skills_list grid'>

              <div className='skills_data'>
                <div className='skills_title'>
                  <HTMLIcon className='skills_icon' style={{height : '2rem' , width : '2rem'}}/>
                  <h3 className='skills_name'>HTML</h3>
                  <span className='skills_number'>90%</span>
                </div>
                <div className='skills_bar'>
                  <span className='skills_percentage' style={{width : '90%'}} ></span>
                </div>
              </div>

              <div className='skills_data'>
                <div className='skills_title'>
                  <HTMLIcon className='skills_icon' style={{height : '2rem' , width : '2rem'}}/>
                  <h3 className='skills_name'>CSS</h3>
                  <span className='skills_number'>60%</span>
                </div>
                <div className='skills_bar'>
                  <span className='skills_percentage' style={{width : '60%'}}></span>
                </div>
              </div>

              <div className='skills_data'>
                <div className='skills_title'>
                  <HTMLIcon className='skills_icon' style={{height : '2rem' , width : '2rem'}}/>
                  <h3 className='skills_name'>JS</h3>
                  <span className='skills_number'>80%</span>
                </div>
                <div className='skills_bar'>
                  <span className='skills_percentage' style={{width : '80%'}}></span>
                </div>
              </div>

              <div className='skills_data'>
                <div className='skills_title'>
                  <HTMLIcon className='skills_icon' style={{height : '2rem' , width : '2rem'}}/>
                  <h3 className='skills_name'>React</h3>
                  <span className='skills_number'>75%</span>
                </div>
                <div className='skills_bar'>
                  <span className='skills_percentage' style={{width : '75%'}}></span>
                </div>
              </div>
            </div>
          </div>
          
          <div className='skills_group' data-content id='programming'>
            <div className='skills_list grid'>
              <div className='skills_data'>
                <div className='skills_title'>
                  <HTMLIcon className='skills_icon' style={{height : '2rem' , width : '2rem'}}/>
                  <h3 className='skills_name'>Python</h3>
                  <span className='skills_number'>30%</span>
                </div>
                <div className='skills_bar'>
                  <span className='skills_percentage' style={{width : '30%'}}></span>
                </div>
              </div>

              <div className='skills_data'>
                <div className='skills_title'>
                  <HTMLIcon className='skills_icon' style={{height : '2rem' , width : '2rem'}}/>
                  <h3 className='skills_name'>C++</h3>
                  <span className='skills_number'>50%</span>
                </div>
                <div className='skills_bar'>
                  <span className='skills_percentage' style={{width : '40%'}}></span>
                </div>
              </div>

              <div className='skills_data'>
                <div className='skills_title'>
                  <HTMLIcon className='skills_icon' style={{height : '2rem' , width : '2rem'}}/>
                  <h3 className='skills_name'>C</h3>
                  <span className='skills_number'>25%</span>
                </div>
                <div className='skills_bar'>
                  <span className='skills_percentage' style={{width : '25%'}}></span>
                </div>
              </div>

              <div className='skills_data'>
                <div className='skills_title'>
                  <HTMLIcon className='skills_icon' style={{height : '2rem' , width : '2rem'}}/>
                  <h3 className='skills_name'>MySQL</h3>
                  <span className='skills_number'>75%</span>
                </div>
                <div className='skilsl_bar'>
                  <span className='skills_percentage' style={{width : '75%'}}></span>
                </div>
              </div>

            </div>
          </div>
          

          <div className='skills_group' data-content id='sports'>
            <div className='skills_list grid'>

              <div className='skills_data'>
                <div className='skills_title'>
                  <HTMLIcon className='skills_icon' style={{height : '2rem' , width : '2rem'}}/>
                  <h3 className='skills_name'>BasketBall</h3>
                  <span className='skills_number'></span>
                </div>
                <div className='skills_bar'>
                  College BasketBall Team Member
                </div>
              </div>

              <div className='skills_data'>
                <div className='skills_title'>
                  <HTMLIcon className='skills_icon' style={{height : '2rem' , width : '2rem'}}/>
                  <h3 className='skills_name'>Chess</h3>
                  <span className='skills_number'></span>
                </div>
                <div className='skills_bar'>
                  Chess.com highest rating 1208
                </div>
              </div>

              <div className='skills_data'>
                <div className='skills_title'>
                  <HTMLIcon className='skills_icon' style={{height : '2rem' , width : '2rem'}}/>
                  <h3 className='skills_name'>Badminton</h3>
                  <span className='skills_number'></span>
                </div>
                <div className='skills_bar'>
                  Intermediate
                </div>
              </div>

              <div className='skills_data'>
                <div className='skills_title'>
                  <HTMLIcon className='skills_icon' style={{height : '2rem' , width : '2rem'}}/>
                  <h3 className='skills_name'>Harmonium</h3>
                  <span className='skills_number'></span>
                </div>
                <div className='skills_bar'>
                  School's Best Instrumentalist award 2017
                </div>
              </div>
              
              <div className='skills_data'>
                <div className='skills_title'>
                  <HTMLIcon className='skills_icon' style={{height : '2rem' , width : '2rem'}}/>
                  <h3 className='skills_name'>Drum Set</h3>
                  <span className='skills_number'></span>
                </div>
                <div className='skills_bar'>
                  School's Best Instrumentalist award 2017
                </div>
              </div>

            </div>
          </div>
          
          <div className='skills_group' data-content id='wonder'>
            <div className='skills_list grid'>

              <div className='skills_data'>
                <div className='skills_title'>
                  <HTMLIcon className='skills_icon' style={{height : '2rem' , width : '2rem'}}/>
                  <h3 className='skills_name'>Gujarat</h3>
                  <span className='skills_number'></span>
                </div>
                <div className='skills_bar'>
                  ChildHood
                </div>
              </div>

              <div className='skills_data'>
                <div className='skills_title'>
                  <HTMLIcon className='skills_icon' style={{height : '2rem' , width : '2rem'}}/>
                  <h3 className='skills_name'>Chennai,TN</h3>
                  <span className='skills_number'></span>
                </div>
                <div className='skills_bar'>
                  Year 2011 - 2015
                </div>
              </div>

              <div className='skills_data'>
                <div className='skills_title'>
                  <HTMLIcon className='skills_icon' style={{height : '2rem' , width : '2rem'}}/>
                  <h3 className='skills_name'>SuratGarh,RJ</h3>
                  <span className='skills_number'></span>
                </div>
                <div className='skills_bar'>
                  2015-2017
                </div>
              </div>

              <div className='skills_data'>
                <div className='skills_title'>
                  <HTMLIcon className='skills_icon' style={{height : '2rem' , width : '2rem'}}/>
                  <h3 className='skills_name'>Shimla,HP</h3>
                  <span className='skills_number'></span>
                </div>
                <div className='skills_bar'>
                  November 2017
                </div>
              </div>
              
              <div className='skills_data'>
                <div className='skills_title'>
                  <HTMLIcon className='skills_icon' style={{height : '2rem' , width : '2rem'}}/>
                  <h3 className='skills_name'>Udaipur,RJ</h3>
                  <span className='skills_number'></span>
                </div>
                <div className='skills_bar'>
                  August 2022
                </div>
              </div>


            </div>
          </div>

        </div>
        
      </div>
    </section>
    </>
  )
});

export default Skills;
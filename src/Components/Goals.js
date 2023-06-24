import React, { forwardRef } from 'react'
import './Goals.css'
import imgOne from './Icons/javascript_basic certificate.jpg'
import imgTwo from './Icons/javascript_intermediate certificate.jpg'
import imgThree from './Icons/react_basic certificate.jpg'
import imgFour from './Icons/python_basic certificate (1).jpg'
import imgFive from './Icons/problem_solving_basic certificate.jpg'
import imgSix from './Icons/problem_solving_intermediate certificate.jpg'

const Goals = forwardRef ((props,ref) =>  {
  return (
    <>
    <section className='Goals section' id='Goals' ref={ref} >
        <h2 className='section_title' data-heading="HackerRank">My  certificates</h2>

        <div className='wrapper'>
          <div className='slider'>
            <div className='slide-track'>

              <div className='slide'>
                <a href='https://www.hackerrank.com/certificates/98f10c2b623c'>
                    <img src={imgOne} alt='none'/>
                  </a>
              </div>
              <div className='slide'>
                <a href='https://www.hackerrank.com/certificates/97e41b53e846'>
                  <img src={imgTwo} alt='none'/>
                </a>
              </div>
              <div className='slide'>
                <a href='https://www.hackerrank.com/certificates/c5e11fdf8ed2'>
                  <img src={imgThree} alt='none'/>
                </a>
              </div>
              <div className='slide'>
                <a href='https://www.hackerrank.com/certificates/2edf8dd29bba'>
                  <img src={imgFour} alt='none'/>
                </a>
              </div>
              <div className='slide'>
                <a href='https://www.hackerrank.com/certificates/95a213835cef'>
                  <img src={imgFive} alt='none'/>
                </a>
              </div>
              <div className='slide'>
                <a href='https://www.hackerrank.com/certificates/fdef29a252d0'>
                  <img src={imgSix} alt='none'/>
                </a>
              </div>
              

            </div>
          </div>
        </div>
    </section>
    </>
  )
});

export default Goals;
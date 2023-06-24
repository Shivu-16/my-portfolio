import React, { forwardRef ,useState } from 'react'
import './Contact.css'
import { ReactComponent as GmailIcon } from './Icons/envelope-solid.6345f82ededa4dc800949734956dc764.svg';
import { ReactComponent as ArrowIcon } from './Icons/chevron-down-solid.fd5f90d259cad6aba6e19ae5618fdb72.svg';
import { ReactComponent as InstagramIcon } from './Icons/instagram.116ad97e1f8e0638fcb7d5aed6800697.svg';
import { ReactComponent as WhatsAppIcon } from './Icons/whatsapp.83f494119e2a84b5a3e00aa411c0a25e.svg';
import { ReactComponent as SendIcon } from "./Icons/navigation-svgrepo-com.svg";

const Contact = forwardRef ((props,ref) => {
     
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/_shivam_s.16/', '_blank');
  };

  const handleGmailClick = () => {
    window.open('mailto:shivam.sharma.ug21@nsut.ac.in', '_blank');
  };

  const handleWhatsappClick = () => {
    window.open('https://wa.me/+917357622773', '_blank');
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleMailClick = () => {
    const toEmail = 'shivam.sharma.ug21@nsut.ac.in';
    const subject = 'Contact Form Submission';
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const mailtoLink = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };


  const inputs = document.querySelectorAll(".input");
  function focusFunc (){
    let parent = this.parentNode;
    parent.classList.add("focus")
  }

  function blankFunc(){
    let parent = this.parentNode;
    if(this.value === ""){
      parent.classList.remove("focus")
    }
  }

  inputs.forEach((input)=>{
    input.addEventListener("focus",focusFunc)
    input.addEventListener("blur",blankFunc)
  })

  return (
    <>
    <section className='Contacts section' id='contacts' ref={ref} >
        <h2 className='section_title' data-heading='Contacts'> Get In Touch </h2>

        <div className='contact_container container grid'>
          <div className='contact_content'>
            <div className='contact_info'>
              <div className='contact_card' onClick={handleGmailClick}>
                <GmailIcon className='contact_card-icon Email' style={{ width: '1.5em', height: '1.5em' }} />
                <h3 className='contact_card-title'>Email ID</h3>
                <span className='contact_card-data'>shivam.sharma.ug21@nsut.ac.in</span>
                <span className='contact_button'>
                  Write me <ArrowIcon className='arrow_icon' style={{height : '1rem' , width : '1rem'}}/>
                </span>
              </div>

              <div className='contact_card' onClick={handleWhatsappClick}>
                <WhatsAppIcon className='contact_card-icon Email' style={{ width: '1.5em', height: '1.5em' , fill :'green' }} />
                <h3 className='contact_card-title'>Whatsapp</h3>
                <span className='contact_card-data'>+91 7357 622 773</span>
                <span className='contact_button'>
                  Write me <ArrowIcon className='arrow_icon' style={{height : '1rem' , width : '1rem'}}/>
                </span>
              </div>

              <div className='contact_card' onClick={handleInstagramClick}>
                <InstagramIcon className='contact_card-icon Email' style={{ width: '1.5em', height: '1.5em' , fill :'#ff0099' }} />
                <h3 className='contact_card-title'>Instagram</h3>
                <span className='contact_card-data'>_shivam_s.16</span>
                <span className='contact_button'>
                  Write me <ArrowIcon className='arrow_icon' style={{height : '1rem' , width : '1rem'}}/>
                </span>
              </div>  
            </div>
          </div>
          <div className='contact_content'>
            <form className='contact_form' action='' id='form'>
              <div className='input_container'>
                <textarea className='input' id='nameInput' cols={2} rows={1} value={name} onChange={handleNameChange}></textarea>
                <label htmlFor='inputs'> Enter Your Name here  </label>
                <span> Username</span>
              </div>
              <div className='input_container'>
                <textarea className='input' id='' cols={2} rows={1} value={email} onChange={handleEmailChange}></textarea>
                <label htmlFor='inputs'> Enter Your Mail here </label>
                <span> EMail </span>
              </div>
              <div className='input_container' style={{marginBottom : '2rem'}}>
                <textarea className='input' id='' cols={2} rows={1} value={phone} onChange={handlePhoneChange}></textarea>
                <label htmlFor='inputs'> Enter Your Phone here </label>
                <span> Phone</span>
              </div>
              <div className='input_container textarea'>
                {/* <input type='text' className='input'/> */}
                <textarea className='input' id='' cols={30} rows={8} value={message} onChange={handleMessageChange}></textarea>
                <label htmlFor='inputs'> Let's Talk </label>
                <span> Username</span>
              </div>
              <button type="submit" className="button" onClick={handleMailClick}>
                <SendIcon
                  style={{ width: "2rem", height: "2rem" }}
                  className="Btn About"
                />
                Send Message
              </button>
            </form>
          </div>
        </div>
    </section>
    </>
  )
});

export default Contact;
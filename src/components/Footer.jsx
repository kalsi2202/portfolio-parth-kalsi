import React,{ useRef } from 'react'
import s from '../style'
import {FaLinkedin,FaGithub,FaHandPointDown, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import {BiDownload} from 'react-icons/bi'
import cv from '../assets/ParthDocs_Resume_final.pdf'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Footer = () => {

    const notify1 = () => toast.success('Resume Downloaded', {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    const notify2 = () => toast.success('Message Sent!!!', {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9ycdckd', 'template_mn3ynm9', form.current, 'ynxUBdUHCohcsUWPd')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div className='tail'>
            <div className={`head ${s.flexCenter} my-10 md:my-16 text-slate-500 text-xl md:text-4xl font-semibold `} data-aos="fade-right" data-aos-duration="700">
                My Socials
            </div>
            <div className={`${s.flexCenter} text-xl md:text-3xl text-dark-blue`}>
                <a className={`cursor-pointer m-3 md:m-8`} data-aos="fade-down" data-aos-duration="700" href="https://www.linkedin.com/in/parth-kalsi-1a6a2a1b2/" target="_blank" rel="noreferrer">
                    <FaLinkedin/>
                </a>
                <a className={`cursor-pointer m-3 md:m-8`} data-aos="fade-down" data-aos-duration="700" href="https://github.com/kalsi2202" target="_blank" rel="noreferrer">
                    <FaGithub/>
                </a>
                <a className={`cursor-pointer m-3 md:m-8`} data-aos="fade-down" data-aos-duration="700" href="mailto:parth.kalsi22@gmail.com" target="_blank" rel="noreferrer">
                    <FaEnvelope/>
                </a>
                
                <div className={`m-3 md:m-8`}  data-aos="fade-down" data-aos-duration="700"> 
                 <FaPhone /> 
                </div>
                <div className='text-xl md:text-3xl text-dark-blue'  data-aos="fade-down" data-aos-duration="700">
                 : &nbsp; 365-341-1086
                </div>
                <div className={`m-3 md:m-8`}  data-aos="fade-down" data-aos-duration="700"> 
                 <FaMapMarkerAlt /> 
                </div>
                <div className='text-xl md:text-3xl text-dark-blue'  data-aos="fade-down" data-aos-duration="700">
                 : &nbsp; Toronto, Ontario 
                </div>

            </div>
            <div className={`${s.flexCenter} `} data-aos="zoom-in" data-aos-duration="1000">
                <a href={cv} onClick={notify1} download="Parth's resume" className={`${s.flexCenter} my-10 flex w-40 md:w-60 p-2 md:p-4 border-2 text-ice-blue text-base md:text-lg border-ice-blue rounded-lg font-bold`}>
                    <span>Get Resume</span>
                    <BiDownload className="ml-2 md:ml-4 text-xl md:text-2xl"/>
                </a>
            </div>
            <div className={`head ${s.flexCenter} my-8 text-slate-500 text-xl md:text-3xl font-semibold `} data-aos="fade-right" data-aos-duration="700">
                Write me a message
                <FaHandPointDown className='mx-1 md:mx-3'/>
            </div>
            <div className={`${s.flexCenter }`}>
                <div className={`${s.flexStart} flex-col`}>
                    <form ref={form} onSubmit={sendEmail} className={`${s.flexCenter} flex-col`}>
                        <div className="text-sm md:text-lg text-slate-500 text-center p-2 font-semibold">Your Name</div>
                        <input type="text" name="user_name" className={`bg-ice-blue w-[250px] md:w-[650px] p-2 h-8 text-sm md:text-lg md:h-10 rounded-lg text-center placeholder-white`} placeholder="Enter your name here"/>
                        <div className="text-sm md:text-lg text-slate-500 text-center p-2 font-semibold">Your Email</div>
                        <input type="email" name="user_email" className={`bg-ice-blue w-[250px] md:w-[650px] p-2 h-8 text-sm md:text-lg md:h-10 rounded-lg text-center placeholder-white`} placeholder="Enter your email here" />
                        <div className="text-sm md:text-lg text-slate-500 text-center p-2 font-semibold">Your Message</div>
                        <textarea name="message" className={`bg-ice-blue w-[250px] md:w-[650px] p-2 h-28 text-sm md:text-lg md:h-40 rounded-lg text-center placeholder-white`} placeholder="Write your message here" />
                        <button type="submit" onClick={notify2} className={`${s.flexCenter} w-[250px] md:w-[650px] p-2 h-8 md:h-10 rounded-xl my-6 bg-dark-blue font-semibold text-white `}>Send</button>
                        <ToastContainer/>
                    </form> 
                </div>
            </div>
            <div className={`${s.flexCenter} text-center mt-20 mb-5 text-xs md:text-sm text-slate-500`}>
                copyrights @2023 ParthKalsi. All Rights Reserved
            </div>
        </div>
    )
}

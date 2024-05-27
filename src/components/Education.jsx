import React from 'react'
import s from '../style'
import {MdSchool} from "react-icons/md"
import {HiBuildingOffice2} from "react-icons/hi2"

export const Education = () => {
  return (
    <div>
        <div className={`tail ${s.flexCenter} flex-col text-[10px] md:text-base`}>
                <div className="head my-8 text-slate-500 text-xl md:text-6xl font-bold " data-aos="fade-right" data-aos-duration="500">
                    Educational Qualification
                </div>
                <br/><br/>
                <div className={`${s.flexCenter} ml-[45px] md:ml-28`}>
                    <div className={`w-16 md:w-32 h-10 md:h-24 p-1 md:p-4 rounded-lg font-bold bg-ice-blue ${s.flexCenter}`} data-aos="fade-up-right">
                        Post Graduation
                    </div>
                    <div className="w-6 md:w-16 rounded-sm  h-1 mx-1 md:mx-4 bg-ice-blue" data-aos="fade-right"></div>
                    
                    <div className={`w-10 md:w-20 h-10 md:h-20  rounded-xl font-bold bg-ice-blue ${s.flexCenter}`} data-aos="zoom-in" data-aos-duration="500">
                        <HiBuildingOffice2 className="text-3xl md:text-6xl"/>
                    </div>
                    <div className="w-6 md:w-16 rounded-sm  h-1 mx-1 md:mx-4 bg-ice-blue" data-aos="fade-right"></div>
                    <div className={`w-[105px] md:w-60 h-20 md:h-32 p-1 md:p-4 rounded-xl font-bold bg-ice-blue border-4 border-dark-blue ${s.flexCenter}`} data-aos="fade-down-left">
                        Diploma in Full Stack Software Development
                    </div>
                </div>

                <div className="w-1 rounded-sm h-10 md:h-16  bg-ice-blue" data-aos="fade-up"></div>

                <div className={`${s.flexCenter} ml-48 md:ml-0 md:mr-4`}>
                    <div className={`w-24 md:w-60 h-20 md:h-32  p-1 md:p-4 rounded-xl font-bold bg-ice-blue border-4 border-dark-blue ${s.flexCenter}`} data-aos="flip-down">
                    Lambton College, Canada 
                    May 2023 - Dec 2024
                    </div>
                    <div className="w-6 md:w-16 rounded-sm  h-1 mx-1 md:mx-4 bg-ice-blue" data-aos="fade-right"></div>
                    <div className={`w-10 md:w-20 h-10 md:h-20 mr-80 rounded-full font-bold bg-ice-blue ${s.flexCenter}`} data-aos="zoom-in" data-aos-duration="500">
                        Institute </div>
                    
                </div>
            
                <div className="w-1 rounded-sm h-10 md:h-16 bg-ice-blue" data-aos="fade-up"></div>

                <div className={`${s.flexCenter} ml-[46px] md:ml-28`}>
                    <div className={`w-[50px] md:w-32 h-10 md:h-24 p-1 md:p-4 rounded-lg font-bold bg-ice-blue text-center`} data-aos="fade-up-right">
                        Graduation
                    </div>
                    <div className="w-6 md:w-16 rounded-sm  h-1 mx-1 md:mx-4 bg-ice-blue" data-aos="fade-right"></div>
                    <div className={`w-10 md:w-20 h-10 md:h-20 rounded-lg font-bold bg-ice-blue ${s.flexCenter}`} data-aos="zoom-in" data-aos-duration="500">
                        <MdSchool className="text-3xl md:text-6xl"/>
                    </div>
                    <div className="w-6 md:w-16 rounded-sm  h-1 mx-1 md:mx-4 bg-ice-blue" data-aos="fade-right"></div>
                    <div className={`w-24 md:w-60 h-20 md:h-32 p-1 md:p-4 rounded-lg font-bold bg-ice-blue border-4 border-dark-blue ${s.flexCenter}`} data-aos="fade-down-left">
                     Bachelor of Technology in Electronics and Communication
                    </div>
                </div>

                <div className="w-1 rounded-sm h-10 md:h-16 bg-ice-blue" data-aos="fade-up"></div>

                <div className={`${s.flexCenter} mt-0 md:mt-4 ml-40 md:ml-0` }>
                    <div className={`w-24 md:w-48 h-16 md:h-20 p-1 md:p-4 rounded-xl font-bold bg-ice-blue border-4 border-dark-blue ${s.flexCenter}`} data-aos="flip-down">
                        NIT Jalandhar, India
                        Aug 2018 – May 2022
                    </div>
                
                    <div className="w-6 md:w-16 rounded-sm  h-1 mx-1 md:mx-4 mb-4 md:mb-0 bg-ice-blue" data-aos="fade-right"></div>
                    <div className={`w-10 md:w-20 h-10 md:h-20 mr-72 mb-4 md:mb-0 rounded-full font-bold bg-ice-blue ${s.flexCenter}`} data-aos="zoom-in" data-aos-duration="500">
                        Institute </div>
                </div>
            </div>
    </div>
  )
}

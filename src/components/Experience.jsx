import React from 'react'
import s from '../style'
import { motion } from "framer-motion";


export const Experience = () => {
  return (
    <div className={` ${s.flexCenter} flex-col text-xs md:text-sm`}>
      <div className="head my-8 text-slate-500 text-xl md:text-4xl lg:text-6xl font-bold " data-aos="fade-right" data-aos-duration="500">
        Experiences
      </div>
      <div className={`${s.flexCenter} flex-wrap text-xs md:text-base`}>
      <motion.div
          data-aos="flip-right"
          data-aos-duration="1500"
          whileHover={{
            color: '#1a365d',
            scale: 1.1,
          }}
          transition={{
            duration: 0.1
          }}
          className={`${s.flexBetween} flex-col text-ice-blue m-3 md:m-8 rounded-2xl w-[250px] md:w-[350px] h-[350px] md:h-[470px]  border-2 border-dark-blue p-5`}>
            <div className="text-2xl md:text-4xl font-semibold my-2 text-dark-blue">Sprinklr</div>
            <div className="text-sm text-dark-blue">June 2022-March 2023</div>
            <div className=" text-base md:text-base font-semibold my-2">Product Analyst (Customer Success)</div>
          <div className=" my-2 text-sm">
            •	Managed <strong className='text-dark-blue'>client relationships</strong> across a diverse portfolio of industries, including Cisco, Intel, TikTok, Bissell, Ashley Furniture, etc.
          </div>
          <div className=" my-2 text-sm">
            •	Identified opportunities for <strong className='text-dark-blue'>cross-selling and up-selling scalable, cost-effective features </strong> to clients, streamlining operations and reducing manual interaction time by 3200 hours while cutting labor costs.
          </div>
          <div className=" my-2 text-sm">
            •	Generated approximately <strong className='text-dark-blue'>850K USD </strong> in upsell revenue and successfully renewed contracts for three high-risk accounts, <strong className='text-dark-blue'>contributing to revenue growth and client retention</strong>.
          </div>
        </motion.div>
        <motion.div
          data-aos="flip-right"
          data-aos-duration="1500"
          whileHover={{
            color: '#1a365d',
            scale: 1.1,
          }}
          transition={{
            duration: 0.1
          }}
          className={`${s.flexBetween} flex-col text-ice-blue m-3 md:m-8 rounded-2xl w-[250px] md:w-[350px] h-[350px] md:h-[470px]  border-2 border-dark-blue p-5`}>
         <div className="text-2xl md:text-4xl font-semibold my-2 text-dark-blue">IIRS ISRO, India</div>
            <div className="text-sm text-dark-blue">June 2021-July 2021</div>
            <div className=" text-base md:text-base font-semibold my-2">Software Developer Intern </div>
          <div className=" my-2 text-sm">
            •	Employed a combination of semantic segmentation to <strong className='text-dark-blue'>identify vegetation areas </strong>and instance segmentation to pinpoint individual cauliflower plants within the vegetation class, using only 2 images.
          </div>
          <div className=" my-2 text-sm">
            •	Successfully developed a <strong className='text-dark-blue'>robust detection system, accurately identifying cauliflower crops amidst diverse vegetation</strong>. This approach streamlined agricultural monitoring processes, enabling efficient crop management and yield prediction in the region.
          </div>
        </motion.div>
      
        <motion.div
        data-aos="flip-right"
        data-aos-duration="1500"
        whileHover={{
          color: '#1a365d',
          scale: 1.1,
        }}
        transition={{
          duration: 0.1
        }}
        className={`${s.flexBetween} flex-col text-ice-blue m-3 md:m-8 rounded-2xl w-[250px] md:w-[350px] h-[350px] md:h-[470px]  border-2 border-dark-blue p-5`}>

            <div className="text-2xl md:text-4xl font-semibold my-2 text-dark-blue">Government of Punjab Office</div>
            <div className="text-sm text-dark-blue">April 2021 –May 2021</div>
            <div className=" text-base md:text-base font-semibold my-2">Data Analytics Intern</div>
          <div className=" my-2 text-sm">
            •	In response to the COVID-19 pandemic, <strong className='text-dark-blue'>addressed multifaceted challenges in healthcare management</strong>, including vaccination monitoring, home isolation compliance, population demographics analysis, and healthcare resource optimization.
          </div>
          <div className=" my-2 text-sm">
            •	Developed an integrated <strong className='text-dark-blue'>healthcare analytics platform</strong> incorporating vaccination dashboards, geofencing systems for home isolation monitoring, population distribution analysis tools, and predictive analytics modules for vaccination camp performance optimization.
          </div>
      </motion.div>
      </div>
    </div>
  )
}

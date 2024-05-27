import React from "react";
import s from "../style";
import {FaReact,  FaCss3Alt, FaHtml5, FaJava, FaPython, FaLink , FaSortAmountUpAlt , FaChartLine , FaCodeBranch, FaSitemap } from "react-icons/fa"
import {TbBrandJavascript, TbBrandMongodb, TbSql, } from "react-icons/tb"
import { motion } from "framer-motion";
export const Skills = () => {
  return (
    <div>
      <div className={`tail ${s.flexCenter} text-ice-blue  flex-col my-6`}>
        <div
          className="head my-8 text-slate-500 text-xl md:text-4xl lg:text-6xl font-semibold "
          data-aos="fade-left"
        >
          Skills
        </div>

        <div className={`${s.flexCenter} w-5/6 flex-wrap my-4 text-sm md:text-base`}>
          <motion.div
            className={`m-2 p-4 md:p-10 w-72 md:w-80 h-80 md:h-[420px] border-4 border-ice-blue hover:border-dark-blue hover:text-dark-blue rounded-xl flex justify-center flex-col `}
            data-aos="zoom-out-right"
            data-aos-duration="1500"
            whileHover={{
              rotate: 10,
              scale: 1.01,
            }}
            transition={{
              type: "tween",
              stiffness: 200,
            }}
          >
            <div className={`${s.flexCenter} mb-4 text-lg  font-bold`}>
              <div>Programming Languages</div>
            </div>

            <div className={`${s.flexBetween}`}>
              <div>JAVA</div>
              <FaJava className="text-lg md:text-xl my-1 md:my-2" />
            </div>
            <div className={`${s.flexBetween}`}>
              <div>Python</div>
              <FaPython className="text-lg md:text-xl my-1 md:my-2" />
            </div>
            
            <div className={`${s.flexCenter} my-4 text-lg  font-bold`}>
              <div>Frontend Development</div>
            </div>
            
            <div className={`${s.flexBetween}`}>
              <div>HTML</div>
              <FaHtml5 className="text-lg md:text-xl my-1 md:my-2" />
            </div>
            <div className={`${s.flexBetween}`}>
              <div>CSS</div>
              <FaCss3Alt className="text-lg md:text-xl my-1 md:my-2" />
            </div>
            <div className={`${s.flexBetween}`}>
              <div>Javascript</div>
              <TbBrandJavascript className="text-lg md:text-xl my-1 md:my-2" />
            </div>
            <div className={`${s.flexBetween}`}>
              <div>React JS</div>
              <FaReact className="text-lg md:text-xl my-1 md:my-2" />
            </div>
            
          </motion.div>
          <motion.div
            className={`m-2 p-4 md:p-10 w-72 md:w-80 h-80 md:h-[420px] border-4 border-ice-blue hover:border-dark-blue hover:text-dark-blue rounded-xl flex justify-between flex-col `}
            data-aos="zoom-out"
            data-aos-duration="1500"
            whileHover={{
              rotate: 10,
              scale: 1.01,
            }}
          >
            <div className={`${s.flexCenter} mb-4 text-lg  font-bold`}>
              <div>Database Management</div>
            </div>
            
            <div className={`${s.flexBetween}`}>
              <div>SQL</div>
              <TbSql className="text-lg md:text-xl my-1 md:my-2" />
            </div>
            <div className={`${s.flexBetween}`}>
              <div>MongoDB</div>
              <TbBrandMongodb className="text-lg md:text-xl my-1 md:my-2" />
            </div>
           
            <div className={`${s.flexCenter} my-4 text-lg  font-bold`}>
              <div>CS Fundamentals</div>
            </div>

            <div className={`${s.flexBetween}`}>
              <div>Data Structures</div>
              <FaLink  className="text-lg md:text-xl my-1 md:my-2" />
            </div>
            <div className={`${s.flexBetween}`}>
              <div>Algorithms</div>
              <FaSortAmountUpAlt  className="text-lg md:text-xl my-1 md:my-2" />
            </div>
            <div className={`${s.flexBetween}`}>
              <div>OOPS</div>
              <FaSitemap className="text-lg md:text-xl my-1 md:my-2" />
            </div>
            <div className={`${s.flexBetween}`}>
              <div>Data Analysis & Visualization</div>
              <FaChartLine className="text-lg md:text-xl my-1 md:my-2" />
            </div>
            <div className={`${s.flexBetween}`}>
              <div>Basic DevOps</div>
              <FaCodeBranch className="text-lg md:text-xl my-1 md:my-2" />
            </div>
            
          </motion.div>
          <motion.div
            className={`m-2 p-4 md:p-10 w-72 md:w-80 h-80 md:h-[420px] border-4 border-ice-blue hover:border-dark-blue hover:text-dark-blue rounded-xl flex justify-center flex-col  `}
            data-aos="zoom-out-left"
            data-aos-duration="1500"
            whileHover={{
              rotate: 10,
              scale: 1.01,
            }}
          >
            <div className={`${s.flexCenter} mb-4 text-lg  font-bold`}>
              <div> Soft Skills</div>
            </div>

            <div className={`${s.flexBetween}`}>
              <div className=" my-1 md:my-2">Problem-Solving</div>
            </div>
            <div className={`${s.flexBetween}`}>
              <div className=" my-1 md:my-2">Communication</div>
            </div>
            <div className={`${s.flexBetween}`}>
              <div className=" my-1 md:my-2">Leadership</div>
            </div>
            <div className={`${s.flexBetween}`}>
              <div className=" my-1 md:my-2">Teamwork</div>
            </div>
            <div className={`${s.flexBetween}`}>
              <div className=" my-1 md:my-2">Time Management</div>
            </div>
            <div className={`${s.flexBetween}`}>
              <div className=" my-1 md:my-2">Customer Oriented</div>
            </div>
            <div className={`${s.flexBetween}`}>
              <div className=" my-1 md:my-2">Stakeholder Management</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

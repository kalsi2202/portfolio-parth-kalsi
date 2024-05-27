import React from 'react'
import s from '../style'
import { motion } from 'framer-motion'
import movies from '../assets/movie.PNG'
import delab from '../assets/delab.jpeg'
import { BsArrowUpRightSquare } from 'react-icons/bs'

export const Projects = () => {
    return (
        <div>
            <div className={`tail ${s.flexCenter} text-dark-blue flex-col my-6`}>
                <div className="head my-8 text-slate-500 text-xl md:text-4xl lg:text-6xl font-semibold " data-aos="fade-right">Projects</div>
                <br /><br />
                <div className={`${s.flexCenter} flex-wrap text-xs md:text-base `}>
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
                        className={`${s.flexCenter} flex-col text-ice-blue m-4 md:m-10 rounded-2xl w-[350px] md:w-[500px] h-[600px] md:h-[650px] border-2 border-dark-blue `}>
                        <img className="h-32 md:h-52 rounded-2xl object-cover border-2 border-dark-blue w-[200px] md:w-[350px] " src={movies} alt="page" />
                        <div className="text-lg md:2xl font-semibold my-4 md:my-6">Movie Watchlist App</div>
                        <div className="text-center md:text-lg px-10 ">
                         The <strong className='text-dark-blue'>movie watchlist app </strong> allows users to create accounts with just an email address, simplifying the process. Users can easily log in and out using their <strong className='text-dark-blue'>email addresses</strong>. They can search for movies by title and view detailed information such as release year, and poster. Additionally, users can create their <strong className='text-dark-blue'>personalized watchlists</strong> and add movies to them, and view them at any time. If multiple users log in or log out, they are able to see their respective information, as it has been saved.
                        </div>
                        <div className={`${s.flexBetween}`}>
                            <div className={`${s.flexCenter} mr-16 md:mr-28 py-10 md:py-20 flex-col`}>
                                <span className="font-semibold mb-2">Tech-Stacks :-</span>
                                <ul>
                                    <li>React</li>
                                    <li>Typescript</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className={`${s.flexBetween} p-3 border-2 border-ice-blue rounded-lg font-bold`}>
                                    <a href="https://github.com/kalsi2202/movie-watchlist" target="_blank" rel="noreferrer">
                                        <button className={`w-10 md:w-24 h-6 md:h-10 cursor-pointer`}>Github Link</button>
                                    </a>
                                    <BsArrowUpRightSquare />
                                </div>
                            </div>
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
                        className={`${s.flexCenter} flex-col text-ice-blue m-4 md:m-10 rounded-2xl w-[350px] md:w-[500px] h-[600px] md:h-[650px] border-2 border-dark-blue `}>                        
                        <img className="h-32 md:h-52 rounded-2xl border-2 border-dark-blue w-[200px] md:w-[350px] " src={delab} alt="page" />
                        <div className="text-lg md:2xl font-semibold my-4 md:my-6">Virtual Digital Electronics Lab</div>
                        <div className="text-center md:text-lg px-10 ">
                           The <strong className='text-dark-blue'>virtual DE Lab</strong> enables seamless login functionality for professors and students to access virtual lab resources during the pandemic, <strong className='text-dark-blue'>facilitating remote learning</strong>. Developed a comprehensive virtual lab platform featuring a curated list of experiments with detailed aims, theories, simulations, and truth tables, empowering users to <strong className='text-dark-blue'>understand and analyze experiments </strong>remotely.    
                        </div>
                        <div className={`${s.flexBetween}`}>
                            <div className={`${s.flexCenter} mr-16 md:mr-28 py-10 md:py-20 flex-col`}>
                                <span className="font-semibold mb-2">Tech-Stacks :-</span>
                                <ul>
                                    <li>DBC Connectivity</li>
                                    <li>MySQl</li>
                                    <li>Core JAVA</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                   
                </div>
            </div>
        </div>
    )
}

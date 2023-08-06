import React, {useState} from 'react';
import {interviewData} from "../data";
import ModalVideo from 'react-modal-video';

import '../modalVideo.scss';

import {motion} from "framer-motion";

import {fadeIn} from "../variants";

const Interview = () => {
  const {title,btnText,btnIcon} = interviewData;
  const [isOpen,setIsOpen] = useState(false);
  return (<motion.section id="interview"
              variants={fadeIn('up')}
              initial="hidden"
              whileInView={'show'}
              viewport={{once:false, amount:0.2}}
             className='bg-dark section
                             bg-interview
                             bg-no-repeat
                             bg-cover
                             lg:h-[812px]'>
               <div className="container mx-auto h-full">
                    <div className='flex flex-col justify-center h-full'>
                        <div className='flex flex-col items-start max-x-[880px] '>
                           {/* title */}
                            <h3 className='text-white
                                           text-[40px]
                                           lg:text-[60px]
                                           leading-[1.1] font-tertiary -tracking-[1.5px] capitalize mb-8'>
                                {title}
                            </h3>
                            <div>
                                {/* play btn */}
                                <div
                                    onClick={()=>setIsOpen(true)}
                                    className='flex text-white items-center gap-x-5
                                    cursor-pointer hover:opacity-80 transition '>
                                    {/* border */}
                                    <div className='w-[70px] h-[70px]  lg:w-[91px] lg:h-[91px]
                                        border border-white/40 rounded-full text-dark p-[5px] lg:p-[8px]'>
                                        {/* inner */}
                                        <div className='bg-white w-full h-full rounded-full flex
                                        justify-center items-center'>
                                            <div className='pl-1'>{btnIcon}</div>
                                        </div>
                                        {/* btn text  */}
                                        <div className='font-primary uppercase'>{btnText}</div>
                                    </div>

                                </div>
                                {/* modal video */}
                                <ModalVideo
                                    channel="youtube"
                                    autoplay
                                    isOpen={isOpen}
                                    videoId="sSZNLAIL65M"
                                    onClose={() => setIsOpen(false)}
                                />


                            </div>


                        </div>
                    </div>
               </div>

              </motion.section>);
};

export default Interview;

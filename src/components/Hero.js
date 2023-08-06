import React from 'react';

//import hero data 
import {heroData} from '../data';

//import motion
import {motion} from 'framer-motion';

//import fadeIn
import {fadeIn} from '../variants';

const container = {

    hidden:{},
    transition: {
        staggerChildren: 0.1 ,
        delayChildren: 0.6
    }
}

const Hero = () => {
  // destruction
  const {title,subtitle,btnIcon,btnText} = heroData;
  return <section className='bg-hero bg-cover bg-center min-h-[40ph]
  lg:h-[948px] bg-no-repeat relative mt-[120px]
  lg:mt-[150px]'>
  <motion.div
      variants={container}
      initial='hidden'
      whileInView={'show'}
      className='container mx-auto min-h-[40ph] lg:h-full flex
  items-center justify-center xl:justify-end'>

     {/*   text & btn */}
     <div className='text-white text-center lg:text-left lg:max-w-[640px]'>
       {/*   text */}
      <motion.h1
          variants={fadeIn('down')}
          className='h1'>{title}</motion.h1>
      <motion.p className='mb-8 lg:mb-16 maw-w-lg leading-relaxed'>{subtitle}</motion.p>
       {/*  btn */}
       <div>
        <button className='btn btn-sm lg:btn-lg btn-outline mx-auto lg:mx-0'>
            {btnText} <div>{btnIcon}</div></button>
       </div>
         {/*  outline text  */}
         <div className='hidden xl:flex absolute -bottom-2 right-0 left-0
         before:content-outlineText'>

         </div>
     </div>



  </motion.div>

  </section>;
};

export default Hero;

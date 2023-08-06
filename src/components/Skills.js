import React , {useState,useEffect} from 'react';
import {useInView} from "react-intersection-observer";

import {CircularProgressbar} from "react-circular-progressbar";

//react circular styles
import 'react-circular-progressbar/dist/styles.css';

import {motion} from "framer-motion";
import {fadeIn} from "../variants";

const Skills = () => {

  // destructure useInView hook
  const {ref, inView} = useInView({
    threshold:0.2
  });

  // full body
 const [fullBody,setFullBody] = useState(0);
  const [piercing,setPiercing] = useState(0);
  const [fullColor,setFullColor] = useState(0);
  const [temporary,setTemporary] = useState(0);

 useEffect(() =>{
   if(inView){
     setTimeout(()=>{
       if(fullBody < 90){
         setFullBody(fullBody +1 );
       }
       if(piercing < 80){
         setPiercing(piercing +1 );
       }
       if(fullColor < 60){
         setFullColor(fullColor +1 );
       }
       if(temporary < 50){
         setTemporary(temporary +1 );
       }

     },50);
   }else{
     setFullBody(0 );
     setPiercing(0 );
     setFullColor(0 );
     setTemporary(0);
   }
 },[inView,fullBody,piercing,fullColor,temporary])
  //CircularProgressbar styles
  const  styles = {
      path: {
        stroke : '#111111'
      },
      trail: {
        stroke : '#eeeeee'
      },
      fill: {
      stroke : '#111111',
        fontSize: '24px'
    },
  }
  return <motion.section ref={ref} id="skills"
                  variants={fadeIn('up')}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{once:false, amount:0.1}}

                  className='section font-primary'>
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row justify-center items-center gap-y-12">

        {/* circular item*/}
        <div className='w-[150px] h-[150px] lg:w-[275px]
          flex flex-col items-center gap-y-6'>
          <CircularProgressbar
              strokeWidth={1}
              value={fullBody}
              styles={styles}
              text={`${fullBody}%`}

          />
          {/* text*/}
          <div className="uppercas font-light tracking-[1.2px] text-center">
            Full body Tatoo
          </div>
        </div>
        {/* circular item*/}
        <div className='w-[150px] h-[150px] lg:w-[275px]
          flex flex-col items-center gap-y-6'>
          <CircularProgressbar
              strokeWidth={1}
              value={piercing}
              styles={styles}
              text={`${piercing}%`}

          />
          {/* text*/}
          <div className="uppercas font-light tracking-[1.2px] text-center">
            Safely Piercing
          </div>
        </div>
        {/* circular item*/}
        <div className='w-[150px] h-[150px] lg:w-[275px]
          flex flex-col items-center gap-y-6'>
          <CircularProgressbar
              strokeWidth={1}
              value={fullColor}
              styles={styles}
              text={`${fullColor}%`}

          />
          {/* text*/}
          <div className="uppercas font-light tracking-[1.2px] text-center">
            Full Color Tatoo
          </div>
        </div>
        {/* circular item*/}
        <div className='w-[150px] h-[150px] lg:w-[275px]
          flex flex-col items-center gap-y-6'>
          <CircularProgressbar
              strokeWidth={1}
              value={temporary}
              styles={styles}
              text={`${temporary}%`}

          />
          {/* text*/}
          <div className="uppercas font-light tracking-[1.2px] text-center">
            Temporary Tatoo
          </div>
        </div>

      </div>
    </div>
  </motion.section>;
};

export default Skills;

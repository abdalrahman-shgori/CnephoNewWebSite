import * as React from "react"
import {motion,AnimatePresence} from 'framer-motion'
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
          transition: {
          pathLength: { delay, type: "spring", duration: 3, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };
  
const UiUx = (props) => { 
    const animatedElementRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

  
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5, // Adjust as needed, 0.5 means 50% of the element must be visible
        };

        const callback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Start your animations when the element is in view
                    startAnimations();
                    setIsInView(true)
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        if (animatedElementRef.current) {
            observer.observe(animatedElementRef.current);
        }

        return () => {
            if (animatedElementRef.current) {
                observer.unobserve(animatedElementRef.current);
            }
        };
    }, []);

    const startAnimations = () => {
        // Use useRef to access the current property of the animatedElementRef
        const uiuxElement = animatedElementRef.current.querySelector(`.uiux`);

            uiuxElement.style.animation = "drawPathUiUx 30s 0.5s forwards";
            
        
    };
    return(
        <svg
        ref={animatedElementRef}
        xmlns="http://www.w3.org/2000/svg"
        width={144}
        height={144}
        fill="none"
        {...props}
      >
            <motion.g
        
        animate={isInView &&{
           scale: [1, 1.1, 1.1, 1, 1],
           rotate: [0, 0, 180, 180, 0],
         }}
         transition={isInView &&{
           duration: 2,
           ease: "easeInOut",
           times: [0, 0.2, 0.5, 0.8, 1],
           repeat:0,
           repeatDelay: 1,
           delay:0.5
         }}
         className="av"
       filter="url(#a)">
         <motion.rect
         animate={isInView &&{
           rx: ["8%", "8%", "50%", "50%", "8%"]
   
         }}
         
          transition={isInView &&{
           duration: 2,
           ease: "easeInOut",
           times: [0, 0.2, 0.5, 0.8, 1],
           repeat: 0,
           repeatDelay: 1,
           delay:0.5
         }}
           width={89.079}
           height={89.079}
           x={7}
           y={67.988}
           fill="#21D6D6"
           // rx={8}
           transform="rotate(-45 7 67.988)"
         />
       </motion.g>
        <motion.path
          cx="100"
          cy="100"
          r="80"
          stroke="#FFF"
          variants={draw}
          className="uiux"
          custom={3}
          fill="21D6D6"
          d="M68 55.988c-1.526 0-2.95.426-4.164 1.168a6.61 6.61 0 0 0-.678-1.92A10 10 0 0 1 78 63.988h5.002a3 3 0 0 1 2.998 3v12a3 3 0 0 1-3 3H71a3 3 0 0 1-3-3v-5a9.966 9.966 0 0 1-4.04-.85c.026-.68.04-1.394.04-2.15v-.07a7.966 7.966 0 0 0 4 1.07v-5a3 3 0 0 1 3-3h5a8 8 0 0 0-8-8Zm9.8 10a10.013 10.013 0 0 1-7.8 7.8v5.2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1h-5.2Zm-2.052 0H71a1 1 0 0 0-1 1v4.748a8.014 8.014 0 0 0 5.748-5.748Zm-16.586-13.75a1 1 0 0 1 .238 1.196.66.66 0 0 0-.026.18c0 .126.032.366.334.666.146.146.258.25.38.364.1.092.206.188.34.32.26.248.534.54.78.906.51.766.792 1.724.792 3.118 0 1.706-.632 3.16-1.618 4.052l.128.148c.56.688.886 1.58 1.09 2.46.4 1.74.4 3.832.4 5.29v.05c0 5.574-.758 8.736-1.592 10.544-.42.91-.866 1.49-1.252 1.854-.157.15-.33.284-.516.396a1.977 1.977 0 0 1-.266.134s-.226.072-.374.072-.374-.072-.374-.072a1.496 1.496 0 0 1-.266-.134 2.955 2.955 0 0 1-.516-.396c-.386-.366-.832-.944-1.252-1.854C54.758 79.724 54 76.562 54 70.988v-.05c0-1.46 0-3.55.4-5.29.204-.88.53-1.772 1.09-2.46.04-.05.084-.1.128-.148-.986-.892-1.618-2.346-1.618-4.052 0-.652.174-1.43.414-2.148.24-.72.576-1.464.964-2.064.462-.78 1.112-1.434 1.616-1.874.276-.243.565-.472.864-.686l.06-.04.018-.014.006-.004.004-.002a1 1 0 0 1 1.216.082ZM58 61.988c.774-.002 2-.86 2-3 0-1.106-.218-1.648-.458-2.008a3.53 3.53 0 0 0-.502-.578l-.248-.232c-.162-.152-.352-.328-.5-.474a3.342 3.342 0 0 1-.558-.73 4.986 4.986 0 0 0-.668.88c-.28.43-.552 1.02-.754 1.628-.208.62-.312 1.168-.312 1.514 0 2.144 1.23 3 2 3Zm-.96 2.464c-.284.346-.52.898-.692 1.646-.344 1.496-.348 3.376-.348 4.89 0 5.426.742 8.264 1.408 9.706.22.474.426.79.592 1 .236-.309.435-.644.592-1 .666-1.442 1.408-4.28 1.408-9.706 0-1.514-.004-3.394-.35-4.89-.172-.748-.408-1.3-.69-1.646a1.145 1.145 0 0 0-.96-.464h-.004a1.143 1.143 0 0 0-.956.464Z"
        />
        <defs>
          <filter
            id="a"
            width={143.349}
            height={143.35}
            x={0.314}
            y={0.313}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feMorphology
              in="SourceAlpha"
              operator="dilate"
              radius={4}
              result="effect1_dropShadow_771_672"
            />
            <feOffset dx={2} dy={4} />
            <feGaussianBlur stdDeviation={4} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0.2 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_771_672" />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_771_672"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    )

}
export default UiUx

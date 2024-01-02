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
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };    
const CyperSecuritySvg = (props) => {
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
        const CyperElement = animatedElementRef.current.querySelector(`.Cyper`);

        if (CyperElement) {
            CyperElement.style.animation = "drawPathComputer 30s 0.5s forwards";
            
        }
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
        <g clipPath="url(#b)">
          <motion.path
          x1="220"
          y1="170"
          x2="360"
          y2="30"
          stroke="#FFF"
          variants={draw}
          custom={2.5}
            className="Cyper"
            fill="21D6D6"
            d="M81.53 72.134c-.21 4.545-3.973 7.826-8.94 7.826H62.233V69.755l-3.641-1.595V83H72.56c7.223 0 12.582-4.936 12.582-11.468v-.272a17.665 17.665 0 0 1-3.612.874Zm2.258-15.835c-2.77-6.11-4.245-11.65-8.068-12.944-2.227-.753-3.342-.151-4.395.362a.51.51 0 0 0-.12.842c.602.511 1.355 1.145 2.227 1.956-3.25-1.897-12.222-4.725-13.124-1.293-.813 3.1-2.198 7.645-2.198 7.645s-7.105-.722-7.917 2.288c-.813 3.01 5.539 8.79 16.045 11.89 10.505 3.102 18.664 2.288 22.185-1.535 3.522-3.823.12-9.121-4.635-9.211Zm-2.078.06c-.812.783-3.462 2.8-9.272 2.378-6.23-.452-11.348-4.123-12.673-5.147a.562.562 0 0 1-.21-.663c.09-.3.21-.782.422-1.415.12-.39.571-.572.903-.36 2.618 1.505 6.833 3.702 11.318 4.003 4.004.272 6.412-.903 7.977-1.776a.647.647 0 0 1 .903.331l.784 1.927c.06.27.03.542-.152.722Z"
          />
        </g>
        <defs>
          <clipPath id="b">
            <path fill="#fff" d="M50 43h40v40H50z" />
          </clipPath>
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
              result="effect1_dropShadow_771_670"
            />
            <feOffset dx={2} dy={4} />
            <feGaussianBlur stdDeviation={4} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0.2 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_771_670" />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_771_670"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    ) 
  
}
export default CyperSecuritySvg

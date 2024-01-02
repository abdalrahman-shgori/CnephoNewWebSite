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
  
const WebSvg = (props) => { 
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
        const computerElement = animatedElementRef.current.querySelector(`.computer`);
        const webtriangle = animatedElementRef.current.querySelector(`.webtriangle`);

        if (computerElement && webtriangle) {
            computerElement.style.animation = "drawPathComputer 30s 0.5s forwards";
            webtriangle.style.animation = "move 4s infinite";
            
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
    className="webtriangle"
          fill="#21D6D6"
          d="M82.5 50.5h5v5h-5v-5Zm0 7.5h5v5h-5v-5ZM75 50.5h5v5h-5v-5Zm0 7.5h5v5h-5v-5Z"
        />
        <motion.path
        cx="100"
        cy="100"
        r="80"
        stroke="#FFF"
        variants={draw}
        custom={1}
          className="computer"
          fill="#21D6D6"
          d="M85 68v7.5H55v-20h15V53H55a2.5 2.5 0 0 0-2.5 2.5v20A2.5 2.5 0 0 0 55 78h10v5h-5v2.5h20V83h-5v-5h10a2.5 2.5 0 0 0 2.5-2.5V68H85ZM72.5 83h-5v-5h5v5Z"
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
              result="effect1_dropShadow_771_671"
            />
            <feOffset dx={2} dy={4} />
            <feGaussianBlur stdDeviation={4} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0.2 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_771_671" />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_771_671"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    )
 
        }
export default WebSvg

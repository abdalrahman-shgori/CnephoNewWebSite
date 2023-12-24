import React, { useState, useEffect, useRef } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { Box, Grid, Typography } from '@mui/material';
import { useTranslation } from "react-i18next";

const CustomProgressBar = () => {
  const { i18n, t } = useTranslation();
  const selectLanguage = i18n.language

  const [progress, setProgress] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const progressBar = progressBarRef.current;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let interval;

          const updateProgress = () => {
            setProgress((prevProgress) => (prevProgress < 85 ? prevProgress + 1 : 85));
            setProgress2((prevProgress) => (prevProgress < 75 ? prevProgress + 1 : 75));
            setProgress3((prevProgress) => (prevProgress < 95 ? prevProgress + 1 : 95));
          };

          interval = setInterval(updateProgress, 1000);

          const checkCompletion = () => {
            if (progress >= 85 && progress2 >= 75 && progress3 >= 95) {
              clearInterval(interval);
            }
          };

          const scrollHandler = () => {
            checkCompletion();
          };

          window.addEventListener('scroll', scrollHandler);

          updateProgress();
          checkCompletion();

          return () => {
            clearInterval(interval);
            window.removeEventListener('scroll', scrollHandler);
          };
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {});

    if (progressBar) {
      observer.observe(progressBar);
    }

    return () => {
      if (progressBar) {
        observer.unobserve(progressBar);
      }
    };
  }, [progress, progress2, progress3]);

  return (
    <>
      {[
        { id: 0, name: 'consulting', percentage: progress },
        { id: 1, name: 'solutions', percentage: progress2 },
        { id: 2, name: 'success', percentage: progress3 },
      ].map((item) => (
        <Grid key={item.id} sx={{ marginTop: { lg: '24px', md: '24px', sm: '24px', xs: '18px' } }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography
                sx={{
                  color: 'var(--white-color)',
                  fontSize: { lg: '24px', md: '24px', sm: '24px', xs: '16px' },
                  fontWeight: '700',
                  lineHeight: '36px',
                  fontVariant: 'small-caps',
                  textAlign: 'justify',
                  fontFamily: 'var(--English-font)',
                }}
              >
                {item.name}
              </Typography>
              <Typography
                sx={{
                  color: 'var(--white-color)',
                  fontSize: { lg: '24px', md: '24px', sm: '24px', xs: '16px' },
                  fontWeight: '700',
                  lineHeight: '36px',
                  fontVariant: 'small-caps',
                  textAlign: 'justify',
                  fontFamily: 'var(--English-font)',
                }}
              >
                {item.percentage}%
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={item.percentage}
              sx={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                height: '24px',
                transform: selectLanguage === "ar" && 'rotateY(180deg)',

                '& .MuiLinearProgress-bar': {
                  backgroundColor: 'var(--header-color)',
                  borderRadius: '8px',
                  transform: selectLanguage === "ar" && 'rotateY(180deg)',

                },
              }}
              ref={progressBarRef}
            />
          </Box>
        </Grid>
      ))}
    </>
  );
};

export default CustomProgressBar;

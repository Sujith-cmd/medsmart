"use client"
import React,{ useRef } from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Consult', 'Treat', 'Feel good', 'Start again'];

 const TransitionalText = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    
        <span>

      <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
        </span>
    
  );
};

export default TransitionalText
  
"use client"
import React, { forwardRef } from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Consult', 'Treat', 'Feel good', 'Start again'];

const TransitionalText = forwardRef<HTMLHeadingElement, React.HTMLProps<HTMLHeadingElement>>((props, ref) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearInterval(intervalId); // Use clearInterval instead of clearTimeout
  }, []);

  return (
    <h1 ref={ref} {...props}>
      <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
    </h1>
  );
});

export default TransitionalText;

  
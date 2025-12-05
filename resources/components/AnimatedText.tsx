
import React, { useState, useEffect } from 'react';

interface AnimatedTextProps {
  texts: string[];
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ texts }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    if (texts.length === 0) return;

    if (isDeleting) {
      if (subIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      } else {
        const timeout = setTimeout(() => {
          setSubIndex((prev) => prev - 1);
          setCurrentText(texts[index].substring(0, subIndex - 1));
        }, 75);
        return () => clearTimeout(timeout);
      }
    } else {
      if (subIndex === texts[index].length) {
        const delay = setTimeout(() => setIsDeleting(true), 2000);
        return () => clearTimeout(delay);
      } else {
        const timeout = setTimeout(() => {
          setSubIndex((prev) => prev + 1);
          setCurrentText(texts[index].substring(0, subIndex + 1));
        }, 150);
        return () => clearTimeout(timeout);
      }
    }
  }, [subIndex, isDeleting, index, texts]);

  return (
    <span className="relative">
      {currentText}
      <span className="absolute right-[-2px] top-0 bottom-0 w-0.5 bg-gray-300 animate-pulse"></span>
    </span>
  );
};

export default AnimatedText;
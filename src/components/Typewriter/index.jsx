import { string } from 'prop-types';
import { useState, useEffect } from 'react';
import { useAppSelector } from '@/hooks';
import { getConfig } from '@/store/slices/config';
import { typewriter } from './variants';

const Typewriter = ({ text = '' }) => {
  const { themeId: theme } = useAppSelector(getConfig);
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const { base } = typewriter({ isTyping, theme });

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        setCurrentIndex(currentIndex + 1);
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, Math.floor(Math.random() * 50));

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex, text]);

  return <span className={ base() }>{ displayText }</span>;
};

Typewriter.propTypes = {
  text: string.isRequired
};

export default Typewriter;

import { useState, useEffect, useRef } from 'react';

const TEXTS = [
  'AI Integration',
  'Integrated Web Development',
  'Embedded Systems',
  'LLM-Powered Apps',
];

const TYPING_DELAY = 100;
const DELETING_DELAY = 55;
const PAUSE_DELAY = 2200;
const START_DELAY = 800;

export function useTypedText() {
  const [displayText, setDisplayText] = useState('');
  const textIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      const current = TEXTS[textIndex.current];

      if (isDeleting.current) {
        charIndex.current--;
        setDisplayText(current.substring(0, charIndex.current));

        if (charIndex.current === 0) {
          isDeleting.current = false;
          textIndex.current = (textIndex.current + 1) % TEXTS.length;
          timer = setTimeout(tick, 400);
        } else {
          timer = setTimeout(tick, DELETING_DELAY);
        }
      } else {
        charIndex.current++;
        setDisplayText(current.substring(0, charIndex.current));

        if (charIndex.current === current.length) {
          isDeleting.current = true;
          timer = setTimeout(tick, PAUSE_DELAY);
        } else {
          timer = setTimeout(tick, TYPING_DELAY);
        }
      }
    }

    timer = setTimeout(tick, START_DELAY);
    return () => clearTimeout(timer);
  }, []);

  return displayText;
}

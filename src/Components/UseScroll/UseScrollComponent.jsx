import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const UseScrollComponent = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2000,
      delay: 200,
    });

    sr.reveal('.animation', { interval: 200 });
     // Добавяме този клас на елементите, които искаме да анимираме
  }, []);
};

export default UseScrollComponent;

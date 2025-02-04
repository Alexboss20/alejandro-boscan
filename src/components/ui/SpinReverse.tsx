import { useState, useEffect } from 'react';

interface PropsWords{
    src:string
    alt:string
}

const RotatingImage = ({ src, alt }:PropsWords) => {
  const [isReversed, setIsReversed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsReversed(prev => !prev);
    }, 10000); // Cambia de dirección cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <img
      className={`rounded-full transition-transform duration-1000 ${isReversed ? 'animate-reverseSpin' : 'animate-spin'}`} 
      src={src} 
      alt={alt}
      width={130}
      height={130}
    />
  );
};

export default RotatingImage;
